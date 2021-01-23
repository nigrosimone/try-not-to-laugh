import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmojiComponent } from './emoji.component';


@NgModule({
  declarations: [EmojiComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EmojiComponent
  ]
})
export class EmojiModule { }
