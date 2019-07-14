import { simpleProgramReducer } from '../simple-program/SimpleProgramReducer';
import { Plant } from '../state/state';
import { PlantActionCreator } from './PlantActionCreator';
import { List } from 'immutable';
import { Reducer } from 'redux';
import { GardenActionCreator } from '../garden/GardenActions';
import { sprinklerReducer } from '../sprinkler/SprinklerActionReducer';


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

/*export const plantsReducer: Reducer<List<Plant>> = (state = List<Plant>(), action: AnyAction): List<Plant> => {
  switch (action.type) {
    case PlantActionCreator.PLANT_CHANGE_NAME: {
      // console.log('GardenActionCreator.GARDEN_CHANGE_NAME');
      // console.log(state.setIn(['gardenData', 'name'], action['name']));
      const plants = state.update(state.findIndex((plant) => plant.plantData.id === action['id']),
        (oldPlant) => oldPlant.setIn(['plantData', 'name'], action['name']));
      return plants;
    }
  }
  return state;
};*/


export const plantReducer: Reducer<Plant> = (state = new Plant, action: any): Plant => {
  let retState: Plant = state;
  if (state.plantData.id === action['id']) {
    switch (action.type) {
      case PlantActionCreator.PLANT_CHANGE_NAME: {
        retState = retState.setIn(['plantData', 'name'], action['name']);
      } break;
      case PlantActionCreator.PLANT_REMOVE_PROGRAM: {
        retState = retState.set('simpleProgram', null);
      }break;
      case PlantActionCreator.PLANT_REMOVE_SPRINKLER: {
        retState = retState.set('sprinkler', null);
      }break;
      case PlantActionCreator.PLANT_ADD_PROGRAM: {
        retState = retState.set('simpleProgram', action.value);
      }break;
      case PlantActionCreator.PLANT_ADD_SPRINKLER: {
        retState = retState.set('sprinkler', action.value);
      }break;
    }
  }
  const program = simpleProgramReducer(retState.simpleProgram, action);
  if (program !== retState.simpleProgram) {
    retState = retState.set('simpleProgram', program);
  }

  const sprinkler = sprinklerReducer(retState.sprinkler, action); // ###############
  retState = retState.set('sprinkler', sprinkler);

  return retState;
};

export const plantsReducer: Reducer<List<Plant>> = (state = List<Plant>(), action: any): List<Plant> => {
  let plants = state;
  if (state.size !== 0) {
     plants = state.update(state.findIndex((plant) => plantReducer(plant, action) !== plant),
        (oldPlant) => plantReducer(oldPlant, action));
  }

    switch (action.type) {
      case GardenActionCreator.GARDEN_ADD_PLANT: {
        plants = plants.push(action.value);
         break;
      }
      case GardenActionCreator.GARDEN_DELETE_PLANT: {
        plants = plants.filter(function(plant) { return plant.plantData.id !== action.value; });
         break;
      }
   }

  return plants;
};
