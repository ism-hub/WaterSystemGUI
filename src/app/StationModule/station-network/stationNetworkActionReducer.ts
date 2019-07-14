import { Network } from '../modles';
import { Action } from 'redux';

export class StationNetworkActionCreator {
  static readonly STATION_CHANGE_NETWORK_AUTOCONNECT = 'STATION_CHANGE_NETWORK_AUTOCONNECT';
  static readonly STATION_CHANGE_NETWORK_PASS = 'STATION_CHANGE_NETWORK_PASS';

  static changeNetworkAutoconnectAction(networkToUpdate: Network, autoConnect: boolean): NetworkAction {
    return {type: StationNetworkActionCreator.STATION_CHANGE_NETWORK_AUTOCONNECT, network: networkToUpdate, autoConnect };
  }

  static changeNetworkPassAction(networkToUpdate: Network, pass: string): NetworkAction {
    return {type: StationNetworkActionCreator.STATION_CHANGE_NETWORK_PASS, network: networkToUpdate, pass };
  }
}

export class NetworkAction implements Action<string> {
  type: string;
  network?: Network;
  autoConnect?: boolean;
  pass?: string;
}
