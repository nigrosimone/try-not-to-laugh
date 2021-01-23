import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as faceapi from 'face-api.js';
import { Subscription } from 'rxjs';
import { WindowService } from 'src/app/core/services/window/windos.service';
import { CameraDetectionComponent } from 'src/app/shared/components/camera-detection/camera-detection.component';
import { Emoji } from 'src/app/shared/components/emoji/emoji.component';
import { safeUnsubscribe } from 'src/app/shared/utils/common';

interface Expression {
  expression: keyof faceapi.FaceExpressions;
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
  styleUrls: ['./emoji-detection.component.scss']
})
export class EmojiDetectionComponent implements OnInit, OnDestroy {

  @ViewChild('cameraDetection', { static: false }) cameraDetection: CameraDetectionComponent;

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
  public faceDetected = false;
  // se true l'espressione facciale è stata trovata almeno una volta
  public firstDetectionHappen = false;
  // se true il riconoscimento facciale è pronto
  public detectionReady = false;

  // se true youtube e il riconoscimento facciale sono pronti
  public allReady = false;

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
  onDetectionChanges(e: faceapi.FaceExpressions): void {

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
            foundExpression = {expression: ex.expression, value};
          }
        } else {
          if (value > 0) {
            foundExpression = {expression: ex.expression, value};
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
    const readyToGame = this.faceDetected;
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
