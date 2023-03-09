import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js';
import { DetectSingleFaceLandmarksTask, FaceDetection } from 'face-api.js';
import { PredictSingleAgeAndGenderTask } from 'face-api.js/build/commonjs/globalApi/PredictAgeAndGenderTask';
import { PredictSingleFaceExpressionsTask } from 'face-api.js/build/commonjs/globalApi/PredictFaceExpressionsTask';


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
  @Input() enableFaceAndGender = false;
  @Input() enableLandmarks = false;

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

  // timer
  private timer;

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

    let URI = '/assets/weights/';
    if (document.location.hostname.includes('github.io')) {
      URI = '/nigrosimone/try-not-to-laugh' + URI;
    }

    const models = [
      faceapi.nets.tinyFaceDetector.loadFromUri(URI),
      faceapi.nets.faceRecognitionNet.loadFromUri(URI),
      faceapi.nets.faceExpressionNet.loadFromUri(URI),
    ];

    if (this.enableFaceAndGender) {
      models.push(faceapi.nets.ageGenderNet.loadFromUri(URI));
    }
    if (this.enableLandmarks) {
      models.push(faceapi.nets.faceLandmark68Net.loadFromUri(URI));
    }

    await Promise.all(models);

    this.loading = false;
    this.cdr.detectChanges();
  }

  async onPlay(): Promise<void> {
    const videoEl = this.video.nativeElement;

    // controlliamo che il video sia in esecuzione e i modelli ML siano caricati e pronti
    if (videoEl.paused || videoEl.ended || !faceapi.nets.tinyFaceDetector.params || this.loading) {
      this.timer = setTimeout(() => this.onPlay(), this.detectionTimer);
      return;
    }

    // webcam e riconoscimento pronti
    if (!this.faceDetectionReady) {
      this.faceDetectionReady = true;
      this.detectionReady.emit(this.faceDetectionReady);
    }


    // cerchiamo l'espressione della faccia nel video della webcam
    let detectSingleFace: any;

    if (this.enableLandmarks) {
      detectSingleFace = faceapi.detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks();
    } else {
      detectSingleFace = faceapi.detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions())
    }

    let withFace: any;

    if (this.enableFaceAndGender) {
      withFace = detectSingleFace.withFaceExpressions().withAgeAndGender();
    } else {
      withFace = detectSingleFace.withFaceExpressions();
    }

    const result = await withFace;

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
        const rect = videoEl.getBoundingClientRect();
        const dims = faceapi.matchDimensions(canvas, rect, true);
        const resizedResult = faceapi.resizeResults(result, dims);

        faceapi.draw.drawDetections(canvas, resizedResult);
        faceapi.draw.drawFaceExpressions(canvas, resizedResult as any, 0.05);
        if (this.enableLandmarks) {
          faceapi.draw.drawFaceLandmarks(canvas, resizedResult as any);
        }
        if (this.enableFaceAndGender) {
          const { age, gender, genderProbability } = resizedResult;
          new faceapi.draw.DrawTextField(
            [
              `${Math.round(age)} years`,
              `${gender} (${Math.round(genderProbability * 100)} %)`
            ],
            result.detection.box.bottomLeft
          ).draw(canvas);
        }
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

    this.timer = setTimeout(() => this.onPlay(), this.detectionTimer);
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
