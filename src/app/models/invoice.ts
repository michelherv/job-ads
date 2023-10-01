import { AmountTypeEnum } from '@jobcloud/admin/models/amount-type.enum';
import { JobAd } from '@jobcloud/admin/models/job-ad';

export interface Invoice {
  id: number;
  jobAdId: JobAd['id'];
  amount: AmountTypeEnum;
  dueDate: Date;
}
