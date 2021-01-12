import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';
import { RoutingService } from 'src/app/core/services/routing/routing.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loading = false;
  private subUser: Subscription;

  constructor(private authenticationService: AuthenticationService, private cdr: ChangeDetectorRef, private routingService: RoutingService) {}

  ngOnInit(): void {
    this.subUser = this.authenticationService.currentUser.subscribe(user => {
      this.routingService.home();
    });
    this.loading = true;
    this.cdr.detectChanges();
    this.authenticationService.load().then(() => {
      this.loading = false;
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    if (this.subUser) {
      this.subUser.unsubscribe();
    }
  }

  onLogin(): void {
    this.authenticationService.login();
  }
}
