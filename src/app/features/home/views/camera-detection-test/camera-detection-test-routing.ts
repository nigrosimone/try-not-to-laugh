import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./camera-detection-test.component').then(m => m.CameraDetectionTestComponent)
  },
];

