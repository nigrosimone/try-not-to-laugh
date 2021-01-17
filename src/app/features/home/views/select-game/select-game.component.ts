import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import { DialogAlertService } from 'src/app/shared/components/dialog-alert/dialog-alert.service';

const DIALOG_DESC_ARCADE = 'In questa DEMO vedrai un video divertente, cerca di non ridere!';
const DIALOG_DESC_FACEDETECTION = 'In questa DEMO puoi TESTARE il riconoscimento delle espressioni facciali';
const DIALOG_DESC_EXPRESSIONTRAINING = 'In questa DEMO ti sarà chiesto di fare espressioni di un certo tipo in modo random, non sbagliare!';
@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.scss']
})
export class SelectGameComponent {

  constructor(
    private routingService: RoutingService,
    private dialogAlertService: DialogAlertService) { }

  onFaceExpressionDetectionTest(): void {
    this.dialogAlertService.openDialog({ title: 'Info', content: DIALOG_DESC_FACEDETECTION }).afterClosed().subscribe(result => {
      if (result) {
        this.routingService.homeCameraDetection();
      }
    });
  }

  onArcade(): void {
    this.dialogAlertService.openDialog({ title: 'Info', content: DIALOG_DESC_ARCADE }).afterClosed().subscribe(result => {
      if (result) {
        this.routingService.homeArcade();
      }
    });
  }

  onExpressionTraining(): void {
    this.dialogAlertService.openDialog({ title: 'Info', content: DIALOG_DESC_EXPRESSIONTRAINING }).afterClosed().subscribe(result => {
      if (result) {
        this.routingService.homeExpressionTraining();
      }
    });
  }
}
