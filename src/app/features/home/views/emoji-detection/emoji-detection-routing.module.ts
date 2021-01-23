import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmojiDetectionComponent } from './emoji-detection.component';

const routes: Routes = [
  {
    path: '',
    component: EmojiDetectionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmojiDetectionRoutingModule { }
