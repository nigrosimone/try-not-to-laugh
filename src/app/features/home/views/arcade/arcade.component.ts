import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js';
import { CameraDetectionComponent } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { YoutubePlayerWrapperComponent } from 'src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.component';
import { randomItemFromArray } from 'src/app/shared/utils/common';


const VIDEOS = ['BQJsMQjrBsw', 'FFLTU9eIijw', 's5kBCni69EM'];
const MISSIMG_LIMIT = 10;
@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.scss']
})
export class ArcadeComponent {

  @ViewChild('cameraDetection', { static: false }) cameraDetection: CameraDetectionComponent;
  @ViewChild('youtube', { static: false }) youtube: YoutubePlayerWrapperComponent;

  // id del video di youtube
  public videoId = randomItemFromArray<string>(VIDEOS);

  // true se l'espressione facciale è stata trovata nella webcam
  public faceDetected = false;
  // numero di volte consecutive che l'espressione non è stata trovata
  public faceMissingDetection = 0;
  // se true l'espressione facciale è stata trovata almeno una volta
  public firstDetectionHappen = false;
  // se true il riconoscimento facciale è pronto
  public detectionReady = false;

  // se true youtube e il riconoscimento facciale sono pronti
  public allReady = false;

  // partita terminata
  public endMatch = false;
  // partita terminata come persa
  public loseMatch = false;
  // partita terminata come vinta
  public winMatch = false;

  // valore di felicità dell'espressione facciale
  public happy = 0;

  // true se la partita può iniziare
  public readyToGame = false;

  // true se il player video di youtube è stato caricato
  public youtubeReady = false;

  // secondi visti del video di youtube
  public timeElapse = 0;

  // massimo di secondi visti del video di youtube
  public recordDuration = 0;

  // dimensioni dell'area di gioco
  public width = 0;
  public height = 0;

  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef) {
    this.recordDuration = this.getLocalStorageDuration();
    this.doResize();
  }

  /**
   * Evento di cambiamento di stato del player di YouTube
   */
  onStateChange(e: YT.OnStateChangeEvent): void {
    if (e.data === YT.PlayerState.ENDED) {
      this.endGame(true);
    }
  }

  /**
   * Evento di caricamento completato del player di YouTube
   */
  onReady(e: YT.PlayerEvent): void {
    this.youtubeReady = true;
    this.allReady = this.youtubeReady && this.detectionReady;
  }

  /**
   * Evento di caricamento completato del riconoscimento facciale
   */
  onDetectionReady(e: boolean): void {
    this.detectionReady = true;
    this.allReady = this.youtubeReady && this.detectionReady;
  }

  /**
   * Evento di cambiamento del riconoscimento facciale
   */
  onDetectionChanges(e: faceapi.FaceExpressions): void {

    // ridimensioniamo l'area di gioco
    this.doResize();

    // se il player di youtube non  è pronto non facciamo nient'altro
    if (!this.youtubeReady) {
      return;
    }

    // faccia trovata?
    if (e) {
      // almeno una volta l'abbiamo trovata...
      this.firstDetectionHappen = true;
      // resettiamo il conteggio delle volte che non l'abbiamo trovata
      this.faceMissingDetection = 0;

      const happy = e.happy;
      if (this.happy !== happy) {
        this.happy = happy;
        this.cdr.markForCheck();
      }

      // se la felicità è maggiore di ... ha perso
      if (this.happy > 0.8) {
        this.endGame(false);
        return;
      }
    } else {
      // faccia non trovata...
      this.happy = 0;
      // se l'abbiamo trovata almeno una volta, incrementiamo il conteggio delle volte che non l'abbiamo trovata
      if (this.firstDetectionHappen) {
        this.faceMissingDetection++;
      }
    }

    // recuperiamo il tempo di esecuzione del video di youtube
    const timeElapse = Math.floor(this.youtube.getCurrentTime()) - this.recordDuration;
    if (this.timeElapse !== timeElapse) {
      this.timeElapse = timeElapse;
      this.setLocalStorageDuration(this.timeElapse);
    }

    this.manageDetectionState();
  }

  /**
   * Gestisce lo stato di ricerca della faccia nello stream video
   */
  manageDetectionState(): void {
    // se siamo sotto la soglia del fallimento della ricerca della faccia, assumiamo di averla trovata
    // NB: capita che il riconoscimento fallisca su qualche fotogramma, quindi diamo una tolleranza
    // di MISSIMG_LIMIT tentativi
    let faceDetected = this.faceMissingDetection < MISSIMG_LIMIT;
    // se non l'abbiamo trovata almeno una volta, non l'abbiamo trovata a prescindere dai tentativi fatti
    if (!this.firstDetectionHappen) {
      faceDetected = false;
    }
    if (this.faceDetected !== faceDetected) {
      this.faceDetected = faceDetected;
      this.manageReadyToGameState();
      this.cdr.markForCheck();
    }
    // se non abbiamo la faccia, mettiamo anche in pausa il video di youtube,
    // questo perchè il video parte in autoplay la prima volta
    if (!this.faceDetected) {
      this.youtube.pauseVideo();
    } else {
      this.youtube.playVideo();
    }
  }

  /**
   * Termina la partita
   */
  endGame(userWin: boolean): void {
    if (!this.endMatch) {
      this.winMatch = userWin;
      this.loseMatch = !this.winMatch;
      this.endMatch = true;
      // mettiamo in pausa il video della webcam
      this.cameraDetection.pauseVideo();
      // fermiamo il video di youtube
      this.youtube.stopVideo();
      this.manageReadyToGameState();
      this.cdr.markForCheck();
    }
  }

  /**
   * Gestisce lo stato della partita (se è pronta per essere giocata o meno)
   */
  manageReadyToGameState(): void {
    // può essere giocata se non è terminata e se abbiamo trovato la faccia
    const readyToGame = !this.endMatch && this.faceDetected;
    if (this.readyToGame !== readyToGame) {
      this.readyToGame = readyToGame;
      this.cdr.markForCheck();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.doResize();
  }

  @HostListener('window:orientationchange')
  onOrientationChange(): void {
    this.doResize();
  }

  doResize(): void {
    // -1 altrimenti esce la scrollbar
    const w = this.elRef.nativeElement.clientWidth - 1;
    const h = this.elRef.nativeElement.clientHeight - 1;

    if (w !== this.width || h !== this.height) {
      this.width = w;
      this.height = h;
      this.cdr.markForCheck();
    }
  }

  /**
   * Recupera dal localstorage l'ultima durata del video corrente
   */
  getLocalStorageDuration(): number {
    return +localStorage.getItem(`arcade-${this.videoId}-duration`);
  }

  /**
   * Setta nel localstorage l'ultima durata del video corrente
   */
  setLocalStorageDuration(value: number): void {
    localStorage.setItem(`arcade-${this.videoId}-duration`, value.toString());
  }
}
