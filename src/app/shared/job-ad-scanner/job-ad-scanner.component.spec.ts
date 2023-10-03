import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobAdScannerComponent } from './job-ad-scanner.component';

describe('JobAdScannerComponent', () => {
  let component: JobAdScannerComponent;
  let fixture: ComponentFixture<JobAdScannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobAdScannerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobAdScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
