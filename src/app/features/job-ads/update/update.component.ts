import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobAd } from '@jobcloud/admin/models/job-ad';
import { JobAdDto } from '@jobcloud/admin/models/job-ad.dto';
import { jobAdGet } from '@jobcloud/admin/stores/job-ad/job-ad.actions';
import { selectCurrentJobAd } from '@jobcloud/admin/stores/job-ad/job-ad.selectors';
import { JobAdScannerComponent } from '@jobcloud/libs/job-ad-scanner/job-ad-scanner.component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe, JobAdScannerComponent, NgIf, JsonPipe],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UpdateComponent implements OnInit {
  jobAd$: Observable<JobAdDto | undefined> = this.store.select(selectCurrentJobAd);

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly store: Store) {}

  doSubmit(jobAd: JobAd): void {
    console.log('updating jobAd', jobAd);
    // this.store.dispatch(jobAdUpdate({ id: this.route.snapshot.params['id'], jobAd }));
  }

  ngOnInit(): void {
    this.store.dispatch(jobAdGet({ id: this.route.snapshot.params['id'] }));
  }

  doCancel(): void {
    this.router.navigate(['..', '..'], { relativeTo: this.route });
  }
}
