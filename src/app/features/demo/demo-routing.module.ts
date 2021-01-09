import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'camera-detection',
    pathMatch: 'full'
  },
  {
    path: 'camera-detection',
    loadChildren: () => import('./views/camera-detection/camera-detection.module').then(m => m.CameraDetectionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
