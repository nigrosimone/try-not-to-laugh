import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraDetectionComponent } from './camera-detection.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [CameraDetectionComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CameraDetectionComponent
  ]
})
export class CameraDetectionModule { }
