
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationSkeletonComponent } from './navigation-skeleton.component';

describe('NavigationSkeletonComponent', () => {
  let component: NavigationSkeletonComponent;
  let fixture: ComponentFixture<NavigationSkeletonComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavigationSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
