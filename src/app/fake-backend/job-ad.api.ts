import { HttpEvent, HttpHandlerFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { JobAdStatusEnum } from '@jobcloud/admin/models/job-ad-status.enum';
import { Observable, of } from 'rxjs';

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
  }

  throw new Error('An error occured');
};

const items = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
