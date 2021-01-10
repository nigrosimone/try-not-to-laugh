import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/shared/models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loading = false;
  private subUser: Subscription;

  constructor(private authenticationService: AuthenticationService, private cdr: ChangeDetectorRef, private route: Router) {}

  ngOnInit(): void {
    this.subUser = this.authenticationService.currentUser.subscribe(user => {
      this.route.navigateByUrl('demo/camera-detection');
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
