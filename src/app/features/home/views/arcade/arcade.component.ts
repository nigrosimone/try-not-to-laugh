import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, OnInit, inject, signal, viewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import type { FaceExpressions } from '@vladmandic/face-api';
import { WindowService } from 'src/app/core/services/window/windos.service';
import { CameraDetectionComponent } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { YoutubePlayerWrapperComponent } from 'src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.component';
import { randomItemFromArray } from 'src/app/shared/utils/common';
import { HumanizeTimePipe } from '../../../../shared/pipe/humanize-time/humanize-time.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const VIDEOS = ['3z0U4zSsQGc', 'Zj3e1uv6zZA', 'BNiTVsAlzlc'];
const LOCAL_STORAGE_KEY_RECORD = `arcade-record-duration`;

@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.scss'],
  imports: [
    YoutubePlayerWrapperComponent,
    CameraDetectionComponent,
    DecimalPipe,
    HumanizeTimePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArcadeComponent implements OnInit {
  private windowService = inject(WindowService);
  private elRef = inject(ElementRef);
  private destroyRef = inject(DestroyRef);

  readonly cameraDetection = viewChild<CameraDetectionComponent>('cameraDetection');
  readonly youtube = viewChild<YoutubePlayerWrapperComponent>('youtube');

  // id del video di youtube
  public videoId = signal(randomItemFromArray<string>(VIDEOS));

  // true se l'espressione facciale è stata trovata nella webcam
  public faceDetected = signal(false);
  // se true l'espressione facciale è stata trovata almeno una volta
  public firstDetectionHappen = signal(false);
  // se true il riconoscimento facciale è pronto
  public detectionReady = signal(false);

  // se true youtube e il riconoscimento facciale sono pronti
  public allReady = signal(false);

  // partita terminata
  public endMatch = signal(false);
  // partita terminata come persa
  public loseMatch = signal(false);
  // partita terminata come vinta
  public winMatch = signal(false);

  // valore di felicità dell'espressione facciale
  public happy = signal(0);

  // true se la partita può iniziare
  public readyToGame = signal(false);

  // true se il player video di youtube è stato caricato
  public youtubeReady = signal(false);

  // secondi visti del video di youtube
  public timeElapse = signal(0);

  // massimo di secondi visti del video di youtube
  public recordDuration = signal(0);

  // dimensioni dell'area di gioco
  public width = signal(0);
  public height = signal(0);

  constructor() {
    this.recordDuration.set(this.getRecordStorageDuration());
  }

  ngOnInit(): void {
    this.windowService.viewPortChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.doResize();
    });
  }

  /**
   * Evento di cambiamento di stato del player di YouTube
   */
  onStateChange(e: YT.OnStateChangeEvent): void {
    if (e.data === 0) {
      this.endGame(true);
    }
  }

  /**
   * Evento di caricamento completato del player di YouTube
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onYoutubeReady(e: YT.PlayerEvent): void {
    this.youtubeReady.set(true);
    this.doThirdPartyOnReady();
  }

  /**
   * Evento di caricamento completato del riconoscimento facciale
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onDetectionReady(e: boolean): void {
    this.detectionReady.set(true);
    this.doThirdPartyOnReady();
  }

  /**
   * Quando il player youtube o il riconoscimento sono ready, gestiamo le parti comuni
   */
  doThirdPartyOnReady(): void {
    this.allReady.set(this.youtubeReady() && this.detectionReady());
    this.doResize();
  }

  /**
   * Evento scatenato al primo riconoscimento facciale
   */
  onFirstDetection(e: boolean): void {
    this.firstDetectionHappen.set(e);
  }

  /**
   * Evento ad ogni cambiamento di stato (trovata/non trovata la faccia)
   */
  onDetectionFace(e: boolean): void {
    this.faceDetected.set(e);
  }

  /**
   * Evento di cambiamento del riconoscimento facciale
   */
  onDetectionChanges(e: FaceExpressions): void {

    // ridimensioniamo l'area di gioco
    this.doResize();

    // se il player di youtube non  è pronto non facciamo nient'altro
    if (!this.youtubeReady()) {
      return;
    }

    // faccia trovata?
    if (e) {
      this.happy.set(e.happy)

      // se la felicità è maggiore di ... ha perso
      if (this.happy() > 0.8) {
        this.endGame(false);
        return;
      }
    } else {
      // faccia non trovata...
      this.happy.set(0);
    }

    // recuperiamo il tempo di esecuzione del video di youtube
    const timeElapse = this.youtube().getCurrentTimeIntSeeked();
    this.timeElapse.set(timeElapse)

    this.manageDetectionState();
  }

  /**
   * Gestisce lo stato di ricerca della faccia nello stream video
   */
  manageDetectionState(): void {
    this.manageReadyToGameState();
    // se non abbiamo la faccia, mettiamo anche in pausa il video di youtube,
    // questo perchè il video parte in autoplay la prima volta
    if (!this.faceDetected() || !document.hasFocus()) {
      this.youtube().pauseVideo();
    } else {
      this.youtube().playVideo();
    }
  }

  /**
   * Termina la partita
   */
  endGame(userWin: boolean): void {
    if (!this.endMatch()) {
      this.winMatch.set(userWin);
      this.loseMatch.set(!this.winMatch());
      this.endMatch.set(true);
      // mettiamo in pausa il video della webcam
      this.cameraDetection().pauseVideo();
      // fermiamo il video di youtube
      this.youtube().stopVideo();
      // facciamo vibrare il cellulare
      window.navigator.vibrate(200);
      this.manageReadyToGameState();
      this.setLocalStorageDuration(this.timeElapse());
    }
  }

  restartGame(): void {
    this.endMatch.set(false);
    // riavviamo il video della webcam
    this.cameraDetection().playVideo();
    this.manageReadyToGameState();
    this.recordDuration.set(this.getRecordStorageDuration());
  }

  /**
   * Gestisce lo stato della partita (se è pronta per essere giocata o meno)
   */
  manageReadyToGameState(): void {
    // può essere giocata se non è terminata e se abbiamo trovato la faccia
    const readyToGame = !this.endMatch() && this.faceDetected();
    this.readyToGame.set(readyToGame)
  }

  doResize(): void {
    // -1 altrimenti esce la scrollbar
    this.width.set(this.elRef.nativeElement.clientWidth - 1);
    this.height.set(this.elRef.nativeElement.clientHeight - 1);
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
    this.setRecordStorageDuration(value);
  }

  /**
   * Recupera il valore record
   */
  getRecordStorageDuration(): number {
    return +localStorage.getItem(LOCAL_STORAGE_KEY_RECORD);
  }

  /**
   * Setta il valore del record
   */
  setRecordStorageDuration(value: number): void {
    const record: number = +localStorage.getItem(LOCAL_STORAGE_KEY_RECORD);
    if (value > record) {
      localStorage.setItem(LOCAL_STORAGE_KEY_RECORD, value.toString());
    }
  }
}
