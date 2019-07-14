import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleProgramComponent } from './simple-program.component';

describe('SimpleProgramComponent', () => {
  let component: SimpleProgramComponent;
  let fixture: ComponentFixture<SimpleProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
