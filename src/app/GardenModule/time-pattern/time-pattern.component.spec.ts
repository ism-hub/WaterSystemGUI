import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePatternComponent } from './time-pattern.component';

describe('TimePatternComponent', () => {
  let component: TimePatternComponent;
  let fixture: ComponentFixture<TimePatternComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePatternComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
