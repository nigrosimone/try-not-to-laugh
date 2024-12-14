import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {CdkScrollableModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';

export interface DialogAlertData {
  title: string;
  content: string;
}


@Component({
    selector: 'app-dialog-alert',
    templateUrl: 'dialog-alert.component.html',
    imports: [MatDialogModule, CdkScrollableModule, MatButtonModule],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogAlertComponent {
  data = inject<DialogAlertData>(MAT_DIALOG_DATA);
}
