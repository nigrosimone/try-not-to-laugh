import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArcadeComponent } from './arcade.component';
import { ArcadeRoutingModule } from './arcade-routing.module';
import { HumanizeTimeModule } from 'src/app/shared/pipe/humanize-time/humanize-time.module';
import { CameraDetectionModule } from 'src/app/shared/components/camera-detection/camera-detection.module';
import { YoutubePlayerWrapperModule } from 'src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.module';

@NgModule({
  declarations: [ArcadeComponent],
  imports: [
    CommonModule,
    ArcadeRoutingModule,
    HumanizeTimeModule,
    CameraDetectionModule,
    YoutubePlayerWrapperModule
  ],
  exports: [
    ArcadeComponent
  ]
})
export class ArcadeModule { }
