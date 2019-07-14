
import { Reducer } from 'redux';
import { AccessPoint } from '../models';
import { accessPointSettingsReducer } from '../access-point-settings/AccessPointSettingsReducer';
import { accessPointStatusDataReducer, accessPointStatusReducer } from '../access-point-status/AccessPointStatusReducer';


// tslint:disable-next-line:max-line-length
export const accessPointReducer: Reducer<AccessPoint> = (state = new AccessPoint, action: any): AccessPoint => {
  let retState = state;
  retState = retState.set('accessPointSettings', accessPointSettingsReducer(state.accessPointSettings, action));
  retState = retState.set('accessPointStatus', accessPointStatusReducer(state.accessPointStatus, action));
  return retState;
};
