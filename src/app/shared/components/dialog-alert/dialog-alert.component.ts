import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogActions, MatDialogClose } from '@angular/material/dialog';
import { MatButton } from '@angular/material/button';

export interface DialogAlertData {
  title: string;
  content: string;
}


@Component({
  selector: 'app-dialog-alert',
  templateUrl: 'dialog-alert.component.html',
  imports: [MatDialogContent, MatDialogActions, MatButton, MatDialogClose],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogAlertComponent {
  data = inject<DialogAlertData>(MAT_DIALOG_DATA);
}
