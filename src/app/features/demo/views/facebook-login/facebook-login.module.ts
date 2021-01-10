import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookLoginComponent } from './facebook-login.component';
import { FacebookLoginRoutingModule } from './facebook-login-routing.module';

@NgModule({
  declarations: [FacebookLoginComponent],
  imports: [
    CommonModule,
    FacebookLoginRoutingModule
  ],
  exports: [
    FacebookLoginComponent
  ]
})
export class FacebookLoginModule { }
