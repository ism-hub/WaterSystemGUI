
// import { AnyAction } from 'redux';
import { Hour } from '../state/state';

export class DayActionCreator {
  static readonly DAY_CHANGE_IS_EXPANDED = 'DAY_CHANGE_IS_EXPANDED';
  static readonly DAY_CHANGE_IS_HOURS_LIST_EXPANDED = 'DAY_CHANGE_IS_HOURS_LIST_EXPANDED';
  static readonly DAY_ADD_HOUR = 'DAY_ADD_HOUR';
  static readonly DAY_DELETE_HOUR = 'DAY_DELETE_HOUR';

  static ChangeDayIsExpandedAction(value: boolean, progId: number, dayId: number): any { // id is programId
    return {type: DayActionCreator.DAY_CHANGE_IS_EXPANDED, value, progId, dayId};
  }

  static ChangeIsHoursListExpandedAction(value: boolean, progId: number, dayId: number): any {
    return {type: DayActionCreator.DAY_CHANGE_IS_HOURS_LIST_EXPANDED, value, progId, dayId};
  }

  static DayAddHourAction(value: Hour, progId: number, dayId: number): any {
    return {type: DayActionCreator.DAY_ADD_HOUR, value, progId, dayId};
  }

  static DayDeleteHourAction(value: Hour, progId: number, dayId: number): any {
    return {type: DayActionCreator.DAY_DELETE_HOUR, value, progId, dayId};
  }

}
