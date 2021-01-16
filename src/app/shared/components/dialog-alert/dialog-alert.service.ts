import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogAlertComponent, DialogAlertData } from './dialog-alert.component';



@Injectable()
export class DialogAlertService {
  constructor(private dialog: MatDialog) {}

  openDialog(data: DialogAlertData): MatDialogRef<DialogAlertComponent> {
    return this.dialog.open(DialogAlertComponent, {data});
  }
}
