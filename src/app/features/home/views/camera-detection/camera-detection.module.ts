import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraDetectionComponent } from './camera-detection.component';
import { CameraDetectionRoutingModule } from './camera-detection-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [CameraDetectionComponent],
  imports: [
    CommonModule,
    CameraDetectionRoutingModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CameraDetectionComponent
  ]
})
export class CameraDetectionModule { }
