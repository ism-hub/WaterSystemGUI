import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourListComponent } from './hour-list.component';

describe('HourListComponent', () => {
  let component: HourListComponent;
  let fixture: ComponentFixture<HourListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
