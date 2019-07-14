

import { AccessPointStatusData, AccessPointStatusViewModel } from '../models';

export class AccessPointStatusActionCreator {
  static readonly ACCESSPOINTSTATUS_DATA_UPDATE = 'ACCESSPOINTSTATUS_DATA_UPDATE';
  static readonly ACCESSPOINTSTATUS_VIEW_UPDATE = 'ACCESSPOINTSTATUS_VIEW_UPDATE';

  static StatusDataUpdateAction(accessPointStatusData: AccessPointStatusData): any {
    return {type: AccessPointStatusActionCreator.ACCESSPOINTSTATUS_DATA_UPDATE, accessPointStatusData};
  }

  static StatusViewUpdateAction(accessPointStatusViewModel: AccessPointStatusViewModel): any {
    return {type: AccessPointStatusActionCreator.ACCESSPOINTSTATUS_VIEW_UPDATE, accessPointStatusViewModel};
  }
}
