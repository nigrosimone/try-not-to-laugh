import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, OnInit, computed, inject, signal, viewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { WindowService } from 'src/app/core/services/window/window.service';
import { CameraDetectionComponent, FaceExpressions } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { YoutubePlayerWrapperComponent } from 'src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.component';
import { randomItemFromArray } from 'src/app/shared/utils/common';
import { HumanizeTimePipe } from '../../../../shared/pipe/humanize-time/humanize-time.pipe';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

const VIDEOS = ['3z0U4zSsQGc', 'Zj3e1uv6zZA', 'BNiTVsAlzlc'];

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
  private readonly windowService = inject(WindowService);
  private readonly elRef = inject(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

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
  public allReady = computed(() => this.youtubeReady() && this.detectionReady());

  // partita terminata
  public endMatch = signal(false);
  // partita terminata come persa
  public loseMatch = computed(() => !this.winMatch());
  // partita terminata come vinta
  public winMatch = signal(false);

  // valore di felicità dell'espressione facciale
  public happy = signal(0);

  // true se la partita può iniziare
  public readyToGame = computed(() => !this.endMatch() && this.faceDetected());

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
    this.windowService.forEl(this.elRef).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ clientWidth, clientHeight }) => {
      // -1 altrimenti esce la scrollbar
      this.width.set(clientWidth - 1);
      this.height.set(clientHeight - 1);
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
  onYoutubeReady(): void {
    this.youtubeReady.set(true);
  }

  /**
   * Evento di caricamento completato del riconoscimento facciale
   */
  onDetectionReady(): void {
    this.detectionReady.set(true);
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

    // se il player di youtube non  è pronto non facciamo nient'altro
    if (!this.youtubeReady()) {
      return;
    }

    this.happy.set(e?.happy ?? 0)

    // se la felicità è maggiore di ... ha perso
    if (this.happy() > 0.8) {
      this.endGame(false);
      return;
    }

    // recuperiamo il tempo di esecuzione del video di youtube
    this.timeElapse.set(this.youtube().getCurrentTimeIntSeeked())

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
      this.endMatch.set(true);
      // mettiamo in pausa il video della webcam
      this.cameraDetection().pauseVideo();
      // fermiamo il video di youtube
      this.youtube().stopVideo();
      // facciamo vibrare il cellulare
      window.navigator.vibrate(200);
      this.setLocalStorageDuration(this.timeElapse());
    }
  }

  restartGame(): void {
    this.endMatch.set(false);
    // riavviamo il video della webcam
    this.cameraDetection().playVideo();
    this.recordDuration.set(this.getRecordStorageDuration());
  }

  /**
   * Setta nel localstorage l'ultima durata del video corrente
   */
  setLocalStorageDuration(value: number): void {
    if (value > this.recordDuration()) {
      localStorage.setItem(`arcade-${this.videoId()}-duration`, value.toString());
    }
  }

  /**
   * Recupera il valore record
   */
  getRecordStorageDuration(): number {
    return +(localStorage.getItem(`arcade-${this.videoId()}-duration`) || 0);
  }
}
