import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArcadeComponent } from './arcade.component';
import { ArcadeRoutingModule } from './arcade-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [ArcadeComponent],
  imports: [
    CommonModule,
    ArcadeRoutingModule,
    MatProgressSpinnerModule,
    YouTubePlayerModule
  ],
  exports: [
    ArcadeComponent
  ]
})
export class ArcadeModule { }
