
import { List } from 'immutable';
import { Reducer, Action } from 'redux';
import { StationStatusData, StationStatus, StationStatusView } from '../modles';
import { StationServiceActionCreator, StationAction } from '../station/api/StationServiceActionCreator';



// tslint:disable-next-line:max-line-length
export const stationStatusDataReducer: Reducer<StationStatusData> = (state = new StationStatusData, action: Action<string>): StationStatusData => {
  let retState = state;
    switch (action.type) {
      case StationServiceActionCreator.STATION_GET_STATUS_SUCCEEDED:
        retState = (<StationAction>action).stationStatusData;
      break;
    }
  return retState;
};

// tslint:disable-next-line:max-line-length
export const stationStatusViewReducer: Reducer<StationStatusView> = (state = new StationStatusView, action: Action<string>): StationStatusView => {
  let retState = state;
  switch (action.type) {
    case StationServiceActionCreator.STATION_GET_STATUS_STARTED:
      retState = retState.set('isLoading', true);
    break;
    case StationServiceActionCreator.STATION_GET_STATUS_SUCCEEDED:
      retState = retState.set('isLoading', false);
      retState = retState.set('isLoadingSucceeded', true);
    break;
    case StationServiceActionCreator.STATION_GET_STATUS_FAILED:
      retState = retState.set('isLoading', false);
      retState = retState.set('isLoadingSucceeded', false);
    break;
  }
return retState;
}; // ACCESSPOINT_GET_STATUS_DATA


export const stationStatusReducer: Reducer<StationStatus> = (state = new StationStatus, action: Action<string>): StationStatus => {
  let retState = state;
  retState = retState.set('data', stationStatusDataReducer(retState.data, action));
  retState = retState.set('view', stationStatusViewReducer(retState.view, action));
  return retState;
};

