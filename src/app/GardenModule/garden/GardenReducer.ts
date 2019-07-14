import { plantsReducer } from '../plant/PlantReducer';
import { simpleProgramsReducer } from '../simple-program/SimpleProgramReducer';
import { Garden } from '../state/state';
import { GardenActionCreator } from './GardenActions';
import { Reducer } from 'redux';
import { sprinklersReducer } from '../sprinkler/SprinklerActionReducer';
import { GardenServerActionCreator } from '../api/GardenServiceActionCreator';
import { GardenServiceModel } from '../state/serviceModels';


export const gardenReducer: Reducer<Garden> = (state = new Garden, action: any): Garden => {
  let retState: Garden = state;
  switch (action.type) {
    case GardenActionCreator.GARDEN_CHANGE_NAME: {
      // console.log('GardenActionCreator.GARDEN_CHANGE_NAME');
      // console.log(state.setIn(['gardenData', 'name'], action['name']));
      retState = retState.setIn(['gardenData', 'name'], action['name']);
    } break;
    case GardenActionCreator.GARDEN_CHANGE_ISEXPAND: retState =  retState.setIn(['gardenViewModel', 'isExpanded'], action['value']); break;
    case GardenActionCreator.GARDEN_CHANGE_IS_PLANTS_LIST_EXPANDED:
            retState =  retState.setIn(['gardenViewModel', 'isPlantsListExpanded'], action['value']); break;
    case GardenActionCreator.GARDEN_CHANGE_IS_SIMPLE_PROGRAMS_LIST_EXPANDED:
            retState =  retState.setIn(['gardenViewModel', 'isSimpleProgramssListExpanded'], action['value']); break;
    case GardenActionCreator.GARDEN_CHANGE_IS_SPRINKLER_LIST_EXPANDED:
            retState =  retState.setIn(['gardenViewModel', 'isSprinklersListExpanded'], action['value']); break;
    case GardenServerActionCreator.LOAD_GARDEN_SUCCEEDED: retState = action['garden']; break;
  }

  const plants = plantsReducer(retState.plants, action);
  if (!(plants === retState.plants)) {
    retState =  retState.set('plants', plants);
  }

  const simplePrograms = simpleProgramsReducer(retState.simplePrograms, action);
  retState =  retState.set('simplePrograms', simplePrograms);

  const sprinklers = sprinklersReducer(retState.sprinklers, action);
  retState =  retState.set('sprinklers', sprinklers);

  retState =  retState.set('gardenServiceModel', gardenServiceModelReducer(retState.gardenServiceModel, action));

  return retState;
};

export const gardenServiceModelReducer:
        Reducer<GardenServiceModel> = (state = new GardenServiceModel, action: any): GardenServiceModel => {
  let retState: GardenServiceModel = state;
  switch (action.type) {
    case GardenServerActionCreator.LOAD_GARDEN: retState = retState.set('error', ''); break;
    case GardenServerActionCreator.LOAD_GARDEN_STARTED: retState = retState.set('isLoading', true); break;
    case GardenServerActionCreator.LOAD_GARDEN_FAILED: retState = retState.set('isLoading', false).set('error', action['error']); break;
    case GardenServerActionCreator.LOAD_GARDEN_SUCCEEDED: retState = retState.set('isLoading', false); break;
  }
  return retState;
};
