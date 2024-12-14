import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, inject, viewChild } from '@angular/core';
import type { FaceExpressions } from 'face-api.js';
import type { Subscription } from 'rxjs';
import { WindowService } from 'src/app/core/services/window/windos.service';
import { CameraDetectionComponent } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { beep, randomItemFromArray, safeUnsubscribe } from 'src/app/shared/utils/common';

interface Expression {
  expression: keyof Omit<FaceExpressions, 'neutral'>;
  label: string;
}

const STORAGE_DURATION_KEY = 'expression-training-duration';

const EXPRESSIONS: Array<Expression> = [
  { expression: 'happy', label: 'felice' },
  { expression: 'sad', label: 'triste' },
  { expression: 'angry', label: 'arrabbiata' },
  { expression: 'fearful', label: 'spaventata' },
  { expression: 'disgusted', label: 'disgustata' },
  { expression: 'surprised', label: 'sorpresa' }
];
@Component({
    selector: 'app-expression-training',
    templateUrl: './expression-training.component.html',
    styleUrls: ['./expression-training.component.scss'],
    imports: [CameraDetectionComponent]
})
export class ExpressionTrainingComponent implements OnInit, OnDestroy {
  private cdr = inject(ChangeDetectorRef);
  private windowService = inject(WindowService);
  private elRef = inject(ElementRef);

  readonly cameraDetection = viewChild<CameraDetectionComponent>('cameraDetection');

  // epressione da fare
  public targetExpression: Expression = randomItemFromArray<Expression>(EXPRESSIONS);
  // espressione con la quale ha perso l'utente
  public loseExpression: Expression;
  // se è richiesta l'espressione neutrale
  public neutralRequested = false;

  // true se l'espressione facciale è stata trovata nella webcam
  public faceDetected = false;
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

  // record di espressioni indovinate
  public recordDuration = 0;
  // numero di espressioni indovinate
  public matchDuration = 0;

  private subVwChanges: Subscription;

  constructor() {
    this.recordDuration = this.getLocalStorageDuration();
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
  onDetectionReady(_: boolean): void {
    this.detectionReady = true;
    this.doThirdPartyOnReady();
  }

  /**
   * Evento scatenato al primo riconoscimento facciale
   */
  onFirstDetection(e: boolean): void {
    this.firstDetectionHappen = e;
  }

  /**
   * Evento ad ogni cambiamento di stato (trovata/non trovata la faccia)
   */
  onDetectionFace(e: boolean): void {
    this.faceDetected = e;
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
  onDetectionChanges(e: FaceExpressions): void {

    // ridimensioniamo l'area di gioco
    this.doResize();

    // faccia trovata?
    if (e) {

      let foundTargetExpression = null;
      let foundNonTargetExpression = null;
      for (const ex of EXPRESSIONS) {
        const value: number = e[ex.expression] as number;
        if (ex.expression === this.targetExpression.expression) {
          if (value > 0.4) {
            foundTargetExpression = ex;
          }
        } else {
          if (value > 0.94) {
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
        if (!this.neutralRequested) {
          beep();
          this.matchDuration++;
        }
        // l'utente deve tornare con una espressione neutra
        this.neutralRequested = true;
      } else {
        // se è richiesta una espressione neutrale e l'utente la fa
        if (this.neutralRequested && e.neutral > 0.6) {
          this.targetExpression = randomItemFromArray<Expression>(EXPRESSIONS);
          this.neutralRequested = false;
        }
      }
    }

    this.manageReadyToGameState();
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
      this.cameraDetection().pauseVideo();
      // facciamo vibrare il cellulare
      window.navigator.vibrate(200);
      this.manageReadyToGameState();
      if (this.matchDuration > this.recordDuration) {
        this.setLocalStorageDuration(this.matchDuration);
      }
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

  /**
   * Recupera dal localstorage il record di espressioni indovinate
   */
  getLocalStorageDuration(): number {
    return +localStorage.getItem(STORAGE_DURATION_KEY);
  }

  /**
   * Setta nel localstorage il record di espressioni indovinate
   */
  setLocalStorageDuration(value: number): void {
    localStorage.setItem(STORAGE_DURATION_KEY, value.toString());
  }
}
