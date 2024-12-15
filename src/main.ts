import { ErrorHandler, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { GlobalErrorHandler } from './app/core/services/global-error-handler/global-error-handler';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/features/home/home-routing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideAnimationsAsync(),
    provideExperimentalZonelessChangeDetection()
  ]
})
  .catch(err => console.error(err));
