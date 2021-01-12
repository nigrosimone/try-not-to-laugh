import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArcadeComponent } from './arcade.component';

const routes: Routes = [
  {
    path: '',
    component: ArcadeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArcadeRoutingModule { }
