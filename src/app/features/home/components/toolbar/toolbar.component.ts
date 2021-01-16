import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/auth/auth.service';
import { RoutingService } from 'src/app/core/services/routing/routing.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
  public user: User;
  private subUser: Subscription;
  constructor( private authenticationService: AuthenticationService,
               private cdr: ChangeDetectorRef,
               private routingService: RoutingService) { }

  ngOnInit(): void {
    this.subUser = this.authenticationService.currentUser.subscribe(user => {
      this.user = user;
      this.cdr.markForCheck();
    });
  }

  onLogout(): void {
    this.authenticationService.logout().then(() => {
      this.routingService.root();
    });
  }

  ngOnDestroy(): void {
    if (this.subUser) {
      this.subUser.unsubscribe();
    }
  }

}
