import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js';


@Component({
  selector: 'app-camera-detection',
  templateUrl: './camera-detection.component.html',
  styleUrls: ['./camera-detection.component.scss']
})
export class CameraDetectionComponent implements AfterViewInit, OnDestroy {

  @ViewChild('video', { static: false }) video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;

  public loading = false;
  private stream: MediaStream;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnDestroy(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  ngAfterViewInit(): void {
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
      // faceapi.nets.faceLandmark68Net.loadFromUri(URI),
      faceapi.nets.faceRecognitionNet.loadFromUri(URI),
      faceapi.nets.faceExpressionNet.loadFromUri(URI),
      // faceapi.nets.ssdMobilenetv1.loadFromUri(URI)
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

    // controlliamo che il video sia in esecuzione e i modelli ML siano caricati e pronti
    if (videoEl.paused || videoEl.ended || !faceapi.nets.tinyFaceDetector.params) {
      return requestAnimationFrame(() => this.onPlay());
    }

    // cerchiamo la faccia nel video
    const result = await faceapi.detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();
    console.log('detectSingleFace', result?.expressions);
    if (result) {
      // posizioniamo il canvas sul video
      canvas.style.display = 'block';
      const dims = faceapi.matchDimensions(canvas, videoEl, true);
      const resizedResult = faceapi.resizeResults(result, dims);
      const minConfidence = 0.05;
      faceapi.draw.drawDetections(canvas, resizedResult);
      faceapi.draw.drawFaceExpressions(canvas, resizedResult, minConfidence);
    } else {
      canvas.style.display = 'none';
    }

    requestAnimationFrame(() => this.onPlay());
  }
}
