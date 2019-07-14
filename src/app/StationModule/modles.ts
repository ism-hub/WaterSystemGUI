import { Record, List } from 'immutable';


export class Network extends Record({SSID: '', RSSI: 0, BSSID: '', channel: 0, encryptionType: 0, password: '', autoConnect: false}) {
  constructor
    // tslint:disable-next-line:max-line-length
    (network?: {SSID?: string, RSSI?: number, BSSID?: string, channel?: number, encryptionType?: number, password?: string, autoConnect?: boolean}) {
    super(network);
  }
}

export class StationScannerView  extends Record({isLoading: false, isLoadingSucceeded: false}) {
  constructor(isLoading?: boolean, isLoadingSucceeded?: boolean) {
    super({isLoading, isLoadingSucceeded});
  }
}

export class StationScannerData extends Record({networks: List<Network>()}) {
  constructor(networks?: List<Network>) {
    super({networks});
  }
}

export class StationScanner  extends Record({data: new StationScannerData, view: new StationScannerView}) {
  constructor(data?: StationScannerData, view?: StationScannerView) {
    super({data, view});
  }
}

export class StationStatusData extends Record({isConnected: false, localIP: '', network: new Network}) {
  constructor(isConnected?: boolean, localIP?: string, network?: Network) {
    super({isConnected, localIP, network});
  }
}

export class StationStatusView extends Record({isLoading: false, isLoadingSucceeded: false}) {
  constructor(isLoading?: boolean, isLoadingSucceeded?: boolean) {
    super({isLoading, isLoadingSucceeded});
  }
}

export class StationStatus extends Record({data: new StationStatusData, view: new StationStatusView}) {
  constructor(data?: StationStatusData, view?: StationStatusView) {
    super({data, view});
  }
}

export class Station extends Record({stationStatus: new StationStatus, stationScanner: new StationScanner}) {
  constructor(stationStatus?: StationStatus, stationScanner?: StationScanner) {
    super({stationStatus, stationScanner});
  }
}
