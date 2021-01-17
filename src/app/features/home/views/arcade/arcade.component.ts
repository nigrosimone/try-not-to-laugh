import { ChangeDetectorRef, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import * as faceapi from 'face-api.js';
import { CameraDetectionComponent } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { randomItemFromArray } from 'src/app/shared/utils/common';
import { loadApiScript } from 'src/app/shared/utils/youtube-api';

const VIDEOS = ['BQJsMQjrBsw', 'FFLTU9eIijw', 's5kBCni69EM'];
const MISSIMG_LIMIT = 10;
@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.scss']
})
export class ArcadeComponent implements OnInit {

  @ViewChild('cameraDetection', { static: false }) cameraDetection: CameraDetectionComponent;
  @ViewChild('youtube', { static: false }) youtube: YouTubePlayer;

  public videoId = randomItemFromArray<string>(VIDEOS);
  public faceMissingDetection = 0;
  public faceDetected = false;
  public faceHappy = false;
  public loseMatch = false;
  public winMatch = false;
  public happy = 0;
  public readyToGame = false;
  public youtubeReady = false;

  public timeElapse = 0;
  public recordDuration = 0;
  public seekTo = 0;
  public seekChecked = false;

  public width = 0;
  public height = 0;

  public playerVars: YT.PlayerVars = {
    autoplay: YT.AutoPlay.NoAutoPlay,
    controls: YT.Controls.Hide,
    showinfo: YT.ShowInfo.Hide,
    modestbranding: YT.ModestBranding.Modest,
    rel: YT.RelatedVideos.Hide
  };

  public loading = true;
  public firstDetectionHappen = false;

  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef) {
    this.recordDuration = +localStorage.getItem(`arcade-${this.videoId}-duration`);
    this.onResize();
  }

  ngOnInit(): void {
    loadApiScript();
  }

  onStateChange(e: YT.OnStateChangeEvent): void {
    if (e.data === YT.PlayerState.ENDED) {
      this.winGame();
    } else if (e.data === YT.PlayerState.PLAYING) {
      if ( !this.seekChecked && this.recordDuration > 0) {
        this.seekChecked = true;
        if (this.recordDuration < this.youtube.getDuration()) {
          this.seekTo = this.recordDuration;
          this.youtube.seekTo(this.seekTo, true);
        }
      }
    }
  }

  onReady(e: YT.PlayerEvent): void {
    this.youtubeReady = true;
  }

  onDetectionChanges(e: faceapi.FaceExpressions): void {

    this.onResize();

    if ( !this.youtubeReady ){
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
        this.loseGame();
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

    const timeElapse = Math.floor(this.youtube.getCurrentTime()) - this.seekTo;
    if (this.timeElapse !== timeElapse) {
      this.timeElapse = timeElapse;
      localStorage.setItem(`arcade-${this.videoId}-duration`, this.timeElapse.toString());
    }

    this.manageDetectionState();
  }

  /**
   * Gestisce lo stato di ricerca della faccia nello stream video
   */
  manageDetectionState(): void {
    // se siamo sotto la soglia del fallimento della ricerca della faccia, assumiamo di averla trovata
    let faceDetected = this.faceMissingDetection < MISSIMG_LIMIT;
    // se non l'abbiamo trovata almeno una volta, non l'abbiamo trovata
    if (!this.firstDetectionHappen) {
      faceDetected = false;
    }
    if (this.faceDetected !== faceDetected) {
      this.faceDetected = faceDetected;
      this.manageReadyToGameState();
      this.cdr.markForCheck();
    }
    // se non abbiamo la faccia, mettiamo anche in pausa il video di youtube
    if (!this.faceDetected) {
      this.youtube.pauseVideo();
    } else {
      this.youtube.playVideo();
    }
  }

  /**
   * Termina la partita come persa
   */
  loseGame(): void {
    // controlliamo se è stata già terminata
    if (!this.loseMatch) {
      this.winMatch = false;
      this.loseMatch = true;
      // mettiamo in pausa il video della webcam
      this.cameraDetection.pauseVideo();
      // mettiamo in pausa il video di youtube
      this.youtube.pauseVideo();
      this.manageReadyToGameState();
      this.cdr.markForCheck();
    }
  }

  /**
   * Termina la partita come vinta
   */
  winGame(): void {
    // controlliamo se è stata già terminata
    if (!this.winMatch) {
      this.winMatch = true;
      this.loseMatch = false;
      // mettiamo in pausa il video della webcam
      this.cameraDetection.pauseVideo();
      // mettiamo in pausa il video di youtube
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
    const readyToGame = !this.loseMatch && this.faceDetected;
    if (this.readyToGame !== readyToGame) {
      this.readyToGame = readyToGame;
      this.cdr.markForCheck();
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    // -1 altrimenti esce la scrollbar
    const w = this.elRef.nativeElement.clientWidth - 1;
    const h = this.elRef.nativeElement.clientHeight - 1;

    if (w !== this.width || h !== this.height) {
      this.width = w;
      this.height = h;
      this.cdr.markForCheck();
    }
  }
}
