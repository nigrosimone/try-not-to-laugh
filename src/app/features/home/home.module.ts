import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToolbarModule } from './components/toolbar/toolbar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatButtonModule,
    MatTooltipModule,
    ToolbarModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
