import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js';


@Component({
  selector: 'app-camera-detection',
  templateUrl: './camera-detection.component.html',
  styleUrls: ['./camera-detection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CameraDetectionComponent implements AfterViewInit, OnDestroy {

  @ViewChild('video', { static: false }) video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;

  @Input() detectionTimer = 0;
  @Input() drawDetection = false;

  @Output() detectionReady: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() detectionChanges: EventEmitter<faceapi.FaceExpressions> = new EventEmitter<faceapi.FaceExpressions>();

  public loading = false;
  public width = 0;
  public height = 0;

  private stream: MediaStream;

  constructor(
    private cdr: ChangeDetectorRef,
    private elRef: ElementRef) {
    this.onResize();
  }

  ngOnDestroy(): void {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  ngAfterViewInit(): void {
    this.run();
  }

  private async run(): Promise<void> {
    this.loading = true;
    this.cdr.detectChanges();

    // avviamo lo stream del webcam
    this.stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    this.video.nativeElement.srcObject = this.stream;

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

    this.onResize();

    // controlliamo che il video sia in esecuzione e i modelli ML siano caricati e pronti
    if (videoEl.paused || videoEl.ended || !faceapi.nets.tinyFaceDetector.params || this.loading) {
      setTimeout(() => this.onPlay(), this.detectionTimer);
      return;
    }

    // webcam e riconoscimento pronti
    this.detectionReady.emit(true);

    // cerchiamo l'espressione della faccia nel video della webcam
    const result = await faceapi.detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();

    // se vogliamo disegnare sul canvas il feedback del riconoscimento
    if (this.drawDetection) {
      const canvas = this.canvas.nativeElement;
      if (result) {
        // visualizziamo il canvas e posizioniamolo sul video
        canvas.style.display = 'block';
        const dims = faceapi.matchDimensions(canvas, videoEl, true);
        const resizedResult = faceapi.resizeResults(result, dims);
        const minConfidence = 0.05;
        faceapi.draw.drawDetections(canvas, resizedResult);
        faceapi.draw.drawFaceExpressions(canvas, resizedResult, minConfidence);
      } else {
        // nascondiamo il canvas
        canvas.style.display = 'none';
      }
    }

    // diamo in output i dati sul riconoscimento
    this.detectionChanges.emit(result?.expressions);

    setTimeout(() => this.onPlay(), this.detectionTimer);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.doResize();
  }

  @HostListener('window:orientationchange')
  onOrientationChange() {
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
   * Mette in pausa la webcam
   */
  pauseVideo(): void {
    this.video.nativeElement.pause();
  }

  /**
   * Mette in play la webcam
   */
  playVideo(): void {
    this.video.nativeElement.pause();
  }
}
