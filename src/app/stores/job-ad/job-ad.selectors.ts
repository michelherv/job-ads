import { JobAdState, jobAdStoreKey } from '@jobcloud/admin/stores/job-ad/job-ad.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const selectJobAd = createFeatureSelector<JobAdState>(jobAdStoreKey);

export const selectJobAdFilter = createSelector(selectJobAd, (state: JobAdState) => state.filter);
export const selectJobAdPage = createSelector(selectJobAd, (state: JobAdState) => state.page);
export const selectCurrentJobAd = createSelector(selectJobAd, (state: JobAdState) => state.jobAd);
