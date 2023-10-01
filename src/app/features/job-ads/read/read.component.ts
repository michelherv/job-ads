import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReadComponent {}
