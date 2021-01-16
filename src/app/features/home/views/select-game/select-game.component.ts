import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import { DialogAlertService } from 'src/app/shared/components/dialog-alert/dialog-alert.service';

const DIALOG_DESC_ARCADE = 'In questa DEMO ti sarà proposto un video divertente, cerca di non ridere!';
const DIALOG_DESC_FACEDETECTION = 'In questa DEMO puoi TESTARE il riconoscimento delle espressioni facciali';
@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.scss']
})
export class SelectGameComponent implements OnInit {

  constructor(
    private routingService: RoutingService,
    private dialogAlertService: DialogAlertService) { }

  ngOnInit(): void {
  }

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
}
