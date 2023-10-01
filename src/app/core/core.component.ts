import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { Observable, distinctUntilChanged, map, shareReplay, startWith, tap } from 'rxjs';

@Component({
  standalone: true,
  imports: [AsyncPipe, MatButtonModule, MatSidenavModule, MatToolbarModule, RouterModule],
  selector: 'jobcloud-admin-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreComponent implements OnInit {
  @ViewChild(MatSidenavContent, { static: true }) private sidenavContent?: MatSidenavContent;
  protected headerStickied$?: Observable<boolean>;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.headerStickied$ = this.sidenavContent?.elementScrolled().pipe(
      map(() => this.sidenavContent!.measureScrollOffset('top') > 0),
      startWith(this.sidenavContent.measureScrollOffset('top') > 0),
      distinctUntilChanged(),
      shareReplay(1),
      tap(() => requestAnimationFrame(() => this.cdr.detectChanges()))
    );
  }
}
