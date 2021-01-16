import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogAlertData {
  title: string;
  content: string;
}


@Component({
  selector: 'app-dialog-alert',
  templateUrl: 'dialog-alert.component.html',
})
export class DialogAlertComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogAlertData) {}
}
