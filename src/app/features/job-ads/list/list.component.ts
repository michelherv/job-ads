import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { JobAdDto } from '@jobcloud/admin/models/job-ad.dto';
import { Page } from '@jobcloud/admin/models/page';
import { SortDirectionEnum } from '@jobcloud/admin/models/sort-direction.enum';
import { jobAdGetBy } from '@jobcloud/admin/stores/job-ad/job-ad.actions';
import { selectJobAdPage } from '@jobcloud/admin/stores/job-ad/job-ad.selectors';
import { JobAdCardComponent } from '@jobcloud/libs/job-ad-card/job-ad-card.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatCardModule, MatIconModule, NgFor, NgIf, RouterLink, JobAdCardComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListComponent implements OnInit {
  protected readonly trackJobAdBy = (_: number, item: JobAdDto) => item.id;
  protected page$: Observable<Page<JobAdDto> | undefined> = this.store.select(selectJobAdPage);

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(jobAdGetBy({ filter: { page: 0, size: 10, sort: 'id', direction: SortDirectionEnum.ASC } }));
  }
}
