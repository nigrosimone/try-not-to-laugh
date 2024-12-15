import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

export interface DialogAlertData {
  title: string;
  content: string;
}


@Component({
    selector: 'app-dialog-alert',
    templateUrl: 'dialog-alert.component.html',
    imports: [MatDialogModule, CdkScrollable, MatButton],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogAlertComponent {
  data = inject<DialogAlertData>(MAT_DIALOG_DATA);
}
