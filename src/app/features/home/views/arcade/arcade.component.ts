import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';
import * as faceapi from 'face-api.js';

let apiLoaded = false;
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
  public happy = 0;

  public playerVars: YT.PlayerVars = {
    autoplay: YT.AutoPlay.NoAutoPlay,
    controls: YT.Controls.Hide,
    showinfo: YT.ShowInfo.Hide,
    modestbranding: YT.ModestBranding.Modest,
    rel: YT.RelatedVideos.Hide
  };

  public loading = false;
  private stream: MediaStream;

  constructor(private cdr: ChangeDetectorRef) { }

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

  onStateChange(e): void {
    console.log('onStateChange', e);
  }

  onReady(e): void {
    console.log('onReady', e);
    this.run();
  }

  async run(): Promise<void> {
    // carichiamo i modelli ML
    const baseHref = (document.getElementsByTagName('base')[0] || {}).href;
    let URI = '/assets/weights/';
    if (baseHref) {
      URI = baseHref + URI.substring(1);
    }

    this.loading = true;
    this.cdr.detectChanges();

    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(URI),
      faceapi.nets.faceRecognitionNet.loadFromUri(URI),
      faceapi.nets.faceExpressionNet.loadFromUri(URI),
    ]);

    this.loading = false;
    this.cdr.detectChanges();

    // avviamo lo stream del webcam
    this.stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    this.video.nativeElement.srcObject = this.stream;
  }

  async onPlay(): Promise<number> {
    const videoEl = this.video.nativeElement;
    const canvas = this.canvas.nativeElement;

    this.manageDetectionState();

    // controlliamo che il video sia in esecuzione e i modelli ML siano caricati e pronti
    if (videoEl.paused || videoEl.ended || !faceapi.nets.tinyFaceDetector.params) {
      this.faceMissingDetection++;
      return requestAnimationFrame(() => this.onPlay());
    }

    // cerchiamo la faccia nel video
    const result = await faceapi.detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
    // console.log('detectSingleFace', result?.expressions);

    if (result) {
      // posizioniamo il canvas sul video
      canvas.style.display = 'block';
      const dims = faceapi.matchDimensions(canvas, videoEl, true);
      const resizedResult = faceapi.resizeResults(result, dims);
      const minConfidence = 0.05;
      faceapi.draw.drawDetections(canvas, resizedResult);
      faceapi.draw.drawFaceExpressions(canvas, resizedResult, minConfidence);

      this.faceMissingDetection = 0;

      this.happy = result.expressions.happy;

      if (this.happy > 0.8) {
        this.loseGame();
        return;
      }
    } else {
      canvas.style.display = 'none';
      this.faceMissingDetection++;
      this.happy = 0;
    }

    requestAnimationFrame(() => this.onPlay());
  }

  manageDetectionState(): void {
    const faceDetected = this.faceMissingDetection < 50;
    if (this.faceDetected !== faceDetected) {
      this.faceDetected = faceDetected;
      if (!this.faceDetected) {
        this.youtube.pauseVideo();
      } else {
        this.youtube.playVideo();
      }
      this.cdr.markForCheck();
    }
  }

  loseGame(): void {
    if (this.loseMatch) {
      this.loseMatch = true;
      this.video.nativeElement.pause();
      this.youtube.pauseVideo();
      this.cdr.markForCheck();
    }
  }
}
