import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facebook-login',
  templateUrl: './facebook-login.component.html',
  styleUrls: ['./facebook-login.component.scss']
})
export class FacebookLoginComponent implements OnInit {

  public userData = null;

  constructor(private httpClient: HttpClient,  private router: Router){}

  ngOnInit(): void {
    this.httpClient.get(environment.api + 'auth/facebook/profile', {withCredentials: true}).subscribe(data => {
      this.userData = data;
    });
  }

  onLogin(): void {
    window.location.href = environment.api + 'auth/facebook';
  }

}
