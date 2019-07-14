import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationNetworkComponent } from './station-network.component';

describe('StationNetworkComponent', () => {
  let component: StationNetworkComponent;
  let fixture: ComponentFixture<StationNetworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationNetworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
