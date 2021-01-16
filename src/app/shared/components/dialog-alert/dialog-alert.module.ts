import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAlertComponent } from './dialog-alert.component';
import { DialogAlertService } from './dialog-alert.service';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DialogAlertComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    DialogAlertComponent
  ],
  providers: [
    DialogAlertService
  ]
})
export class DialogAlertModule { }
