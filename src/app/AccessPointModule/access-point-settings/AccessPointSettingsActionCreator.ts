import { AccessPointSettingsData, AccessPointSettingsViewModel } from '../models';
import { AccessPointSettingsAction } from '../access-point/api/AccessPointServiceActionCreator';

export class AccessPointSettingsActionCreator {
  static readonly ACCESSPOINTSETTINGS_DATA_UPDATE = 'ACCESSPOINTSETTINGS_DATA_UPDATE';
  static readonly ACCESSPOINTSETTINGS_VIEWMODEL_UPDATE = 'ACCESSPOINTSETTINGS_VIEWMODEL_UPDATE';

  static UpdateSettingsData(accessPointSettingsData: AccessPointSettingsData): AccessPointSettingsAction {
    return {type: AccessPointSettingsActionCreator.ACCESSPOINTSETTINGS_DATA_UPDATE, accessPointSettingsData};
  }

  static UpdateSettingsView(accessPointSettingsViewModel: AccessPointSettingsViewModel): AccessPointSettingsAction {
    return {type: AccessPointSettingsActionCreator.ACCESSPOINTSETTINGS_VIEWMODEL_UPDATE, accessPointSettingsViewModel};
  }

}
