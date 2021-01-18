import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js';
import { Subscription } from 'rxjs';
import { WindowService } from 'src/app/core/services/window/windos.service';
import { CameraDetectionComponent } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { YoutubePlayerWrapperComponent } from 'src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.component';
import { randomItemFromArray, safeUnsubscribe } from 'src/app/shared/utils/common';

const VIDEOS = ['BQJsMQjrBsw', 'FFLTU9eIijw', 's5kBCni69EM'];
@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.scss']
})
export class ArcadeComponent implements OnInit, OnDestroy {

  @ViewChild('cameraDetection', { static: false }) cameraDetection: CameraDetectionComponent;
  @ViewChild('youtube', { static: false }) youtube: YoutubePlayerWrapperComponent;

  // id del video di youtube
  public videoId = randomItemFromArray<string>(VIDEOS);

  // true se l'espressione facciale è stata trovata nella webcam
  public faceDetected = false;
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

  private subVwChanges: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private windowService: WindowService,
    private elRef: ElementRef) {
    this.recordDuration = this.getLocalStorageDuration();
  }

  ngOnInit(): void {
    this.subVwChanges = this.windowService.viewPortChanges.subscribe(() => {
      this.doResize();
    });
  }

  ngOnDestroy(): void {
    safeUnsubscribe(this.subVwChanges);
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
  onYoutubeReady(e: YT.PlayerEvent): void {
    this.youtubeReady = true;
    this.doThirdPartyOnReady();
  }

  /**
   * Evento di caricamento completato del riconoscimento facciale
   */
  onDetectionReady(e: boolean): void {
    this.detectionReady = true;
    this.doThirdPartyOnReady();
  }

  /**
   * Quando il player youtube o il riconoscimento sono ready, gestiamo le parti comuni
   */
  doThirdPartyOnReady(): void {
    this.allReady = this.youtubeReady && this.detectionReady;
    this.doResize();
  }

  /**
   * Evento scatenato al primo riconoscimento facciale
   */
  onFirstDetection(e: boolean): void {
    this.firstDetectionHappen = e;
  }

  /**
   * Evento ad ogni cambiamento di stato (trovata/non trovata la faccia)
   */
  onDetectionFace(e: boolean): void {
    this.faceDetected = e;
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
    }

    // recuperiamo il tempo di esecuzione del video di youtube
    const timeElapse = this.youtube.getCurrentTimeIntSeeked();
    if (this.timeElapse !== timeElapse) {
      this.timeElapse = timeElapse;
    }

    this.manageDetectionState();
  }

  /**
   * Gestisce lo stato di ricerca della faccia nello stream video
   */
  manageDetectionState(): void {
    this.manageReadyToGameState();
    // se non abbiamo la faccia, mettiamo anche in pausa il video di youtube,
    // questo perchè il video parte in autoplay la prima volta
    if (!this.faceDetected || !document.hasFocus()) {
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
      // facciamo vibrare il cellulare
      window.navigator.vibrate(200);
      this.manageReadyToGameState();
      this.cdr.markForCheck();
      this.setLocalStorageDuration(this.timeElapse);
    }
  }

  restartGame(): void {
      this.endMatch = false;
      // riavviamo il video della webcam
      this.cameraDetection.playVideo();
      this.manageReadyToGameState();
      this.recordDuration = this.getLocalStorageDuration();
      this.cdr.markForCheck();
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
