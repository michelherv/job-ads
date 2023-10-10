import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { JobAd } from '@jobcloud/admin/models/job-ad';
import { JobAdDto } from '@jobcloud/admin/models/job-ad.dto';
import { Observable, of, throwError } from 'rxjs';
import { generateId, records } from './job-ad.data';

export const JobAdApi = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const baseUrl = 'http://jobcloud.test/api';
  const id = request.url.replace(baseUrl, '').match(/\/job-ads\/(?<id>[0-9]+)/)?.groups?.['id'];
  let items = [...records];

  if ('GET' === request.method) {
    if (id) {
      return of(
        new HttpResponse({
          status: 200,
          body: items.find((item) => `${item.id}` === `${id}`),
        })
      );
    } else {
      return of(
        new HttpResponse({
          status: 200,
          body: { items: items, offset: 0, length: items.length, total: items.length },
        })
      );
    }
  } else if ('POST' === request.method) {
    const jobAd = request.body as JobAd;
    const jobAds = [
      ...items,
      {
        ...jobAd,
        id: generateId(),
        createdAt: new Date(),
        updatedAt: new Date(),
        _embedded: {},
      } as JobAdDto,
    ];
    items = jobAds;

    return of(new HttpResponse({ status: 200, body: items[items.length - 1] }));
  } else if ('PUT' === request.method) {
    const jobAd = request.body as JobAd;
    const jobAds = [...items];
    const index = jobAds.findIndex((item) => `${item.id}` === `${id}`);

    if (index >= 0) {
      jobAds.splice(index, 1, {
        ...jobAds[index],
        ...jobAd,
        createdAt: jobAds[index].createdAt,
        updatedAt: new Date(),
      });
      items = jobAds;
      return of(new HttpResponse({ status: 200, body: items[index] }));
    }
  }

  return throwError(() => new Error('An error occured'));
};
