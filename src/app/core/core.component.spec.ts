import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreComponent } from '@jobcloud/admin/core/core.component';

describe('CoreComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreComponent, RouterTestingModule],
    }).compileComponents();
  });

  it('should render product name', () => {
    const fixture = TestBed.createComponent(CoreComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.header .product .product__name')?.textContent).toContain('Admin');
  });

  it(`should add sticky class to header`, () => {
    const fixture = TestBed.createComponent(CoreComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const sidenavContent = compiled.querySelector('.mat-sidenav-content') as HTMLElement;
    const arbitraryScrollHeight = 100;
    sidenavContent.scrollTop += arbitraryScrollHeight;
    sidenavContent.dispatchEvent(new Event('scroll'));
    fixture.detectChanges();

    expect(compiled.querySelector('.header')?.classList).toContain('header--stickied');
  });
});
