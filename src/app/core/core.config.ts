import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { CORE_ROUTES } from '@jobcloud/admin/core/core.routes';
import { API_URL } from '@jobcloud/backend/config';
import { JobAdApi } from '@jobcloud/backend/job-ad.api';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const CORE_CONFIG: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(/*withInterceptors([JobAdApi])*/),
    provideRouter(CORE_ROUTES, withEnabledBlockingInitialNavigation()),
    provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
      trace: false,
      traceLimit: 75,
      connectOutsideZone: true,
    }),
    { provide: API_URL, useValue: 'http://localhost:3000' },
  ],
};
