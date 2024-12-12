import { enableProdMode, ErrorHandler } from '@angular/core';
import { environment } from './environments/environment';
import { GlobalErrorHandler } from './app/core/services/global-error-handler/global-error-handler';
import { bootstrapApplication } from '@angular/platform-browser';
import { routes } from './app/app-routing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    provideAnimations()
  ]
})
  .catch(err => console.error(err));
