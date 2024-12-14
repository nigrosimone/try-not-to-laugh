import type { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./select-game.component').then(m => m.SelectGameComponent)
  },
];

