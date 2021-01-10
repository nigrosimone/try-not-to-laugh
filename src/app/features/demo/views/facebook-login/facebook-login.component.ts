import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss']
})
export class FacebookLoginComponent implements OnInit {

  public userData = null;
  public error = null;

  constructor(private httpClient: HttpClient){}

  ngOnInit(): void {
    this.httpClient.get(environment.api + 'auth/facebook/profile', {withCredentials: true}).subscribe(
      data => this.userData = data
    );
  }

  onLogout(): void {
    this.httpClient.get(environment.api + 'auth/logout', {withCredentials: true}).subscribe(
      data => this.userData = data,
      error => this.error = error
    );
  }

  onLogin(): void {
    window.location.href = environment.api + 'auth/facebook';
  }

}
