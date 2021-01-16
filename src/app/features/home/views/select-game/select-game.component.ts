import { Component, OnDestroy, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing/routing.service';

@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.scss']
})
export class SelectGameComponent implements OnInit {

  constructor(
    private routingService: RoutingService) { }

  ngOnInit(): void {
  }

  onFaceExpressionDetectionTest(): void {
    this.routingService.homeCameraDetection();
  }

  onArcade(): void {
    this.routingService.homeArcade();
  }
}
