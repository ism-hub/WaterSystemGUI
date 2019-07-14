

import { Reducer, Action } from 'redux';
import { StationScannerData, StationScannerView, StationScanner, Network } from '../modles';
import { StationAction, StationServiceActionCreator } from '../station/api/StationServiceActionCreator';
import { StationScannerActionCreator } from './stationScannerActionCreator';
import { stationNetworksReducer } from '../station-network/stationNetworkReducer';


// tslint:disable-next-line:max-line-length
export const stationScannerDataReducer: Reducer<StationScannerData> = (state = new StationScannerData, action: Action<string>): StationScannerData => {
  let retState = state;
    switch (action.type) {
      case StationServiceActionCreator.STATION_GET_NEARBY_NETWORKS_SUCCEEDED:
        retState = (<StationAction>action).stationScannerData;
      break;
    }
    retState = retState.set('networks', stationNetworksReducer(retState.networks, action));
  return retState;
};

// tslint:disable-next-line:max-line-length
export const stationScannerViewReducer: Reducer<StationScannerView> = (state = new StationScannerView, action: Action<string>): StationScannerView => {
  let retState = state;
  switch (action.type) {
    case StationServiceActionCreator.STATION_GET_NEARBY_NETWORKS_STARTED:
      retState = retState.set('isLoading', true);
    break;
    case StationServiceActionCreator.STATION_GET_NEARBY_NETWORKS_SUCCEEDED:
      retState = retState.set('isLoading', false);
      retState = retState.set('isLoadingSucceeded', true);
    break;
    case StationServiceActionCreator.STATION_GET_NEARBY_NETWORKS_FAILED:
      retState = retState.set('isLoading', false);
      retState = retState.set('isLoadingSucceeded', false);
    break;
  }
return retState;
}; // ACCESSPOINT_GET_STATUS_DATA

export const stationScannerReducer: Reducer<StationScanner> = (state = new StationScanner, action: Action<string>): StationScanner => {
  let retState = state;
  retState = retState.set('data', stationScannerDataReducer(retState.data, action));
  retState = retState.set('view', stationScannerViewReducer(retState.view, action));
  return retState;
};

