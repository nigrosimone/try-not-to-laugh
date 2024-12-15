import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, input, output, signal, viewChild } from '@angular/core';
import * as faceapi from '@vladmandic/face-api';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export type FaceExpressions = faceapi.FaceExpressions;
@Component({
  selector: 'app-camera-detection',
  templateUrl: './camera-detection.component.html',
  styleUrls: ['./camera-detection.component.scss'],
  imports: [MatProgressSpinnerModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CameraDetectionComponent implements AfterViewInit, OnDestroy {

  protected readonly video = viewChild<ElementRef<HTMLVideoElement>>('video');
  protected readonly canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');

  protected readonly drawDetection = input(false);
  protected readonly width = input<number>(0);
  protected readonly height = input<number>(0);
  protected readonly missingLimit = input(10);
  protected readonly enableFaceAndGender = input(false);
  protected readonly enableLandmarks = input(false);

  protected readonly detectionReady = output<boolean>();
  protected readonly detectionChanges = output<FaceExpressions>();
  protected readonly firstDetection = output<boolean>();
  protected readonly detectionFace = output<boolean>();

  // se stiamo caricando gli assets
  protected loading = signal(false);

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
  private timer: number;

  ngOnDestroy(): void {
    cancelAnimationFrame(this.timer);
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
    }
  }

  ngAfterViewInit(): void {
    this.run();
  }

  private async run(): Promise<void> {
    this.loading.set(true);

    let URI = '/assets/weights/';
    if (document.location.hostname.includes('github.io')) {
      URI = '/try-not-to-laugh' + URI;
    }

    const models = [
      faceapi.nets.tinyFaceDetector.loadFromUri(URI),
      faceapi.nets.faceRecognitionNet.loadFromUri(URI),
      faceapi.nets.faceExpressionNet.loadFromUri(URI),
    ];

    if (this.enableFaceAndGender()) {
      models.push(faceapi.nets.ageGenderNet.loadFromUri(URI));
    }
    if (this.enableLandmarks()) {
      models.push(faceapi.nets.faceLandmark68Net.loadFromUri(URI));
    }

    // avviamo lo stream del webcam
    this.stream = await navigator.mediaDevices.getUserMedia({ video: {} });
    this.video().nativeElement.srcObject = this.stream;

    await Promise.all(models);

    this.loading.set(false);
  }

  protected async onPlay(): Promise<void> {
    const videoEl = this.video().nativeElement;

    // controlliamo che il video sia in esecuzione e i modelli ML siano caricati e pronti
    if (videoEl.paused || videoEl.ended || !faceapi.nets.tinyFaceDetector.params || this.loading()) {
      cancelAnimationFrame(this.timer)
      this.timer = requestAnimationFrame(() => this.onPlay());
      return;
    }

    // webcam e riconoscimento pronti
    if (!this.faceDetectionReady) {
      this.faceDetectionReady = true;
      this.detectionReady.emit(this.faceDetectionReady);
    }

    // cerchiamo l'espressione della faccia nel video della webcam
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let detectSingleFace: any;

    const enableLandmarks = this.enableLandmarks();
    
    detectSingleFace = faceapi.detectSingleFace(videoEl, new faceapi.TinyFaceDetectorOptions())
    if (enableLandmarks) {
      detectSingleFace = detectSingleFace.withFaceLandmarks();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let withFace: any;

    const enableFaceAndGender = this.enableFaceAndGender();
    if (enableFaceAndGender) {
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
    if (this.drawDetection()) {
      const canvas = this.canvas().nativeElement;
      if (result) {
        // visualizziamo il canvas e posizioniamolo sul video
        canvas.style.display = 'block';
        const rect = videoEl.getBoundingClientRect();
        const dims = faceapi.matchDimensions(canvas, rect, true);

        let resizedResult;
        try {
          if (dims && dims.height > 0 && dims.width > 0) {
            resizedResult = faceapi.resizeResults(result, dims);
          } else {
            return;
          }
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          return;
        }

        faceapi.draw.drawDetections(canvas, resizedResult);
        faceapi.draw.drawFaceExpressions(canvas, resizedResult, 0.05);
        if (enableLandmarks) {
          faceapi.draw.drawFaceLandmarks(canvas, resizedResult);
        }
        if (enableFaceAndGender) {
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
    let faceDetected = this.faceMissingDetection < this.missingLimit();
    // se non l'abbiamo trovata almeno una volta, non l'abbiamo trovata a prescindere dai tentativi fatti
    if (!this.firstDetectionHappen) {
      faceDetected = false;
    }
    if (this.faceDetected !== faceDetected) {
      this.faceDetected = faceDetected;
      this.detectionFace.emit(this.faceDetected);
    }

    cancelAnimationFrame(this.timer);
    this.timer = requestAnimationFrame(() => this.onPlay());
  }

  /**
   * Mette in pausa la webcam
   */
  public pauseVideo(): void {
    this.video().nativeElement.pause();
  }

  /**
   * Mette in play la webcam
   */
  public playVideo(): void {
    this.video().nativeElement.play();
  }
}
