import { Network, StationStatusData, StationScannerData } from '../../modles';
import { Action } from 'redux';

export class StationServiceActionCreator {
  static readonly STATION_CONNECT_TO_NETWORK_REQ = 'STATION_CONNECT_TO_NETWORK_REQ';
  static readonly STATION_CONNECT_TO_NETWORK_REQ_STARTED = 'STATION_CONNECT_TO_NETWORK_REQ_STARTED';
  static readonly STATION_CONNECT_TO_NETWORK_REQ_FAILED = 'STATION_CONNECT_TO_NETWORK_REQ_FAILED';
  static readonly STATION_CONNECT_TO_NETWORK_REQ_SUCCEEDED = 'STATION_CONNECT_TO_NETWORK_REQ_SUCCEEDED';

  static readonly STATION_DISCONNECT_FROM_NETWORK_REQ = 'STATION_DISCONNECT_FROM_NETWORK_REQ';
  static readonly STATION_DISCONNECT_FROM_NETWORK_REQ_STARTED = 'STATION_DISCONNECT_FROM_NETWORK_REQ_STARTED';
  static readonly STATION_DISCONNECT_FROM_NETWORK_REQ_FAILED = 'STATION_DISCONNECT_FROM_NETWORK_REQ_FAILED';
  static readonly STATION_DISCONNECT_FROM_NETWORK_REQ_SUCCEEDED = 'STATION_DISCONNECT_FROM_NETWORK_REQ_SUCCEEDED';

  static readonly STATION_GET_NEARBY_NETWORKS = 'STATION_GET_NEARBY_NETWORKS';
  static readonly STATION_GET_NEARBY_NETWORKS_STARTED = 'STATION_GET_NEARBY_NETWORKS_STARTED';
  static readonly STATION_GET_NEARBY_NETWORKS_FAILED = 'STATION_GET_NEARBY_NETWORKS_FAILED';
  static readonly STATION_GET_NEARBY_NETWORKS_SUCCEEDED = 'STATION_GET_NEARBY_NETWORKS_SUCCEEDED';

  static readonly STATION_GET_STATUS = 'STATION_GET_STATUS';
  static readonly STATION_GET_STATUS_STARTED = 'STATION_GET_STATUS_STARTED';
  static readonly STATION_GET_STATUS_FAILED = 'STATION_GET_STATUS_FAILED';
  static readonly STATION_GET_STATUS_SUCCEEDED = 'STATION_GET_STATUS_SUCCEEDED';


  static sendConnectToNetReqAction(network: Network): StationAction {
    return {type: StationServiceActionCreator.STATION_CONNECT_TO_NETWORK_REQ, network };
  }
  static askToConnectSucceededAction() {
    return {type: StationServiceActionCreator.STATION_CONNECT_TO_NETWORK_REQ_SUCCEEDED };
  }
  static askToConnectFailedAction(error: string) {
    return {type: StationServiceActionCreator.STATION_CONNECT_TO_NETWORK_REQ_FAILED, error};
  }
  static askToConnectStartedAction() {
    return {type: StationServiceActionCreator.STATION_CONNECT_TO_NETWORK_REQ_STARTED};
  }

  static getNearbyNetworksAction(): StationAction {
    return {type: StationServiceActionCreator.STATION_GET_NEARBY_NETWORKS };
  }
  static getNearbyNetworksSucceededAction(stationScannerData: StationScannerData): StationAction {
    return {type: StationServiceActionCreator.STATION_GET_NEARBY_NETWORKS_SUCCEEDED, stationScannerData };
  }
  static getNearbyNetworksFailedAction(error: string) {
    return {type: StationServiceActionCreator.STATION_GET_NEARBY_NETWORKS_FAILED, error };
  }
  static getNearbyNetworksStartedAction() {
    return {type: StationServiceActionCreator.STATION_GET_NEARBY_NETWORKS_STARTED };
  }

  static getStationStatusAction(): StationAction {
    return {type: StationServiceActionCreator.STATION_GET_STATUS };
  }
  static getStatusDataSucceededAction(stationStatusData: StationStatusData): StationAction {
    return {type: StationServiceActionCreator.STATION_GET_STATUS_SUCCEEDED, stationStatusData };
  }
  static getStatusDataFailedAction(error: string): StationAction {
    return {type: StationServiceActionCreator.STATION_GET_STATUS_FAILED, error };
  }
  static GetStatusDataStartedAction(): StationAction {
    return {type: StationServiceActionCreator.STATION_GET_STATUS_STARTED };
  }

  static sendStationDisconnectReqAction(network: Network): StationAction {
    return {type: StationServiceActionCreator.STATION_DISCONNECT_FROM_NETWORK_REQ, network };
  }
  static askToDisconnectSucceededAction() {
    return {type: StationServiceActionCreator.STATION_DISCONNECT_FROM_NETWORK_REQ_SUCCEEDED };
  }
  static askToDisconnectFailedAction(error: string) {
    return {type: StationServiceActionCreator.STATION_DISCONNECT_FROM_NETWORK_REQ_FAILED, error };
  }
  static askToDisconnectStartedAction() {
    return {type: StationServiceActionCreator.STATION_DISCONNECT_FROM_NETWORK_REQ_STARTED };
  }

}

export class StationAction implements Action<string> {
  type: string;
  network?: Network;
  stationStatusData?: StationStatusData;
  error?: string;
  stationScannerData?: StationScannerData;
}
