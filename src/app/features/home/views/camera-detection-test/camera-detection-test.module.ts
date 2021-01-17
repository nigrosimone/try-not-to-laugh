import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraDetectionTestComponent } from './camera-detection-test.component';
import { CameraDetectionTestRoutingModule } from './camera-detection-test-routing.module';
import { CameraDetectionModule } from 'src/app/shared/components/camera-detection/camera-detection.module';


@NgModule({
  declarations: [CameraDetectionTestComponent],
  imports: [
    CommonModule,
    CameraDetectionTestRoutingModule,
    CameraDetectionModule
  ],
  exports: [
    CameraDetectionTestComponent
  ]
})
export class CameraDetectionTestModule { }
