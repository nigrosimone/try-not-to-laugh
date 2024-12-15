import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  imports: [MatToolbar, MatIcon, MatIconButton],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
  private routingService = inject(RoutingService);

  onHome(): void {
    this.routingService.home();
  }

}
