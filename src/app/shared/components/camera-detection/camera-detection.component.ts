import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js';


@Component({
  selector: 'app-camera-detection',
  templateUrl: './camera-detection.component.html',
  styleUrls: ['./camera-detection.component.scss']
})
export class CameraDetectionComponent implements AfterViewInit, OnDestroy {

  @ViewChild('video', { static: false }) video: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas: ElementRef<HTMLCanvasElement>;

  @Input() detectionTimer = 0;
  @Input() drawDetection = false;
  @Input() width: number;
  @Input() height: number;
  @Input() missingLimit = 10;

  @Output() detectionReady: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() detectionChanges: EventEmitter<faceapi.FaceExpressions> = new EventEmitter<faceapi.FaceExpressions>();
  @Output() firstDetection: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() detectionFace: EventEmitter<boolean> = new EventEmitter<boolean>();

  // se stiamo caricando gli assets
  public loading = false;

  // stream della webcam
  private stream: MediaStream;

  // true se l'espressione facciale è stata trovata nella webcam
  private faceDetected = false;
  // numero di volte consecutive che l'espressione non è stata trovata
  private faceMissingDetection = 0;
  // se true l'espressione facciale è stata trovata almeno una volta
  private firstDetectionHappen = false;
  // se true il riconoscimento facciale è pronto
  private faceDetectionReady = false;

  constructor(private cdr: ChangeDetectorRef) { }

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

    // controlliamo che il video sia in esecuzione e i modelli ML siano caricati e pronti
    if (videoEl.paused || videoEl.ended || !faceapi.nets.tinyFaceDetector.params || this.loading) {
      setTimeout(() => this.onPlay(), this.detectionTimer);
      return;
    }

    // webcam e riconoscimento pronti
    if (!this.faceDetectionReady) {
      this.faceDetectionReady = true;
      this.detectionReady.emit(this.faceDetectionReady);
    }


    // cerchiamo l'espressione della faccia nel video della webcam
    const result = await faceapi.detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions()).withFaceExpressions();

    if (result) {
      if (!this.firstDetectionHappen) {
        // almeno una volta l'abbiamo trovata...
        this.firstDetectionHappen = true;
        this.firstDetection.emit(true);
      }

      // resettiamo il conteggio delle volte che non l'abbiamo trovata
      this.faceMissingDetection = 0;
    } else {
      // se l'abbiamo trovata almeno una volta, incrementiamo il conteggio delle volte che non l'abbiamo trovata
      if (this.firstDetectionHappen) {
        this.faceMissingDetection++;
      }
    }

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

    // se siamo sotto la soglia del fallimento della ricerca della faccia, assumiamo di averla trovata
    // NB: capita che il riconoscimento fallisca su qualche fotogramma, quindi diamo una tolleranza
    // di MISSIMG_LIMIT tentativi
    let faceDetected = this.faceMissingDetection < this.missingLimit;
    // se non l'abbiamo trovata almeno una volta, non l'abbiamo trovata a prescindere dai tentativi fatti
    if (!this.firstDetectionHappen) {
      faceDetected = false;
    }
    if (this.faceDetected !== faceDetected) {
      this.faceDetected = faceDetected;
      this.detectionFace.emit(this.faceDetected);
    }

    setTimeout(() => this.onPlay(), this.detectionTimer);
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
    this.video.nativeElement.play();
  }
}
