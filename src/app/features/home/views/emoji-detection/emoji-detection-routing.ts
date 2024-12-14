import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./emoji-detection.component').then(m => m.EmojiDetectionComponent)
  },
];
