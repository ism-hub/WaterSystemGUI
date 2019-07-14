

import { Reducer, Action } from 'redux';
import { AccessPointSettingsData, AccessPointSettings, AccessPointSettingsViewModel } from '../models';
import { AccessPointSettingsActionCreator } from './AccessPointSettingsActionCreator';
import { AccessPointServiceActionCreator, AccessPointSettingsAction } from '../access-point/api/AccessPointServiceActionCreator';


// tslint:disable-next-line:max-line-length
export const accessPointSettingsDataReducer: Reducer<AccessPointSettingsData> = (state = new AccessPointSettingsData, action: Action<string>): AccessPointSettingsData => {
  let retState = state;
  switch (action.type) {
    case AccessPointSettingsActionCreator.ACCESSPOINTSETTINGS_DATA_UPDATE:
    case AccessPointServiceActionCreator.ACCESSPOINT_GET_SETTINGS_DATA_SUCCEEDED:
    case AccessPointServiceActionCreator.ACCESSPOINT_SET_SETTINGS_DATA_SUCCEEDED:
    {
      retState = (<AccessPointSettingsAction>action).accessPointSettingsData;
    }break;
  }
  return retState;
};

// tslint:disable-next-line:max-line-length
export const accessPointSettingsViewModelReducer: Reducer<AccessPointSettingsViewModel> = (state = new AccessPointSettingsViewModel, action: Action<string>): AccessPointSettingsViewModel => {
  let retState = state;
  switch (action.type) {
    case AccessPointSettingsActionCreator.ACCESSPOINTSETTINGS_VIEWMODEL_UPDATE:
      retState = (<AccessPointSettingsAction>action).accessPointSettingsViewModel;
    break;
    case AccessPointServiceActionCreator.ACCESSPOINT_GET_SETTINGS_DATA_STARTED:
      retState = retState.set('isLoading', true);
    break;
    case AccessPointServiceActionCreator.ACCESSPOINT_GET_SETTINGS_DATA_SUCCEEDED:
      retState = retState.set('isLoading', false);
      retState = retState.set('isLoadingSucceeded', true);
    break;
    case AccessPointServiceActionCreator.ACCESSPOINT_GET_SETTINGS_DATA_FAILED:
      retState = retState.set('isLoading', false);
      retState = retState.set('isLoadingSucceeded', false);
    break;
  }
  return retState;
};

// tslint:disable-next-line:max-line-length
export const accessPointSettingsReducer: Reducer<AccessPointSettings> = (state = new AccessPointSettings, action: Action<string>): AccessPointSettings => {
  let retState = state;
  retState = retState.set('accessPointSettingsData', accessPointSettingsDataReducer(retState.accessPointSettingsData, action));
  // tslint:disable-next-line:max-line-length
  retState = retState.set('accessPointSettingsViewModel', accessPointSettingsViewModelReducer(retState.accessPointSettingsViewModel, action));
  return retState;
};
