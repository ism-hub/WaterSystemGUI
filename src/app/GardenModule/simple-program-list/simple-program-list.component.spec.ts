import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProgramListComponent } from './simple-program-list.component';

describe('SimpleProgramListComponent', () => {
  let component: SimpleProgramListComponent;
  let fixture: ComponentFixture<SimpleProgramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleProgramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleProgramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
