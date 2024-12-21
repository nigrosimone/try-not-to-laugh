import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, OnInit, computed, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { WindowService } from 'src/app/core/services/window/window.service';
import { CameraDetectionComponent, FaceExpressions } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { beep, randomItemFromArray } from 'src/app/shared/utils/common';

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
  imports: [CameraDetectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpressionTrainingComponent implements OnInit {
  private windowService = inject(WindowService);
  private elRef = inject(ElementRef);
  private destroyRef = inject(DestroyRef);

  readonly cameraDetection = viewChild<CameraDetectionComponent>('cameraDetection');

  // se è richiesta l'espressione neutrale
  public neutralRequested = signal(false);

  // true se l'espressione facciale è stata trovata nella webcam
  public faceDetected = signal(false);

  // se true il riconoscimento facciale è pronto
  public detectionReady = signal(false);

  // partita terminata
  public endMatch = signal(false);
  // partita terminata come persa
  public loseMatch = computed(() => !this.winMatch());
  // partita terminata come vinta
  public winMatch = signal(false);

  // dimensioni dell'area di gioco
  public width = signal(0);
  public height = signal(0);

  // numero di espressioni indovinate
  public matchDuration = signal(0);

  // record di espressioni indovinate
  public recordDuration = signal(0);

  // epressione da fare
  public targetExpression = signal(randomItemFromArray<Expression>(EXPRESSIONS));

  public loseExpression = signal<Expression>(null);

  constructor() {
    this.recordDuration.set(this.getLocalStorageDuration());
  }

  ngOnInit(): void {
    this.windowService.forEl(this.elRef).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(({ clientWidth, clientHeight }) => {
      // -1 altrimenti esce la scrollbar
      this.width.set(clientWidth - 1);
      this.height.set(clientHeight - 1);
    });
  }

  /**
   * Evento di caricamento completato del riconoscimento facciale
   */
  onDetectionReady(): void {
    this.detectionReady.set(true);
  }

  /**
   * Evento ad ogni cambiamento di stato (trovata/non trovata la faccia)
   */
  onDetectionFace(e: boolean): void {
    this.faceDetected.set(e);
  }

  /**
   * Evento di cambiamento del riconoscimento facciale
   */
  onDetectionChanges(e: FaceExpressions): void {

    // faccia non trovata
    if (!e) {
      return;
    }

    let foundTargetExpression = null;
    let foundNonTargetExpression = null;
    const target = this.targetExpression().expression;
    for (const ex of EXPRESSIONS) {
      const value: number = e[ex.expression] as number;
      if (ex.expression === target) {
        if (value > 0.4) {
          foundTargetExpression = ex;
          break;
        }
      } else {
        if (value > 0.94) {
          foundNonTargetExpression = ex;
          break;
        }
      }
    }

    if (foundNonTargetExpression) {
      this.loseExpression.set(foundNonTargetExpression);
      this.endGame(false);
      return;
    }

    // se l'espressione è maggiore di ... genreriamo una nuova epressione
    if (foundTargetExpression) {
      if (!this.neutralRequested()) {
        beep();
        this.matchDuration.update(value => value + 1);
      }
      // l'utente deve tornare con una espressione neutra
      this.neutralRequested.set(true);
    } else {
      // se è richiesta una espressione neutrale e l'utente la fa
      if (this.neutralRequested() && e.neutral > 0.6) {
        this.targetExpression.set(randomItemFromArray<Expression>(EXPRESSIONS));
        this.neutralRequested.set(false);
      }
    }
  }

  /**
   * Termina la partita
   */
  endGame(userWin: boolean): void {
    if (!this.endMatch()) {
      this.winMatch.set(userWin);
      this.endMatch.set(true);
      // mettiamo in pausa il video della webcam
      this.cameraDetection().pauseVideo();
      // facciamo vibrare il cellulare
      window.navigator.vibrate(200);
      if (this.matchDuration() > this.recordDuration()) {
        this.setLocalStorageDuration(this.matchDuration());
      }
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
