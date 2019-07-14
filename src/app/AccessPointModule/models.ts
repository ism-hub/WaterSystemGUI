
import {Record} from 'immutable';

export enum WhenOn {WHEN_WIFI_DISCONNECTED = 0x01,
            WHEN_NO_ONE_CONNECTED = 0x02,
            WHEN_WIFI_DISCONNECTED_AND_WHEN_NO_ONE_CONNECTED = 0x03,
            ALWAYS = 0xFF }

// the server respomse is with all the fields; when we post we dont have to use all the fields.
export class ServerAccessPointSettings {
  whenOn?: WhenOn;
  ssid?: string;
  password?: string;
  apConfigRestAPIPath?: string;
  localIP?: string;
  gateway?: string;
  subnet?: string;
}

// tslint:disable-next-line:max-line-length
export class AccessPointSettingsData  extends Record({whenOn: WhenOn.WHEN_WIFI_DISCONNECTED_AND_WHEN_NO_ONE_CONNECTED, ssid: '', password: '', apConfigRestAPIPath: '', localIP: '', gateway: '', subnet: ''}) {
  // tslint:disable-next-line:max-line-length
  constructor(whenOn?: WhenOn, ssid?: string, password?: string, apConfigRestAPIPath?: string, localIP?: string, gateway?: string, subnet?: string) {
    super({whenOn, ssid, password, apConfigRestAPIPath, localIP, gateway, subnet});
  }
}

export class AccessPointSettingsViewModel extends Record({isLoading: false, isLoadingSucceeded: false}) {
  constructor(isLoading?: boolean, isLoadingSucceeded?: boolean) {
    super({isLoading, isLoadingSucceeded});
  }
}

// tslint:disable-next-line:max-line-length
export class AccessPointSettings  extends Record({accessPointSettingsData: new AccessPointSettingsData, accessPointSettingsViewModel: new AccessPointSettingsViewModel}) {
  constructor(accessPointSettingsData?: AccessPointSettingsData, accessPointSettingsViewModel?: AccessPointSettingsViewModel) {
    super({accessPointSettingsData, accessPointSettingsViewModel});
  }
}

export class ServerAccessPointStatus {
  isOn: boolean = false;
  ipAddress: string = '';
  numOfConnectedStations: number = 0;
  macAddress: string = '';
}



export class AccessPointStatusData  extends Record({isOn: false, ipAddress: '', numOfConnectedStations: 0, macAddress: ''}) {
  constructor(isOn?: boolean, ipAddress?: string, numOfConnectedStations?: number, macAddress?: string) {
    super({isOn, ipAddress, numOfConnectedStations, macAddress});
  }
}

export class AccessPointStatusViewModel extends Record({isLoading: false, isLoadingSucceeded: false}) {
  constructor(isLoading?: boolean, isLoadingSucceeded?: boolean) {
    super({isLoading, isLoadingSucceeded});
  }
}

// tslint:disable-next-line:max-line-length
export class AccessPointStatus  extends Record({accessPointStatusData: new AccessPointStatusData, accessPointStatusViewModel: new AccessPointStatusViewModel}) {
  constructor(accessPointStatusData?: AccessPointStatusData, accessPointStatusViewModel?: AccessPointStatusViewModel) {
    super({accessPointStatusData, accessPointStatusViewModel});
  }
}

// tslint:disable-next-line:max-line-length
export class AccessPoint extends Record({accessPointStatus: new AccessPointStatus, accessPointSettings: new AccessPointSettings}) {
  constructor(accessPointStatus?: AccessPointStatus, accessPointSettings?: AccessPointSettings) {
    super({accessPointStatus, accessPointSettings});
  }
}

