import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
// tslint:disable-next-line: ban-types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const gtag: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet],
})
export class AppComponent {
  router = inject(Router);

  constructor() {
    // subscribe to router events and send page views to Google Analytics
    this.router.events.pipe(takeUntilDestroyed()).subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (typeof gtag !== 'undefined') {
          gtag('config', 'G-E03CYT4PX8', { page_path: event.urlAfterRedirects });
        }
      }
    });
  }
}
