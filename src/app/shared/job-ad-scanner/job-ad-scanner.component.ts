import { DatePipe, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule, NgModel } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { JobAd } from '@jobcloud/admin/models/job-ad';
import { JobAdStatusEnum } from '@jobcloud/admin/models/job-ad-status.enum';
import { JobAdDto } from '@jobcloud/admin/models/job-ad.dto';
import { JobAdStatusEnumToLabelPipe } from '@jobcloud/libs/job-ad-status-enum-to-label/job-ad-status-enum-to-label.pipe';

@Component({
  selector: 'jobcloud-lib-job-ad-scanner',
  standalone: true,
  imports: [
    DatePipe,
    FormsModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    NgFor,
    NgIf,
    TitleCasePipe,
    JobAdStatusEnumToLabelPipe,
  ],
  templateUrl: './job-ad-scanner.component.html',
  styleUrls: ['./job-ad-scanner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobAdScannerComponent {
  protected readonly JobAdStatusEnum = JobAdStatusEnum;
  protected readonly trackSkillBy = (_: number, skill: string) => skill;

  @Input() model?: JobAdDto;
  @Output() modelChange = new EventEmitter<JobAd>();
  @Output() cancel = new EventEmitter<void>();

  protected addSkill(event: MatChipInputEvent, ngModel: NgModel): void {
    const skill = (event.value || '').trim();

    if (skill) {
      const control = ngModel.control as FormControl<string[]>;
      control.setValue([...(control.value ?? []), skill]);
    }

    event.chipInput.clear();
  }

  protected removeKeyword(skill: string, ngModel: NgModel) {
    const control = ngModel.control as FormControl<string[]>;
    const skills = [...control.value];
    const index = skills.indexOf(skill);

    if (index >= 0) {
      skills.splice(index, 1);
      control.setValue(skills);
    }
  }
}
