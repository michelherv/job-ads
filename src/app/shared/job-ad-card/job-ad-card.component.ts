import { DatePipe, NgFor, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JobAdDto } from '@jobcloud/admin/models/job-ad.dto';
import { JobAdStatusEnumToLabelPipe } from '@jobcloud/libs/job-ad-status-enum-to-label/job-ad-status-enum-to-label.pipe';

@Component({
  selector: 'jobcloud-lib-job-ad-card',
  standalone: true,
  imports: [DatePipe, NgFor, JobAdStatusEnumToLabelPipe, TitleCasePipe],
  templateUrl: './job-ad-card.component.html',
  styleUrls: ['./job-ad-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobAdCardComponent {
  protected readonly trackSkillBy = (_: number, skill: string) => skill;

  @Input() model!: JobAdDto;
}
