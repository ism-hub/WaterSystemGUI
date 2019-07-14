
import { List } from 'immutable';
import { Reducer, Action } from 'redux';
import { AccessPointStatusData, AccessPointStatusViewModel, AccessPointStatus } from '../models';
import { AccessPointStatusActionCreator } from './AccessPointStatusActionCreator';
import { AccessPointServiceActionCreator, AccessPointStatusAction } from '../access-point/api/AccessPointServiceActionCreator';



// tslint:disable-next-line:max-line-length
export const accessPointStatusDataReducer: Reducer<AccessPointStatusData> = (state = new AccessPointStatusData, action: Action<string>): AccessPointStatusData => {
  let retState = state;
    switch (action.type) {
      case AccessPointStatusActionCreator.ACCESSPOINTSTATUS_DATA_UPDATE:
      case AccessPointServiceActionCreator.ACCESSPOINT_GET_STATUS_DATA_SUCCEEDED:
        retState = (<AccessPointStatusAction>action).accessPointStatusData;
      break;
    }
  return retState;
};


// tslint:disable-next-line:max-line-length
export const accessPointStatusViewReducer: Reducer<AccessPointStatusViewModel> = (state = new AccessPointStatusViewModel, action: Action<string>): AccessPointStatusViewModel => {
  let retState = state;
  switch (action.type) {
    case AccessPointStatusActionCreator.ACCESSPOINTSTATUS_VIEW_UPDATE:
      retState = (<AccessPointStatusAction>action).accessPointStatusViewModel;
    break;
    case AccessPointServiceActionCreator.ACCESSPOINT_GET_STATUS_DATA_STARTED:
      retState = retState.set('isLoading', true);
    break;
    case AccessPointServiceActionCreator.ACCESSPOINT_GET_STATUS_DATA_SUCCEEDED:
      retState = retState.set('isLoading', false);
      retState = retState.set('isLoadingSucceeded', true);
    break;
    case AccessPointServiceActionCreator.ACCESSPOINT_GET_STATUS_DATA_FAILED:
      retState = retState.set('isLoading', false);
      retState = retState.set('isLoadingSucceeded', false);
    break;
  }
return retState;
}; // ACCESSPOINT_GET_STATUS_DATA

// tslint:disable-next-line:max-line-length
export const accessPointStatusReducer: Reducer<AccessPointStatus> = (state = new AccessPointStatus, action: Action<string>): AccessPointStatus => {
  let retState = state;
  retState = retState.set('accessPointStatusData', accessPointStatusDataReducer(retState.accessPointStatusData, action));
  retState = retState.set('accessPointStatusViewModel', accessPointStatusViewReducer(retState.accessPointStatusViewModel, action));
  return retState;
};

