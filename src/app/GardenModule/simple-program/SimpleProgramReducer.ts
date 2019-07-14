import { SimpleProgram } from '../state/state';
import { timePatternReducer } from '../time-pattern/TimePatternReducer';
import { SimpleProgramActionCreator } from './SimpleProgramActionCreator';
import { List } from 'immutable';
import { Reducer } from 'redux';
import { GardenActionCreator } from '../garden/GardenActions';


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

export const simpleProgramReducer: Reducer<SimpleProgram> = (state = new SimpleProgram, action: any): SimpleProgram => {
  if (state === null) {
    return state;
  }
  let retState =  state;
  if (state.simpleProgramData.id === action['id']) {
    switch (action.type) {
    case SimpleProgramActionCreator.SIMPLE_PROGRAM_CHANGE_NAME: {
      retState = retState.setIn(['simpleProgramData', 'name'], action['name']);
    } break;
    case SimpleProgramActionCreator.SIMPLE_PROGRAM_CHANGE_IS_EXPANDED: {
      retState = retState.setIn(['simpleProgramViewModel', 'isExpanded'], action['value']);
    }
   }
  }

  if (retState.simpleProgramData.id === action['progId']) {
    const timePattern = timePatternReducer(retState.timePattern, action);
    retState = retState.set('timePattern', timePattern);
  }

  return retState;
};

export const simpleProgramsReducer: Reducer<List<SimpleProgram>> = (state = List<SimpleProgram>(), action: any): List<SimpleProgram> => {
  let retState = state;
  if (retState.size > 0) {
    retState = retState.update(state.findIndex((program) => simpleProgramReducer(program, action) !== program),
        (oldProgram) => simpleProgramReducer(oldProgram, action));
  }

  switch (action.type) {
    case GardenActionCreator.GARDEN_ADD_PROGRAM: {
      retState = retState.push(action.value);
       break;
    }
    case GardenActionCreator.GARDEN_DELETE_PROGRAM: {
      retState = retState.filter(function(program) { return program.simpleProgramData.id !== action.value.simpleProgramData.id; });
       break;
    }
 }

  return retState;
};
