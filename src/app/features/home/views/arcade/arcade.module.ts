import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArcadeComponent } from './arcade.component';
import { ArcadeRoutingModule } from './arcade-routing.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@NgModule({
  declarations: [ArcadeComponent],
  imports: [
    CommonModule,
    ArcadeRoutingModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ArcadeComponent
  ]
})
export class ArcadeModule { }
