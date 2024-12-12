import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./expression-training.component').then(m => m.ExpressionTrainingComponent)
  },
];

