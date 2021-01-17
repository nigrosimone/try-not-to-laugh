import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpressionTrainingComponent } from './expression-training.component';
import { ExpressionTrainingRoutingModule } from './expression-training-routing.module';
import { HumanizeTimeModule } from 'src/app/shared/pipe/humanize-time/humanize-time.module';
import { CameraDetectionModule } from 'src/app/shared/components/camera-detection/camera-detection.module';

@NgModule({
  declarations: [ExpressionTrainingComponent],
  imports: [
    CommonModule,
    ExpressionTrainingRoutingModule,
    HumanizeTimeModule,
    CameraDetectionModule
  ],
  exports: [
    ExpressionTrainingComponent
  ]
})
export class ExpressionTrainingModule { }
