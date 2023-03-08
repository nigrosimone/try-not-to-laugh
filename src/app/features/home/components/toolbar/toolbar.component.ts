import { Component } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing/routing.service';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private routingService: RoutingService) { }

  onHome(): void {
    this.routingService.home();
  }

}
