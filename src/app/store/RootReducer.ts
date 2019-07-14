
import { gardenReducer } from '../GardenModule/garden/GardenReducer';

import { Garden } from '../GardenModule/state/state';
import { AppState } from './app.state';
import { combineReducers, Reducer } from 'redux';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { routerReducer } from '@angular-redux/router';
import { AccessPoint } from '../AccessPointModule/models';
import { accessPointReducer } from '../AccessPointModule/access-point/AccessPointReducer';

// import { createAnimalAPIReducer } from '../animals/api/reducer';
// import { ANIMAL_TYPES } from '../animals/model';
import { Station } from '../StationModule/modles';
import { stationReducer } from '../StationModule/station/StationReducer';

const rootReducer2: Reducer<AppState> = (state = new AppState, action: any): AppState => {
  const garden: Garden = gardenReducer(state.garden, action);
  const router: string = routerReducer(state.router, action);
  const accessPoint: AccessPoint =  accessPointReducer(state.accessPoint, action);
  const station: Station =  stationReducer(state.station, action);
  let retState = state;
  retState = retState.set('garden', garden);
  retState = retState.set('router', router);
  retState = retState.set('accessPoint', accessPoint);
  retState = retState.set('station', station);
  return retState;
};

// export const rootReducer = rootReducer2;

export const rootReducer = composeReducers(
   defaultFormReducer(),
   rootReducer2
  );


// Define the global store shape by combining our application's
// reducers together into a given structure.
// export const rootReducer = composeReducers(
//  defaultFormReducer(),
//   combineReducers({
//    garden: gardenReducer,
//    router: routerReducer,
//  })
//  rootReducer2
// );


