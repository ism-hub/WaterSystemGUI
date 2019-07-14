
import { Reducer, Action } from 'redux';
import { Station } from '../modles';
import { stationScannerReducer } from '../station-scanner/stationScannerReducer';
import { stationStatusReducer } from '../station-status/stationStatusReducer';


// tslint:disable-next-line:max-line-length
export const stationReducer: Reducer<Station> = (state = new Station, action: Action<any>): Station => {
  let retState = state;
  retState = retState.set('stationStatus', stationStatusReducer(state.stationStatus, action));
  retState = retState.set('stationScanner', stationScannerReducer(state.stationScanner, action));
  return retState;
};
