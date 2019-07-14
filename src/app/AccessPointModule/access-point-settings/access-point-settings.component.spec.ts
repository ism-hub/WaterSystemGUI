import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessPointSettingsComponent } from './access-point-settings.component';

describe('AccessPointSettingsComponent', () => {
  let component: AccessPointSettingsComponent;
  let fixture: ComponentFixture<AccessPointSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessPointSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessPointSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
