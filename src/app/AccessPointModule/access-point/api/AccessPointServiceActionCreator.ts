import { AccessPointStatusData, AccessPointSettingsData, AccessPointSettingsViewModel, AccessPointStatusViewModel } from '../../models';
import { Action } from 'redux';


export class AccessPointServiceActionCreator {
  static readonly ACCESSPOINT_GET_STATUS_DATA = 'ACCESSPOINT_GET_STATUS_DATA';
  static readonly ACCESSPOINT_GET_STATUS_DATA_STARTED = 'ACCESSPOINT_GET_STATUS_DATA_STARTED';
  static readonly ACCESSPOINT_GET_STATUS_DATA_SUCCEEDED = 'ACCESSPOINT_GET_STATUS_DATA_SUCCEEDED';
  static readonly ACCESSPOINT_GET_STATUS_DATA_FAILED = 'ACCESSPOINT_GET_STATUS_DATA_FAILED';

  static readonly ACCESSPOINT_SET_SETTINGS_DATA = 'ACCESSPOINT_SET_SETTINGS_DATA';
  static readonly ACCESSPOINT_SET_SETTINGS_DATA_STARTED = 'ACCESSPOINT_SET_SETTINGS_DATA_STARTED';
  static readonly ACCESSPOINT_SET_SETTINGS_DATA_SUCCEEDED = 'ACCESSPOINT_SET_SETTINGS_DATA_SUCCEEDED';
  static readonly ACCESSPOINT_SET_SETTINGS_DATA_FAILED = 'ACCESSPOINT_SET_SETTINGS_DATA_FAILED';

  static readonly ACCESSPOINT_GET_SETTINGS_DATA = 'ACCESSPOINT_GET_SETTINGS_DATA';
  static readonly ACCESSPOINT_GET_SETTINGS_DATA_STARTED = 'ACCESSPOINT_GET_SETTINGS_DATA_STARTED';
  static readonly ACCESSPOINT_GET_SETTINGS_DATA_SUCCEEDED = 'ACCESSPOINT_GET_SETTINGS_DATA_SUCCEEDED';
  static readonly ACCESSPOINT_GET_SETTINGS_DATA_FAILED = 'ACCESSPOINT_GET_SETTINGS_DATA_FAILED';

  // Status
  static GetStatusDataAction(): AccessPointStatusAction {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_GET_STATUS_DATA };
  }

  static GetStatusDataStartedAction(): AccessPointStatusAction {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_GET_STATUS_DATA_STARTED };
  }

  static GetStatusDataSucceededAction(accessPointStatusData: AccessPointStatusData): AccessPointStatusAction {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_GET_STATUS_DATA_SUCCEEDED, accessPointStatusData};
  }

  static GetStatusDataFailedAction(error: String): any {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_GET_STATUS_DATA_FAILED, error};
  }

  // Settings GET
  static GetSettingsDataAction(): AccessPointSettingsAction {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_GET_SETTINGS_DATA };
  }

  static GetSettingsDataStartedAction(): AccessPointSettingsAction {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_GET_SETTINGS_DATA_STARTED };
  }

  static GetSettingsDataSucceededAction(accessPointSettingsData: AccessPointSettingsData): AccessPointSettingsAction {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_GET_SETTINGS_DATA_SUCCEEDED, accessPointSettingsData};
  }

  static GetSettingsDataFailedAction(error: String): any {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_GET_SETTINGS_DATA_FAILED, error};
  }

  // Settings SET
  static SetSettingsDataAction(accessPointSettingsData: AccessPointSettingsData): AccessPointSettingsAction {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_SET_SETTINGS_DATA, accessPointSettingsData };
  }

  static SetSettingsDataStartedAction(): AccessPointSettingsAction {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_SET_SETTINGS_DATA_STARTED };
  }

  static SetSettingsDataSucceededAction(accessPointSettingsData: AccessPointSettingsData): AccessPointSettingsAction {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_SET_SETTINGS_DATA_SUCCEEDED, accessPointSettingsData};
  }

  static SetSettingsDataFaileddAction(error: String): any {
    return {type: AccessPointServiceActionCreator.ACCESSPOINT_SET_SETTINGS_DATA_FAILED, error};
  }
}

export class AccessPointSettingsAction implements Action<string> {
  type: string;
  accessPointSettingsData?: AccessPointSettingsData;
  accessPointSettingsViewModel?: AccessPointSettingsViewModel;
}

export class AccessPointStatusAction implements Action<string> {
  type: string;
  accessPointStatusData?: AccessPointStatusData;
  accessPointStatusViewModel?: AccessPointStatusViewModel;
}
