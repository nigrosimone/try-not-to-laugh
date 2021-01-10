import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoComponent } from './demo.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {
        path: 'camera-detection',
        loadChildren: () => import('./views/camera-detection/camera-detection.module').then(m => m.CameraDetectionModule)
      },
      {
        path: 'facebook-login',
        loadChildren: () => import('./views/facebook-login/facebook-login.module').then(m => m.FacebookLoginModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
