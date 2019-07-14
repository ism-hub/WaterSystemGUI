

import { daysReducer } from '../day/DayReducer';
import { TimePattern, Day } from '../state/state';
import { TimePatternActionCreator } from './TimePatternActionCreator';
import { List } from 'immutable';
import { Reducer } from 'redux';


/*export const plantReducer: Reducer<Plant> = (state = new Plant, action: AnyAction): Plant => {
  switch (action.type) {
    case PlantActionCreator.PLANT_CHANGE_NAME: {
      // console.log('GardenActionCreator.GARDEN_CHANGE_NAME');
      // console.log(state.setIn(['gardenData', 'name'], action['name']));
      return state.setIn(['gardenData', 'name'], action['name']);
    }
  }
  return state;
};*/

export const timePatternReducer: Reducer<TimePattern> = (state = new TimePattern, action: any): TimePattern => {
  let retState = state;
    switch (action.type) {
      case TimePatternActionCreator.TIME_PATTERN_CHANGE_IS_EXPANDED: {
        retState = retState.setIn(['timePatternViewModel', 'isExpanded'], action['value']);
      } break;
      // tslint:disable-next-line:max-line-length
      case TimePatternActionCreator.TIME_PATTERN_CHANGE_IS_DAYS_EXPANDED: retState = retState.setIn(['timePatternViewModel', 'isDaysListExpanded'], action['value']); break;
      case TimePatternActionCreator.TIME_PATTERN_ADD_DAY: {
        retState = retState.set('days', retState.days.push(action.value));
      }break;
      case TimePatternActionCreator.TIME_PATTERN_DELETE_DAY: {
        retState = retState.set('days', retState.days.filter(function(day) { return day.dayData.id !== action.value.dayData.id; }));
      }break;
    }

  const days: List<Day> = daysReducer(state.days, action);
  if (days !== state.days)
    retState = retState.set('days', days);

  return retState;
};

