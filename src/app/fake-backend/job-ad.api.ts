import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { JobAd } from '@jobcloud/admin/models/job-ad';
import { JobAdStatusEnum } from '@jobcloud/admin/models/job-ad-status.enum';
import { JobAdDto } from '@jobcloud/admin/models/job-ad.dto';
import { Observable, of, throwError } from 'rxjs';

export const JobAdApi = (request: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const baseUrl = 'http://jobcloud.test/api';
  const id = request.url.replace(baseUrl, '').match(/\/job-ads\/(?<id>[0-9]+)/)?.groups?.['id'];

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

const generateId = () => Math.ceil(Math.random() * 1000);

let items: JobAdDto[] = [
  {
    id: generateId(),
    title: 'Job Ad 1',
    description: 'Job Ad 1 Description',
    skills: ['Skill 1', 'Skill 2'],
    status: JobAdStatusEnum.Published,
    createdAt: new Date(),
    updatedAt: new Date(),
    _embedded: {
      company: {
        id: 1,
        name: 'Company 1',
        logo: 'https://via.placeholder.com/150',
      },
    },
  },
  {
    id: generateId(),
    title: 'Job Ad 2',
    description: 'Job Ad 2 Description',
    skills: ['Skill 1', 'Skill 2'],
    status: JobAdStatusEnum.Published,
    createdAt: new Date(),
    updatedAt: new Date(),
    _embedded: {
      company: {
        id: 2,
        name: 'Company 2',
        logo: 'https://via.placeholder.com/150',
      },
    },
  },
  {
    id: generateId(),
    title: 'Job Ad 3',
    description: 'Job Ad 3 Description',
    skills: ['Skill 1', 'Skill 2'],
    status: JobAdStatusEnum.Published,
    createdAt: new Date(),
    updatedAt: new Date(),
    _embedded: {
      company: {
        id: 3,
        name: 'Company 3',
        logo: 'https://via.placeholder.com/150',
      },
    },
  },
  {
    id: generateId(),
    title: 'Job Ad 4',
    description: 'Job Ad 4 Description',
    skills: ['Skill 1', 'Skill 2'],
    status: JobAdStatusEnum.Published,
    createdAt: new Date(),
    updatedAt: new Date(),
    _embedded: {
      company: {
        id: 4,
        name: 'Company 4',
        logo: 'https://via.placeholder.com/150',
      },
    },
  },
  {
    id: generateId(),
    title: 'Job Ad 5',
    description: 'Job Ad 5 Description',
    skills: ['Skill 1', 'Skill 2'],
    status: JobAdStatusEnum.Published,
    createdAt: new Date(),
    updatedAt: new Date(),
    _embedded: {
      company: {
        id: 5,
        name: 'Company 5',
        logo: 'https://via.placeholder.com/150',
      },
    },
  },
  {
    id: generateId(),
    title: 'Job Ad 6',
    description: 'Job Ad 6 Description',
    skills: ['Skill 1', 'Skill 2'],
    status: JobAdStatusEnum.Published,
    createdAt: new Date(),
    updatedAt: new Date(),
    _embedded: {
      company: {
        id: 6,
        name: 'Company 6',
        logo: 'https://via.placeholder.com/150',
      },
    },
  },
  {
    id: generateId(),
    title: 'Job Ad 7',
    description: 'Job Ad 7 Description',
    skills: ['Skill 1', 'Skill 2'],
    status: JobAdStatusEnum.Published,
    createdAt: new Date(),
    updatedAt: new Date(),
    _embedded: {
      company: {
        id: 7,
        name: 'Company 7',
        logo: 'https://via.placeholder.com/150',
      },
    },
  },
  {
    id: generateId(),
    title: 'Job Ad 8',
    description: 'Job Ad 8 Description',
    skills: ['Skill 1', 'Skill 2'],
    status: JobAdStatusEnum.Published,
    createdAt: new Date(),
    updatedAt: new Date(),
    _embedded: {
      company: {
        id: 8,
        name: 'Company 8',
        logo: 'https://via.placeholder.com/150',
      },
    },
  },
];
