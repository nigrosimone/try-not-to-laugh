import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    ToolbarComponent, 
    RouterOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {

}
