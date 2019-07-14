import { ServerAccessPointStatus, ServerAccessPointSettings, AccessPointStatusData, AccessPointSettingsData } from '../../models';


export class AccessPointServer2ServiceTranslator {

  public static translateStatus(serverAccessPointStatus: ServerAccessPointStatus): AccessPointStatusData {
    return new AccessPointStatusData(serverAccessPointStatus.isOn, serverAccessPointStatus.ipAddress,
      serverAccessPointStatus.numOfConnectedStations, serverAccessPointStatus.macAddress);
  }

  public static translateSettings(serverAccessPointSettings: ServerAccessPointSettings): AccessPointSettingsData {
    return new AccessPointSettingsData(serverAccessPointSettings.whenOn, serverAccessPointSettings.ssid,
      serverAccessPointSettings.password, serverAccessPointSettings.apConfigRestAPIPath, serverAccessPointSettings.localIP,
      serverAccessPointSettings.gateway, serverAccessPointSettings.subnet);
  }
}


export class AccessPointService2ServerTranslator {
  public static translateStatus(accessPointStatusData: AccessPointStatusData): ServerAccessPointStatus {
    const serverAccessPointStatus:  ServerAccessPointStatus = accessPointStatusData;
    return serverAccessPointStatus;
  }

  public static translateSettings(accessPointSettingsData: AccessPointSettingsData): ServerAccessPointSettings {
    const serverAccessPointStatus:  ServerAccessPointSettings = accessPointSettingsData;
    return serverAccessPointStatus;
  }
}
