import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanizeTimePipe } from './humanize-time.pipe';

@NgModule({
  declarations: [HumanizeTimePipe],
  imports: [
    CommonModule
  ],
  exports: [
    HumanizeTimePipe
  ]
})
export class HumanizeTimeModule { }
