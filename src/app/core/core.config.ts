import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { CORE_ROUTES } from '@jobcloud/admin/core/core.routes';

export const CORE_CONFIG: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(CORE_ROUTES, withEnabledBlockingInitialNavigation()),
  ],
};
