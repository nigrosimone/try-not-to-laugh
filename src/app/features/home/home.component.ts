import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    ToolbarComponent, 
    RouterOutlet, 
    MatButtonModule,
    MatTooltipModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private routingService = inject(RoutingService);

  onFaceExpressionDetectionTest(): void {
    this.routingService.homeCameraDetection();
  }

  onArcade(): void {
    this.routingService.homeArcade();
  }
}
