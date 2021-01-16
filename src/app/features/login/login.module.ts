import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { DialogAlertModule } from 'src/app/shared/components/dialog-alert/dialog-alert.module';
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatIconModule,
    DialogAlertModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
