// import { AnyAction } from 'redux';
import { Status } from '../state/models';

export class SprinklerActionCreator {
  static readonly SPRINKLER_CHANGE_STATUS = 'SPRINKLER_CHANGE_STATUS';

  static ChangeStatusAction(value: Status, id: number): any {
    return {type: SprinklerActionCreator.SPRINKLER_CHANGE_STATUS, value, id};
  }
}
