import { JobAd } from '@jobcloud/admin/models/job-ad';
import { JobAdFilter } from '@jobcloud/admin/models/job-ad-filter';
import { JobAdDto } from '@jobcloud/admin/models/job-ad.dto';
import { Page } from '@jobcloud/admin/models/page';
import { createAction, props } from '@ngrx/store';

export const jobAdGetBy = createAction('[JobAd] Get By', props<{ filter: JobAdFilter }>());
export const jobAdGetBySuccess = createAction('[JobAd] Get By (success)', props<{ page: Page<JobAdDto> }>());

export const jobAdGet = createAction('[JobAd] Get', props<{ id: JobAd['id'] }>());
export const jobAdGetSuccess = createAction('[JobAd] Get (success)', props<{ jobAd: JobAdDto }>());

export const jobAdCreate = createAction('[JobAd] Create', props<{ jobAd: JobAd }>());
export const jobAdCreateSuccess = createAction('[JobAd] Create (success)', props<{ jobAd: JobAdDto }>());

export const jobAdUpdate = createAction('[JobAd] Update', props<{ id: JobAd['id']; jobAd: JobAd }>());
export const jobAdUpdateSuccess = createAction(
  '[JobAd] Update (success)',
  props<{ id: JobAd['id']; jobAd: JobAdDto }>()
);

export const jobAdDelete = createAction('[JobAd] Delete', props<{ id: JobAd['id'] }>());
export const jobAdDeleteSuccess = createAction('[JobAd] Delete (success)', props<{ id: JobAd['id'] }>());

export const jobAdPublish = createAction('[JobAd] Publish', props<{ id: JobAd['id'] }>());
export const jobAdPublishSuccess = createAction(
  '[JobAd] Publish (success)',
  props<{ id: JobAd['id']; jobAd: JobAdDto }>()
);

export const jobAdArchive = createAction('[JobAd] Archive', props<{ id: JobAd['id'] }>());
export const jobAdArchiveSuccess = createAction(
  '[JobAd] Archive (success)',
  props<{ id: JobAd['id']; jobAd: JobAdDto }>()
);
