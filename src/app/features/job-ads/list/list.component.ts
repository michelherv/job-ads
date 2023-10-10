import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { Observable, Subscription, debounceTime, distinctUntilChanged, fromEvent, map, startWith } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatCardModule, MatIconModule, NgFor, NgIf, RouterLink, JobAdCardComponent],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListComponent implements OnInit, OnDestroy {
  @ViewChild('searchBar', { static: true }) protected searchBar?: ElementRef<HTMLInputElement>;
  protected readonly trackJobAdBy = (_: number, item: JobAdDto) => item.id;
  protected page$: Observable<Page<JobAdDto> | undefined> = this.store.select(selectJobAdPage);
  private searchSubscription?: Subscription;

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.searchSubscription = fromEvent(this.searchBar!.nativeElement, 'keyup')
      .pipe(
        map((event) => (event as KeyboardEvent).target as HTMLInputElement),
        map((inputElement) => inputElement.value ?? ''),
        debounceTime(400),
        startWith(''),
        distinctUntilChanged()
      )
      .subscribe((query) =>
        this.store.dispatch(
          jobAdGetBy({ filter: { query, page: 0, size: 10, sort: 'id', direction: SortDirectionEnum.ASC } })
        )
      );
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }
}
