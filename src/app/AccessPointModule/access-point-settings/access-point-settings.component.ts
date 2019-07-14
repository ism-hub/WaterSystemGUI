import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { WhenOn, AccessPointSettings } from '../models';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store/app.state';
import { AccessPointServiceActionCreator } from '../access-point/api/AccessPointServiceActionCreator';
import { AccessPointSettingsActionCreator } from './AccessPointSettingsActionCreator';

@Component({
  selector: 'app-access-point-settings',
  templateUrl: './access-point-settings.component.html',
  styleUrls: ['./access-point-settings.component.css']
})
export class AccessPointSettingsComponent implements OnInit {

  @Input() accessPointSettings: AccessPointSettings;

  animalControl = new FormControl('', [Validators.required]);

  whenStationOnOptions = [];

  constructor(private _ngRedux: NgRedux<AppState>) {
    for (const enumMember in WhenOn) {
      if (parseInt(enumMember, 10) >= 0) {
        this.whenStationOnOptions.push({name: WhenOn[enumMember], id: enumMember});
      }
    }
    this._ngRedux.dispatch(AccessPointServiceActionCreator.GetSettingsDataAction());
  }

  ngOnInit() {
  }

  whenOnChange(whenOn: WhenOn) {
    console.log(whenOn);
    this._ngRedux.dispatch(AccessPointSettingsActionCreator
      .UpdateSettingsData(this.accessPointSettings.accessPointSettingsData.set('whenOn', whenOn)));
  }

  ssidChange(newSSID: string) {
    this._ngRedux.dispatch(AccessPointSettingsActionCreator
      .UpdateSettingsData(this.accessPointSettings.accessPointSettingsData.set('ssid', newSSID)));
  }

  passwordChange(newPassword: string) {
    this._ngRedux.dispatch(AccessPointSettingsActionCreator
      .UpdateSettingsData(this.accessPointSettings.accessPointSettingsData.set('password', newPassword)));
  }

  localIPChange(newValue: string) {
    this._ngRedux.dispatch(AccessPointSettingsActionCreator
      .UpdateSettingsData(this.accessPointSettings.accessPointSettingsData.set('localIP', newValue)));
  }

  gatewayChange(newValue: string) {
    this._ngRedux.dispatch(AccessPointSettingsActionCreator
      .UpdateSettingsData(this.accessPointSettings.accessPointSettingsData.set('gateway', newValue)));
  }

  subnetChange(newValue: string) {
    this._ngRedux.dispatch(AccessPointSettingsActionCreator
      .UpdateSettingsData(this.accessPointSettings.accessPointSettingsData.set('subnet', newValue)));
  }

  restAPIPathChange(newValue: string) {
    // tslint:disable-next-line:max-line-length
    this._ngRedux.dispatch(AccessPointSettingsActionCreator
      .UpdateSettingsData(this.accessPointSettings.accessPointSettingsData.set('apConfigRestAPIPath', newValue)));
  }

  saveSettings() {
    this._ngRedux.dispatch(AccessPointServiceActionCreator.SetSettingsDataAction(this.accessPointSettings.accessPointSettingsData));
  }

  resetSettings() {
    this._ngRedux.dispatch(AccessPointServiceActionCreator.GetSettingsDataAction());
  }
}
