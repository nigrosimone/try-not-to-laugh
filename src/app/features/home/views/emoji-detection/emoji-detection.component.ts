import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import type { FaceExpressions } from 'face-api.js';
import { WindowService } from 'src/app/core/services/window/windos.service';
import { CameraDetectionComponent } from 'src/app/shared/components/camera-detection/camera-detection.component';
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
  private destroyRef = inject(DestroyRef);
  private windowService = inject(WindowService);
  private elRef = inject(ElementRef);

  readonly cameraDetection = viewChild<CameraDetectionComponent>('cameraDetection');

  // emoji abilitate
  public emojiEnabled: Emoji = {
    like: false,
    love: false,
    haha: true,
    yay: false,
    wow: true,
    sad: true,
    angry: true
  };
  // emoji predominante
  public emojiHighlight: keyof Emoji;

  // true se l'espressione facciale è stata trovata nella webcam
  public faceDetected = signal(false);
  // se true l'espressione facciale è stata trovata almeno una volta
  public firstDetectionHappen = false;
  // se true il riconoscimento facciale è pronto
  public detectionReady = signal(false);

  // se true youtube e il riconoscimento facciale sono pronti
  public allReady = signal(false);

  // true se la partita può iniziare
  public readyToGame = signal(false);

  // dimensioni dell'area di gioco
  public width = signal(0);
  public height = signal(0);

  ngAfterViewInit(): void {
    this.windowService.viewPortChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.doResize();
    });
  }

  /**
   * Evento di caricamento completato del riconoscimento facciale
   */
  onDetectionReady(_: boolean): void {
    this.detectionReady.set(true);
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
    this.faceDetected.set(e);
  }

  /**
   * Quando il player youtube o il riconoscimento sono ready, gestiamo le parti comuni
   */
  doThirdPartyOnReady(): void {
    this.allReady.set(this.detectionReady());
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
      // recuperiamo l'espressione prefominante
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
      }

      if (foundExpression) {
        switch (foundExpression.expression) {
          case 'angry':
            this.emojiHighlight = 'angry';
            break;
          case 'happy':
            this.emojiHighlight = 'haha';
            break;
          case 'sad':
            this.emojiHighlight = 'sad';
            break;
          case 'surprised':
            this.emojiHighlight = 'wow';
            break;
          default:
            this.emojiHighlight = null;
            break;
        }
      }

      this.manageReadyToGameState();
    }
  }

  /**
   * Gestisce lo stato della partita (se è pronta per essere giocata o meno)
   */
  manageReadyToGameState(): void {
    // può essere giocata se non è terminata e se abbiamo trovato la faccia
    this.readyToGame.set(this.faceDetected())
  }

  doResize(): void {
    // -1 altrimenti esce la scrollbar
    this.width.set(this.elRef.nativeElement.clientWidth - 1);
    this.height.set(this.elRef.nativeElement.clientHeight - 1);
  }
}
