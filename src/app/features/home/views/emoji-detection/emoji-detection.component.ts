import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { WindowService } from 'src/app/core/services/window/window.service';
import { CameraDetectionComponent, FaceExpressions } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { Emoji } from 'src/app/shared/components/emoji/emoji.component';
import { EmojiComponent } from '../../../../shared/components/emoji/emoji.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface Expression {
  expression: keyof FaceExpressions;
  value: number;
}

const EXPRESSIONS: Array<Expression> = [
  { expression: 'neutral', value: 0 },
  { expression: 'happy', value: 0 },
  { expression: 'sad', value: 0 },
  { expression: 'angry', value: 0 },
  { expression: 'fearful', value: 0 },
  { expression: 'disgusted', value: 0 },
  { expression: 'surprised', value: 0 }
];
@Component({
  selector: 'app-emoji-detection',
  templateUrl: './emoji-detection.component.html',
  styleUrls: ['./emoji-detection.component.scss'],
  imports: [CameraDetectionComponent, EmojiComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmojiDetectionComponent implements AfterViewInit {
  private readonly destroyRef = inject(DestroyRef);
  private readonly windowService = inject(WindowService);
  private readonly elRef = inject(ElementRef);

  readonly cameraDetection = viewChild<CameraDetectionComponent>('cameraDetection');

  // emoji abilitate
  public emojiEnabled = signal({
    like: false,
    love: false,
    haha: true,
    yay: false,
    wow: true,
    sad: true,
    angry: true
  });
  // emoji predominante
  public emojiHighlight = signal<keyof Emoji>(null);
  // true se l'espressione facciale è stata trovata nella webcam
  public faceDetected = signal(false);
  // se true l'espressione facciale è stata trovata almeno una volta
  public firstDetectionHappen = false;
  // se true il riconoscimento facciale è pronto
  public detectionReady = signal(false);
  // dimensioni dell'area di gioco
  public width = signal(0);
  public height = signal(0);

  ngAfterViewInit(): void {
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
   * Evento scatenato al primo riconoscimento facciale
   */
  onFirstDetection(e: boolean): void {
    this.firstDetectionHappen = e;
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

    // recuperiamo l'espressione predominante
    let foundExpression: Expression = null;
    for (const ex of EXPRESSIONS) {
      const value: number = e[ex.expression] as number;
      if (foundExpression) {
        if (value > foundExpression.value) {
          foundExpression = { expression: ex.expression, value };
        }
      } else {
        if (value > 0) {
          foundExpression = { expression: ex.expression, value };
        }
      }
      if (value >= 0.99) {
        break;
      }
    }

    if (foundExpression) {
      switch (foundExpression.expression) {
        case 'angry':
          this.emojiHighlight.set('angry');
          break;
        case 'happy':
          this.emojiHighlight.set('haha');
          break;
        case 'sad':
          this.emojiHighlight.set('sad');
          break;
        case 'surprised':
          this.emojiHighlight.set('wow');
          break;
        default:
          this.emojiHighlight.set(null);
          break;
      }
    }
  }
}
