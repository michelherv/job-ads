import { JobAdDto } from '@jobcloud/admin/models/job-ad.dto';
import { SortDirectionEnum } from '@jobcloud/admin/models/sort-direction.enum';

export type JobAdFilter = Partial<Omit<JobAdDto, 'id' | '_embedded'>> & {
  page: number;
  size: number;
  sort: keyof JobAdDto;
  direction: SortDirectionEnum;
};
