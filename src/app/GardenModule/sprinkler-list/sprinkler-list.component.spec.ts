import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SprinklerListComponent } from './sprinkler-list.component';

describe('SprinklerListComponent', () => {
  let component: SprinklerListComponent;
  let fixture: ComponentFixture<SprinklerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SprinklerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SprinklerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
