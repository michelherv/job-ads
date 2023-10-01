import { Route } from '@angular/router';
import { jobAdReducer, jobAdStoreKey } from '@jobcloud/admin/stores/job-ad/job-ad.reducer';
import { provideState } from '@ngrx/store';

import { JobAdEffects } from '@jobcloud/admin/stores/job-ad/job-ad.effects';
import { provideEffects } from '@ngrx/effects';

export default [
  {
    path: '',
    providers: [provideState({ name: jobAdStoreKey, reducer: jobAdReducer }), provideEffects(JobAdEffects)],
    children: [
      { path: '', loadComponent: () => import('./list/list.component') },
      { path: 'creating', loadComponent: () => import('./create/create.component') },
      { path: 'reading/:id', loadComponent: () => import('./read/read.component') },
      { path: 'updating/:id', loadComponent: () => import('./update/update.component') },
      { path: 'deleting/:id', loadComponent: () => import('./delete/delete.component') },
    ],
  },
] as Route[];
