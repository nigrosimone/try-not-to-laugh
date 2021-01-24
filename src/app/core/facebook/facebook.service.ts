import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class FacebookService {
  private fb;
  constructor(public authService: AuthenticationService) {
    this.fb = (window as any).FB;
  }

  inviteAFriend(): void {
    this.fb.ui({
      method: 'send',
      link: 'https://try-not-to-laugh.herokuapp.com/',
    });
  }

  loadFriendList(): void {
    this.fb.api(
      `/${this.authService.currentUserValue.id}/friends`,
      'GET',
      {access_token: this.authService.currentUserValue.accessToken},
      (response) => {
        if (response && !response.error) {
          console.log(response);
        }
      }
    );
  }

}
