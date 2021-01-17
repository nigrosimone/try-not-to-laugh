import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePlayerWrapperComponent } from './youtube-player-wrapper.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [YoutubePlayerWrapperComponent],
  imports: [
    CommonModule,
    YouTubePlayerModule
  ],
  exports: [
    YoutubePlayerWrapperComponent
  ]
})
export class YoutubePlayerWrapperModule { }
