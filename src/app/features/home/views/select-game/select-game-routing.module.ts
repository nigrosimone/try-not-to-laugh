import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectGameComponent } from './select-game.component';

const routes: Routes = [
  {
    path: '',
    component: SelectGameComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectGameRoutingModule { }
