import { Sprinkler } from '../state/state';
import { List } from 'immutable';
import { Reducer } from 'redux';
import { GardenActionCreator } from '../garden/GardenActions';
import { SprinklerActionCreator } from './SprinklerActionCreator';

export const sprinklerReducer: Reducer<Sprinkler> = (state = new Sprinkler, action: any): Sprinkler => {
  if (state === null) {
    return state;
  }
  let retState =  state;
  if (state.sprinklerData.id === action['id']) {
    switch (action.type) {
      case SprinklerActionCreator.SPRINKLER_CHANGE_STATUS: {
        retState = retState.set('sprinklerData', retState.sprinklerData.set('status', action.value));
      } break;
   }
  }
  return retState;
};

export const sprinklersReducer: Reducer<List<Sprinkler>> = (state = List<Sprinkler>(), action: any): List<Sprinkler> => {
  let retState = state;
  if (retState.size > 0) {
    retState = retState.update(retState.findIndex((sprinkler) => sprinklerReducer(sprinkler, action) !== sprinkler),
        (oldSprinkler) => sprinklerReducer(oldSprinkler, action));
  }

  switch (action.type) {
    case GardenActionCreator.GARDEN_ADD_SPRINKLER: {
      retState = retState.push(action.value);
       break;
    }
    case GardenActionCreator.GARDEN_DELETE_SPRINKLER: {
      retState = retState.filter(function(sprinkler) { return sprinkler.sprinklerData.id !== action.value.sprinklerData.id; });
       break;
    }
 }

  return retState;
};
