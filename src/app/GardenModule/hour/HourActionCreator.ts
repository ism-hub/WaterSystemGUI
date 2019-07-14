
// import { AnyAction } from 'redux';
import { Hour } from '../state/state';

export class HourActionCreator {
  static readonly HOUR_CHANGE_HOUR = 'HOUR_CHANGE_HOUR';

  static HourChangHourAction(value: {min: number, hour: number, duration: number}, progId: number, dayId: number, hourId: number): any {
    return {type: HourActionCreator.HOUR_CHANGE_HOUR, value, progId, dayId, hourId};
  }
}
