import { DatePipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobAdStatusEnum } from '@jobcloud/admin/models/job-ad-status.enum';
import { JobAdCardComponent } from '@jobcloud/libs/job-ad-card/job-ad-card.component';

describe('JobAdCardComponent', () => {
  let component: JobAdCardComponent;
  let fixture: ComponentFixture<JobAdCardComponent>;
  let element: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobAdCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JobAdCardComponent);
    component = fixture.componentInstance;
    component.model = {
      id: 1,
      title: 'fake title',
      description: 'fake description',
      skills: ['fake skill 1', 'fake skill 2'],
      status: JobAdStatusEnum.Draft,
      createdAt: new Date(),
      updatedAt: new Date(),
      _embedded: {},
    };
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the job ad identifier at first row', () => {
    expect(element.querySelectorAll('.property-name')[0]?.classList).toContain('property-id');
    expect(element.querySelectorAll('.property-value')[0]?.classList).toContain('property-id');
  });

  it('should display the provided job ad identifier', () => {
    expect(element.querySelector('.property-value.property-id')?.textContent).toContain(`${component.model.id}`);
  });

  it('should display the job ad title at second row', () => {
    expect(element.querySelectorAll('.property-name')[1]?.classList).toContain('property-title');
    expect(element.querySelectorAll('.property-value')[1]?.classList).toContain('property-title');
  });

  it('should display the provided job ad title', () => {
    expect(element.querySelector('.property-value.property-title')?.textContent).toContain(component.model.title);
  });

  it('should display the job ad description at third row', () => {
    expect(element.querySelectorAll('.property-name')[2]?.classList).toContain('property-description');
    expect(element.querySelectorAll('.property-value')[2]?.classList).toContain('property-description');
  });

  it('should display the provided job ad description', () => {
    expect(element.querySelector('.property-value.property-description')?.textContent).toContain(
      component.model.description
    );
  });

  it('should display the job ad skills at fourth row', () => {
    expect(element.querySelectorAll('.property-name')[3]?.classList).toContain('property-skills');
    expect(element.querySelectorAll('.property-value')[3]?.classList).toContain('property-skills');
  });

  it('should display the provided job ad skills', () => {
    expect(element.querySelector('.property-value.property-skills')?.textContent).toContain(
      component.model.skills.join('')
    );
  });

  it('should display the job ad status at fifth row', () => {
    expect(element.querySelectorAll('.property-name')[4]?.classList).toContain('property-status');
    expect(element.querySelectorAll('.property-value')[4]?.classList).toContain('property-status');
  });

  it('should display the provided job ad status', () => {
    expect(element.querySelector('.property-value.property-status')?.textContent).toContain(
      component.model.status.toString()
    );
  });

  it('should display the job ad createdAt at sixth row', () => {
    expect(element.querySelectorAll('.property-name')[5]?.classList).toContain('property-created-at');
    expect(element.querySelectorAll('.property-value')[5]?.classList).toContain('property-created-at');
  });

  it('should display the provided job ad createdAt', () => {
    expect(element.querySelector('.property-value.property-created-at')?.textContent).toContain(
      new DatePipe('en-US').transform(component.model.createdAt)
    );
  });

  it('should display the job ad updatedAt at seventh row', () => {
    expect(element.querySelectorAll('.property-name')[6]?.classList).toContain('property-updated-at');
    expect(element.querySelectorAll('.property-value')[6]?.classList).toContain('property-updated-at');
  });

  it('should display the provided job ad updatedAt', () => {
    expect(element.querySelector('.property-value.property-updated-at')?.textContent).toContain(
      new DatePipe('en-US').transform(component.model.updatedAt)
    );
  });
});
