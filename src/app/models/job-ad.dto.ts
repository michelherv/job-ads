import { JobAd } from '@jobcloud/admin/models/job-ad';

export interface JobAdDto extends JobAd {
  // DTO properties that are not part of the model
  createdAt: Date;
  updatedAt: Date;
  _embedded: unknown;
}
