import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import { DialogAlertService } from 'src/app/shared/components/dialog-alert/dialog-alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private routingService: RoutingService) {}

  onFaceExpressionDetectionTest(): void {
    this.routingService.homeCameraDetection();
  }

  onArcade(): void {
    this.routingService.homeArcade();
  }
}
