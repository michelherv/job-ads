import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobAd } from '@jobcloud/admin/models/job-ad';
import { jobAdCreate } from '@jobcloud/admin/stores/job-ad/job-ad.actions';
import { JobAdScannerComponent } from '@jobcloud/libs/job-ad-scanner/job-ad-scanner.component';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [JobAdScannerComponent],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateComponent {
  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private readonly store: Store) {}

  doSubmit(jobAd: JobAd): void {
    this.store.dispatch(jobAdCreate({ jobAd }));
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  doCancel(): void {
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
