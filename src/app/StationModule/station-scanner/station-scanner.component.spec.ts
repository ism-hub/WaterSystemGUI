import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationScannerComponent } from './station-scanner.component';

describe('StationScannerComponent', () => {
  let component: StationScannerComponent;
  let fixture: ComponentFixture<StationScannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationScannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationScannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
