import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-select-game',
  templateUrl: './select-game.component.html',
  styleUrls: ['./select-game.component.scss']
})
export class SelectGameComponent implements OnInit, OnDestroy {

  public user: User;
  private subUser: Subscription;

  constructor(
    private routingService: RoutingService,
    private authenticationService: AuthenticationService,
    private cdr: ChangeDetectorRef) { }

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
      this.routingService.root();
    });
  }

  onFaceExpressionDetectionTest(): void {
    this.routingService.homeCameraDetection();
  }

  onArcade(): void {
    this.routingService.homeArcade();
  }
}
