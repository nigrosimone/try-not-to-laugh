import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectGameComponent } from './select-game.component';
import { SelectGameRoutingModule } from './select-game-routing.module';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [SelectGameComponent],
  imports: [
    CommonModule,
    SelectGameRoutingModule,
    MatListModule
  ],
  exports: [
    SelectGameComponent
  ]
})
export class SelectGameModule { }
