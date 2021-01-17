import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js';
import { Subscription } from 'rxjs';
import { WindowService } from 'src/app/core/services/window/windos.service';
import { CameraDetectionComponent } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { randomItemFromArray, safeUnsubscribe } from 'src/app/shared/utils/common';

interface Expression {
  expression: keyof Omit<faceapi.FaceExpressions, 'neutral'>;
  label: string;
}

const EXPRESSIONS: Array<Expression> = [
  { expression: 'happy', label: 'felice' },
  { expression: 'sad', label: 'triste' },
  { expression: 'angry', label: 'arrabbiata' },
  { expression: 'fearful', label: 'spaventata' },
  { expression: 'disgusted', label: 'disgustata' },
  { expression: 'surprised', label: 'sorpresa' }
];

const MISSIMG_LIMIT = 10;
@Component({
  selector: 'app-expression-training',
  templateUrl: './expression-training.component.html',
  styleUrls: ['./expression-training.component.scss']
})
export class ExpressionTrainingComponent implements OnInit, OnDestroy {

  @ViewChild('cameraDetection', { static: false }) cameraDetection: CameraDetectionComponent;

  // epressione da fare
  public targetExpression: Expression = randomItemFromArray<Expression>(EXPRESSIONS);
  // espressione con la quale ha perso l'utente
  public loseExpression: Expression;
  // se è richiesta l'espressione neutrale
  public neutralRequested = false;

  // true se l'espressione facciale è stata trovata nella webcam
  public faceDetected = false;
  // numero di volte consecutive che l'espressione non è stata trovata
  public faceMissingDetection = 0;
  // se true l'espressione facciale è stata trovata almeno una volta
  public firstDetectionHappen = false;
  // se true il riconoscimento facciale è pronto
  public detectionReady = false;

  // se true youtube e il riconoscimento facciale sono pronti
  public allReady = false;

  // partita terminata
  public endMatch = false;
  // partita terminata come persa
  public loseMatch = false;
  // partita terminata come vinta
  public winMatch = false;

  // true se la partita può iniziare
  public readyToGame = false;

  // dimensioni dell'area di gioco
  public width = 0;
  public height = 0;

  private subVwChanges: Subscription;

  constructor(
    private cdr: ChangeDetectorRef,
    private windowService: WindowService,
    private elRef: ElementRef) {
  }

  ngOnInit(): void {
    this.subVwChanges = this.windowService.viewPortChanges.subscribe(() => {
      this.doResize();
    });
  }

  ngOnDestroy(): void {
    safeUnsubscribe(this.subVwChanges);
  }

  /**
   * Evento di caricamento completato del riconoscimento facciale
   */
  onDetectionReady(e: boolean): void {
    this.detectionReady = true;
    this.doThirdPartyOnReady();
  }

  /**
   * Quando il player youtube o il riconoscimento sono ready, gestiamo le parti comuni
   */
  doThirdPartyOnReady(): void {
    this.allReady = this.detectionReady;
    this.doResize();
  }

  /**
   * Evento di cambiamento del riconoscimento facciale
   */
  onDetectionChanges(e: faceapi.FaceExpressions): void {

    // ridimensioniamo l'area di gioco
    this.doResize();

    // faccia trovata?
    if (e) {
      // almeno una volta l'abbiamo trovata...
      this.firstDetectionHappen = true;
      // resettiamo il conteggio delle volte che non l'abbiamo trovata
      this.faceMissingDetection = 0;

      let foundTargetExpression = null;
      let foundNonTargetExpression = null;
      for (const ex of EXPRESSIONS) {
        const value: number = e[ex.expression] as number;
        if (value > 0.8) {
          if (ex.expression === this.targetExpression.expression) {
            foundTargetExpression = ex;
          } else {
            foundNonTargetExpression = ex;
          }
        }
      }

      if (foundNonTargetExpression) {
        this.loseExpression = foundNonTargetExpression;
        this.endGame(false);
        return;
      }

      // se l'espressione è maggiore di ... genreriamo una nuova epressione
      if (foundTargetExpression) {
        // l'utente deve tornare con una espressione neutra
        this.neutralRequested = true;
      } else {
        // se è richiesta una espressione neutrale e l'utente la fa
        if (this.neutralRequested && e.neutral > 0.8) {
          this.targetExpression = randomItemFromArray<Expression>(EXPRESSIONS);
          this.neutralRequested = false;
        }
      }
    } else {
      // se l'abbiamo trovata almeno una volta, incrementiamo il conteggio delle volte che non l'abbiamo trovata
      if (this.firstDetectionHappen) {
        this.faceMissingDetection++;
      }
    }

    this.manageDetectionState();
  }

  /**
   * Gestisce lo stato di ricerca della faccia nello stream video
   */
  manageDetectionState(): void {
    // se siamo sotto la soglia del fallimento della ricerca della faccia, assumiamo di averla trovata
    // NB: capita che il riconoscimento fallisca su qualche fotogramma, quindi diamo una tolleranza
    // di MISSIMG_LIMIT tentativi
    let faceDetected = this.faceMissingDetection < MISSIMG_LIMIT;
    // se non l'abbiamo trovata almeno una volta, non l'abbiamo trovata a prescindere dai tentativi fatti
    if (!this.firstDetectionHappen) {
      faceDetected = false;
    }
    if (this.faceDetected !== faceDetected) {
      this.faceDetected = faceDetected;
      this.manageReadyToGameState();
      this.cdr.markForCheck();
    }
  }

  /**
   * Termina la partita
   */
  endGame(userWin: boolean): void {
    if (!this.endMatch) {
      this.winMatch = userWin;
      this.loseMatch = !this.winMatch;
      this.endMatch = true;
      // mettiamo in pausa il video della webcam
      this.cameraDetection.pauseVideo();
      // facciamo vibrare il cellulare
      window.navigator.vibrate(200);
      this.manageReadyToGameState();
      this.cdr.markForCheck();
    }
  }

  /**
   * Gestisce lo stato della partita (se è pronta per essere giocata o meno)
   */
  manageReadyToGameState(): void {
    // può essere giocata se non è terminata e se abbiamo trovato la faccia
    const readyToGame = !this.endMatch && this.faceDetected;
    if (this.readyToGame !== readyToGame) {
      this.readyToGame = readyToGame;
      this.cdr.markForCheck();
    }
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
}
