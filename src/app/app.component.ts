import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthenticationService } from './core/services/auth/auth.service';
import { RoutingService } from './core/services/routing/routing.service';
import { User } from './shared/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {

  public user: User;
  private subUser: Subscription;

  constructor(private authenticationService: AuthenticationService, private cdr: ChangeDetectorRef, private routingService: RoutingService) { }

  ngOnInit(): void {
    this.subUser = this.authenticationService.currentUser.subscribe(user => {
      this.user = user;
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy(): void {
    if (this.subUser) {
      this.subUser.unsubscribe();
    }
  }

  onLogout(): void {
    this.authenticationService.logout().then(() => {
      this.routingService.home();
    });
  }
}
