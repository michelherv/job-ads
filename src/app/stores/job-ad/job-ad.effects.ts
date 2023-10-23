import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { JobAdFilter } from '@jobcloud/admin/models/job-ad-filter';
import { JobAdStatusEnum } from '@jobcloud/admin/models/job-ad-status.enum';
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
import { API_URL } from '@jobcloud/backend/config';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, Observable, switchMap, tap } from 'rxjs';
import { Action } from '@ngrx/store';

const toPageOperator =
  <T>(): ((source: Observable<T[]>) => Observable<Page<T>>) =>
    (source) => source.pipe(map((items) => ({items, offset: 0, length: items.length, total: items.length})));

@Injectable()
export class JobAdEffects {
  constructor(
    private readonly actions$: Actions,
    @Inject(API_URL) private readonly backendUrl: string,
    private readonly httpClient: HttpClient
  ) {}

  getBy$ = createEffect(() => {
    const toParams = (filter: JobAdFilter) =>
      (Object.keys(filter) as (keyof JobAdFilter)[])
        .filter((key) => typeof filter[key] !== 'undefined')
        .reduce(
          (acc, key) => ({ ...acc, [key]: filter[key] as string | number | boolean }),
          {} as { [key: string]: string | number | boolean }
        );

    return this.actions$.pipe(
      ofType(jobAdGetBy),
      switchMap(({ filter }) =>
        this.httpClient.get<JobAdDto[]>(`${this.backendUrl}/job-ads`, { params: toParams(filter) }).pipe(toPageOperator())
      ),
      map((page) => jobAdGetBySuccess({ page }))
    );
  });

  get$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(jobAdGet),
      switchMap(({ id }) => this.httpClient.get<JobAdDto>(`${this.backendUrl}/job-ads/${id}`)),
      map((jobAd) => jobAdGetSuccess({ jobAd }))
    );
  });

  create$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(jobAdCreate),
      switchMap(({ jobAd }) => this.httpClient.post<JobAdDto>(`${this.backendUrl}/job-ads`, jobAd)),
      map((jobAd) => jobAdCreateSuccess({ jobAd }))
    );
  });

  update$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(jobAdUpdate),
      switchMap(({ id, jobAd }) =>
        this.httpClient.put<JobAdDto>(`${this.backendUrl}/job-ads/${id}`, jobAd).pipe(map((jobAd) => ({ id, jobAd })))
      ),
      map(({ id, jobAd }) => jobAdUpdateSuccess({ id, jobAd }))
    );
  });

  delete$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(jobAdDelete),
      switchMap(({ id }) => this.httpClient.delete<void>(`${this.backendUrl}/job-ads/${id}`).pipe(map(() => id))),
      map((id) => jobAdDeleteSuccess({ id }))
    );
  });

  publish$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(jobAdPublish),
      switchMap(({ id }) =>
        this.httpClient
          .patch<JobAdDto>(`${this.backendUrl}/job-ads/${id}`, { status: JobAdStatusEnum.Published })
          .pipe(map((jobAd) => ({ id, jobAd })))
      ),
      map(({ id, jobAd }) => jobAdPublishSuccess({ id, jobAd }))
    );
  });

  archive$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(jobAdArchive),
      switchMap(({ id }) =>
        this.httpClient
          .patch<JobAdDto>(`${this.backendUrl}/job-ads/${id}`, { status: JobAdStatusEnum.Archived })
          .pipe(map((jobAd) => ({ id, jobAd })))
      ),
      map(({ id, jobAd }) => jobAdArchiveSuccess({ id, jobAd }))
    );
  });
}
