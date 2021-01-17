import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpressionTrainingComponent } from './expression-training.component';

const routes: Routes = [
  {
    path: '',
    component: ExpressionTrainingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpressionTrainingRoutingModule { }
