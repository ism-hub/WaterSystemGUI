
import { Day } from '../state/state';
import { DayActionCreator } from './DayActionCreator';
import { List } from 'immutable';
import { Reducer } from 'redux';
import { TimePatternActionCreator } from '../time-pattern/TimePatternActionCreator';
import { hoursReducer } from '../hour/HourReducer';


export const dayReducer: Reducer<Day> = (state = new Day, action: any): Day => {
  let retState = state;
  if (state.dayData.id === action['dayId']) {
    switch (action.type) {
      case DayActionCreator.DAY_CHANGE_IS_EXPANDED: retState = retState.setIn(['dayViewModel', 'isExpanded'], action['value']); break;
      // tslint:disable-next-line:max-line-length
      case DayActionCreator.DAY_CHANGE_IS_HOURS_LIST_EXPANDED: retState = retState.setIn(['dayViewModel', 'isHoursListExpanded'], action['value']); break;
      case DayActionCreator.DAY_ADD_HOUR: {
        retState = retState.set('hours', retState.hours.push(action.value));
      }break;
      case DayActionCreator.DAY_DELETE_HOUR: {
        retState = retState.set('hours', retState.hours.filter(function(hour) { return hour.hourData.id !== action.value.hourData.id; }));
      }break;
    }

    const hours = hoursReducer(retState.hours, action);
    retState = retState.set('hours', hours);
  }
  return retState;
};

export const daysReducer: Reducer<List<Day>> = (state = List<Day>(), action: any): List<Day> => {
  let retState = state;
  if (state.size > 0) {
    retState = retState.update(state.findIndex((day) => dayReducer(day, action) !== day),
        (oldDay) => dayReducer(oldDay, action));
  }
  return retState;
};
