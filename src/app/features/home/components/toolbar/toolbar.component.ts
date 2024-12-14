import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [MatToolbarModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  private routingService = inject(RoutingService);

  onHome(): void {
    this.routingService.home();
  }

}
