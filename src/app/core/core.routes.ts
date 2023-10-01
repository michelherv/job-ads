import { Route } from '@angular/router';

export const CORE_ROUTES: Route[] = [
  { path: 'job-ads', loadChildren: () => import('../features/job-ads/routes') },
  { path: '', pathMatch: 'full', redirectTo: 'job-ads' },
];
