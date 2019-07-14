// import { AnyAction } from 'redux';
import { ServerGarden } from './ServerGardenModel';
import { Garden } from '../state/state';

export class GardenServerActionCreator {
  static readonly LOAD_GARDEN = 'LOAD_GARDEN';
  static readonly LOAD_GARDEN_STARTED = 'LOAD_GARDEN_STARTED';
  static readonly LOAD_GARDEN_SUCCEEDED = 'LOAD_GARDEN_SUCCEEDED';
  static readonly LOAD_GARDEN_FAILED = 'LOAD_GARDEN_FAILED';

  static readonly SAVE_GARDEN = 'SAVE_GARDEN';
  static readonly SAVE_GARDEN_STARTED = 'SAVE_GARDEN_STARTED';
  static readonly SAVE_GARDEN_SUCCEEDED = 'SAVE_GARDEN_SUCCEEDED';
  static readonly SAVE_GARDEN_FAILED = 'SAVE_GARDEN_FAILED';

  // --------------------------- Load
  static LoadGardenAction(): any {
    return {type: GardenServerActionCreator.LOAD_GARDEN };
  }

  static LoadGardenStartedAction(): any {
    return {type: GardenServerActionCreator.LOAD_GARDEN_STARTED };
  }

  static LoadGardenSucceededAction(garden: Garden): any {
    return {type: GardenServerActionCreator.LOAD_GARDEN_SUCCEEDED, garden};
  }

  static LoadGardenFaileddAction(error: String): any {
    return {type: GardenServerActionCreator.LOAD_GARDEN_FAILED, error};
  }

// ----------------------------- Save
  static SaveGardenAction(garden: Garden): any {
    return {type: GardenServerActionCreator.SAVE_GARDEN, garden};
  }

  static SaveGardenStartedAction(): any {
    return {type: GardenServerActionCreator.SAVE_GARDEN_STARTED };
  }

  static SaveGardenSucceededAction(): any {
    return {type: GardenServerActionCreator.SAVE_GARDEN_SUCCEEDED};
  }

  static SaveGardenFaileddAction(error: String): any {
    return {type: GardenServerActionCreator.SAVE_GARDEN_FAILED, error};
  }
}
