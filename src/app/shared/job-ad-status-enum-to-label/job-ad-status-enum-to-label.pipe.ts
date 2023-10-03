import { Pipe, PipeTransform } from '@angular/core';
import { JobAdStatusEnum } from '@jobcloud/admin/models/job-ad-status.enum';

@Pipe({
  name: 'jobAdStatusEnumToLabel',
  standalone: true,
})
export class JobAdStatusEnumToLabelPipe implements PipeTransform {
  transform(value: JobAdStatusEnum): string {
    if (JobAdStatusEnum.Draft === value) {
      return 'draft';
    } else if (JobAdStatusEnum.Published === value) {
      return 'published';
    } else if (JobAdStatusEnum.Archived === value) {
      return 'archived';
    } else {
      throw new Error(`Unknown JobAdStatusEnum: ${value}`);
    }
  }
}
