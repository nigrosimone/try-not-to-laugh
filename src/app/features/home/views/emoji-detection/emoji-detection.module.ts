import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiDetectionComponent } from './emoji-detection.component';
import { EmojiDetectionRoutingModule } from './emoji-detection-routing.module';
import { HumanizeTimeModule } from 'src/app/shared/pipe/humanize-time/humanize-time.module';
import { CameraDetectionModule } from 'src/app/shared/components/camera-detection/camera-detection.module';
import { EmojiModule } from 'src/app/shared/components/emoji/emoji.module';

@NgModule({
  declarations: [EmojiDetectionComponent],
  imports: [
    CommonModule,
    EmojiDetectionRoutingModule,
    HumanizeTimeModule,
    CameraDetectionModule,
    EmojiModule
  ],
  exports: [
    EmojiDetectionComponent
  ]
})
export class EmojiDetectionModule { }
