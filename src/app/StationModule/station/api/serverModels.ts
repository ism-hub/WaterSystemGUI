

enum wl_enc_type {  /* Values map to 802.11 encryption suites... */
  ENC_TYPE_WEP  = 5,
  ENC_TYPE_TKIP = 2,
  ENC_TYPE_CCMP = 4,
  /* ... except these two, 7 and 8 are reserved in 802.11-2007 */
  ENC_TYPE_NONE = 7,
  ENC_TYPE_AUTO = 8
}

export class ServerNetwork {
  SSID: string  = '';
  RSSI: number = 0;
  BSSID: string  = '';
  channel: number  = 0;
  encryptionType: number  = wl_enc_type.ENC_TYPE_NONE;
  password: string  = '';
  autoConnect: boolean  = false;
}

export class ServerStationStatus {
  isConnected: boolean = false;
  localIp: string = '';
  network: ServerNetwork;
}

export class ServerStationScanner {
  networks: ServerNetwork[];
}

