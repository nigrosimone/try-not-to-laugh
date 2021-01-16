import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import * as faceapi from 'face-api.js';

let apiLoaded = false;
const MISSIMG_LIMIT = 10;
@Component({
  selector: 'app-arcade',
  templateUrl: './arcade.component.html',
  styleUrls: ['./arcade.component.scss']
})
export class ArcadeComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('video', { static: false }) video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;
  @ViewChild('youtube', { static: false }) youtube: YouTubePlayer;

  public faceMissingDetection = 0;
  public faceDetected = false;
  public faceHappy = false;
  public loseMatch = false;
  public winMatch = false;
  public happy = 0;
  public readyToGame = false;

  public width = window.innerWidth;
  public height =  window.innerHeight;

  public playerVars: YT.PlayerVars = {
    autoplay: YT.AutoPlay.NoAutoPlay,
    controls: YT.Controls.Hide,
    showinfo: YT.ShowInfo.Hide,
    modestbranding: YT.ModestBranding.Modest,
    rel: YT.RelatedVideos.Hide
  };

  public loading = true;
  public firstDetectionHappen = false;
  private stream: MediaStream;
  private timeout;

  constructor(private cdr: ChangeDetectorRef) {
    const toolbar = document.getElementById('tnl-toolbar');
    this.height =  window.innerHeight - toolbar.clientHeight;
   }

  ngOnInit(): void {
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
  }

  ngOnDestroy(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  ngAfterViewInit(): void {
    // this.run();
  }

  onStateChange(e: YT.OnStateChangeEvent): void {
    if (e.data === YT.PlayerState.ENDED) {
      this.winGame();
    }
  }

  onReady(e: YT.PlayerEvent): void {
    this.run();
  }

  async run(): Promise<void> {
    this.loading = true;
    this.cdr.detectChanges();

    // avviamo lo stream della webcam
    this.stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    this.video.nativeElement.srcObject = this.stream;

    // carichiamo i modelli ML
    const URI = '/assets/weights/';
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(URI),
      faceapi.nets.faceRecognitionNet.loadFromUri(URI),
      faceapi.nets.faceExpressionNet.loadFromUri(URI),
    ]);


    this.loading = false;
    this.cdr.detectChanges();
  }

  async onPlay(): Promise<void> {
    const videoEl = this.video.nativeElement;
    const timeout = 100;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.onResize();

    this.manageDetectionState();

    // controlliamo che il video sia in esecuzione, non sia finito e i modelli ML siano caricati
    if (videoEl.paused || videoEl.ended || !faceapi.nets.tinyFaceDetector.params || !apiLoaded) {
      this.faceMissingDetection = MISSIMG_LIMIT;
      this.timeout = setTimeout(() => this.onPlay(), timeout);
      return;
    }

    // cerchiamo la faccia nel video
    const result = await faceapi.detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();

    // faccia trovata?
    if (result) {
      // almeno una volta l'abbiamo trovata...
      this.firstDetectionHappen = true;
      // resettiamo il conteggio delle volte che non l'abbiamo trovata
      this.faceMissingDetection = 0;

      const happy = result.expressions.happy;
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

    this.timeout = setTimeout(() => this.onPlay(), timeout);
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
      // se non abbiamo la faccia, mettiamo anche in pausa il video di youtube
      if (!this.faceDetected) {
        this.youtube.pauseVideo();
      } else {
        this.youtube.playVideo();
      }
      this.manageReadyToGameState();
      this.cdr.markForCheck();
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
      this.video.nativeElement.pause();
      // mettiamo in pausa il video di youtube
      this.youtube.pauseVideo();
      this.manageReadyToGameState();
      clearTimeout(this.timeout);
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
      this.video.nativeElement.pause();
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
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (w !== this.width || h !== this.height) {
      this.width = w;
      this.height = h;
      this.cdr.markForCheck();
    }
  }
}
