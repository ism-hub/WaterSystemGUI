import { Reducer, Action } from 'redux';
import { Network } from '../modles';
import { List } from 'immutable';
import { StationNetworkActionCreator, NetworkAction } from './stationNetworkActionReducer';


export const stationNetworkReducer: Reducer<Network> = (state = new Network, action: Action<string>): Network => {
  let retState = state;
  switch (action.type) {
    case StationNetworkActionCreator.STATION_CHANGE_NETWORK_AUTOCONNECT:
      if (state.SSID === (action as NetworkAction).network.SSID) {
        retState = (action as NetworkAction).network.set('autoConnect', (action as NetworkAction).autoConnect);
      }
    break;
    case StationNetworkActionCreator.STATION_CHANGE_NETWORK_PASS:
    if (state.SSID === (action as NetworkAction).network.SSID) {
      retState = (action as NetworkAction).network.set('password', (action as NetworkAction).pass);
    }
    break;
  }
  return retState;
};

export const stationNetworksReducer: Reducer<List<Network>> = (state = List<Network>(), action: Action<string>): List<Network> => {
  let networks = state;
  if (state.size !== 0) {
    networks = state.update(state.findIndex((network) => stationNetworkReducer(network, action) !== network),
        (oldNet) => stationNetworkReducer(oldNet, action));
  }
  return networks;
};
