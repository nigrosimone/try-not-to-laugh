import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacebookLoginComponent } from './facebook-login.component';

const routes: Routes = [
  {
    path: '',
    component: FacebookLoginComponent
  },
  {
    path: 'ok',
    component: FacebookLoginComponent
  },
  {
    path: 'error',
    component: FacebookLoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacebookLoginRoutingModule { }
