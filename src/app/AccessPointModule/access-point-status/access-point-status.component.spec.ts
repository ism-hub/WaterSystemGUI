import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPointStatusComponent } from './access-point-status.component';

describe('AccessPointStatusComponent', () => {
  let component: AccessPointStatusComponent;
  let fixture: ComponentFixture<AccessPointStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessPointStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPointStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
