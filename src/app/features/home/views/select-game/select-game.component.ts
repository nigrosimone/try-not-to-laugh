import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { take } from 'rxjs';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import { DialogAlertService } from 'src/app/shared/components/dialog-alert/dialog-alert.service';
import { createParticle } from 'src/app/shared/utils/common';

const DIALOG_DESC_ARCADE = 'In questa DEMO vedrai un video divertente, cerca di non ridere!';
const DIALOG_DESC_FACEDETECTION = 'In questa DEMO puoi TESTARE il riconoscimento delle espressioni facciali';
const DIALOG_DESC_EXPRESSIONTRAINING = 'In questa DEMO ti sarà chiesto di fare espressioni di un certo tipo in modo random, non sbagliare!';
const DIALOG_DESC_EMOJIDETECTION = 'In questa demo la tua espressione viene utilizzata per selezionare una emoji pertinente';

@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.scss'],
  imports: [MatListOption, MatIcon, MatSelectionList],
  providers: [DialogAlertService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectGameComponent {
  private routingService = inject(RoutingService);
  private dialogAlertService = inject(DialogAlertService);

  onFaceExpressionDetectionTest(e: MouseEvent): void {
    this.open(e, DIALOG_DESC_FACEDETECTION, 'homeCameraDetection')
  }

  onArcade(e: MouseEvent): void {
    this.open(e, DIALOG_DESC_ARCADE, 'homeArcade')
  }

  onExpressionTraining(e: MouseEvent): void {
    this.open(e, DIALOG_DESC_EXPRESSIONTRAINING, 'homeExpressionTraining')
  }

  onEmojiDetection(e: MouseEvent): void {
    this.open(e, DIALOG_DESC_EMOJIDETECTION, 'homeEmojiDetection')
  }

  private open(e: MouseEvent, message: string, method: keyof RoutingService): void {
    createParticle(e.x, e.y);
    this.dialogAlertService.openDialog({ title: 'Info', content: message }).afterClosed().pipe(take(1)).subscribe(result => {
      if (result) {
        this.routingService[method]();
      }
    });
  }
}
