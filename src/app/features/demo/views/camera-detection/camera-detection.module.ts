import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraDetectionComponent } from './camera-detection.component';
import { CameraDetectionRoutingModule } from './camera-detection-routing.module';



@NgModule({
  declarations: [CameraDetectionComponent],
  imports: [
    CommonModule,
    CameraDetectionRoutingModule
  ],
  exports: [
    CameraDetectionComponent
  ]
})
export class CameraDetectionModule { }
