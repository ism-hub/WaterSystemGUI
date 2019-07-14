
import { Hour } from '../state/state';
import { List } from 'immutable';
import { Reducer } from 'redux';
import { TimePatternActionCreator } from '../time-pattern/TimePatternActionCreator';
import { HourActionCreator } from './HourActionCreator';


export const hourReducer: Reducer<Hour> = (state = new Hour, action: any): Hour => {
  let retState = state;
  if (state.hourData.id === action['hourId']) {
    switch (action.type) {
      case HourActionCreator.HOUR_CHANGE_HOUR: {
        retState = retState.set('hourData', retState.hourData.set('min', action.value['min']).set('hour', action.value['hour'])
        .set('duration', action.value['duration'])); break;
      }
    }
  }
  return retState;
};

export const hoursReducer: Reducer<List<Hour>> = (state = List<Hour>(), action: any): List<Hour> => {
  let retState = state;
  if (state.size > 0) {
    retState = retState.update(state.findIndex((hour) => hourReducer(hour, action) !== hour),
        (oldHour) => hourReducer(oldHour, action));
  }
  return retState;
};
