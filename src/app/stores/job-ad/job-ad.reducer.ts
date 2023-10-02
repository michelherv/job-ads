import { JobAdFilter } from '@jobcloud/admin/models/job-ad-filter';
import { JobAdDto } from '@jobcloud/admin/models/job-ad.dto';
import { Page } from '@jobcloud/admin/models/page';
import {
  jobAdArchive,
  jobAdArchiveSuccess,
  jobAdCreate,
  jobAdCreateSuccess,
  jobAdDelete,
  jobAdDeleteSuccess,
  jobAdGet,
  jobAdGetBy,
  jobAdGetBySuccess,
  jobAdGetSuccess,
  jobAdPublish,
  jobAdPublishSuccess,
  jobAdUpdate,
  jobAdUpdateSuccess,
} from '@jobcloud/admin/stores/job-ad/job-ad.actions';
import { createReducer, on } from '@ngrx/store';

export interface JobAdState {
  filter?: JobAdFilter;
  page?: Page<JobAdDto>;
  loading?: boolean;
  jobAd?: JobAdDto;
}

const initialJobAdState: JobAdState = {};

export const jobAdStoreKey = 'jobAd';

export const jobAdReducer = createReducer(
  initialJobAdState,

  on(jobAdGetBy, (state, { filter }): JobAdState => ({ ...state, loading: true, filter, page: undefined })),
  on(jobAdGetBySuccess, (state, { page }): JobAdState => ({ ...state, page, loading: false })),

  on(jobAdGet, (state): JobAdState => ({ ...state, loading: true })),
  on(jobAdGetSuccess, (state, { jobAd }): JobAdState => ({ ...state, loading: false, jobAd })),

  on(jobAdCreate, (state): JobAdState => ({ ...state, loading: true })),
  on(jobAdCreateSuccess, (state, { jobAd }): JobAdState => ({ ...state, loading: false, jobAd })),

  on(jobAdUpdate, (state): JobAdState => ({ ...state, loading: true })),
  on(jobAdUpdateSuccess, (state, { jobAd }): JobAdState => ({ ...state, loading: false, jobAd })),

  on(jobAdDelete, (state): JobAdState => ({ ...state, loading: true })),
  on(jobAdDeleteSuccess, (state): JobAdState => ({ ...state, loading: false, jobAd: undefined })),

  on(jobAdPublish, (state): JobAdState => ({ ...state, loading: true })),
  on(jobAdPublishSuccess, (state, { jobAd }): JobAdState => ({ ...state, loading: false, jobAd })),

  on(jobAdArchive, (state): JobAdState => ({ ...state, loading: true })),
  on(jobAdArchiveSuccess, (state, { jobAd }): JobAdState => ({ ...state, loading: false, jobAd }))
);
