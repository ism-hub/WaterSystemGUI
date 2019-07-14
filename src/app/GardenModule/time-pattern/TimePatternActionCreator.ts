
// import { AnyAction } from 'redux';
import { Day } from '../state/state';

export class TimePatternActionCreator {
  static readonly TIME_PATTERN_CHANGE_IS_EXPANDED = 'TIME_PATTERN_CHANGE_IS_EXPANDED';
  static readonly TIME_PATTERN_CHANGE_IS_DAYS_EXPANDED = 'TIME_PATTERN_CHANGE_IS_DAYS_EXPANDED';
  static readonly TIME_PATTERN_ADD_DAY = 'TIME_PATTERN_ADD_DAY';
  static readonly TIME_PATTERN_DELETE_DAY = 'TIME_PATTERN_DELETE_DAY';

  static ChangeIsExpandedAction(value: boolean, id: number): any {
    return {type: TimePatternActionCreator.TIME_PATTERN_CHANGE_IS_EXPANDED, value, id};
  }

  static ChangeIsDaysListExpandAction(value: boolean, id: number): any {
    return {type: TimePatternActionCreator.TIME_PATTERN_CHANGE_IS_DAYS_EXPANDED, value, id};
  }

  static TimePatternAddDayAction(value: Day, progId: number): any {
    return {type: TimePatternActionCreator.TIME_PATTERN_ADD_DAY, value, progId};
  }

  static TimePatternDeleteDayAction(value: Day, progId: number): any {
    return {type: TimePatternActionCreator.TIME_PATTERN_DELETE_DAY, value, progId};
  }

}
