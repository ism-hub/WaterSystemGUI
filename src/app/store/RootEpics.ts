import { Injectable } from '@angular/core';

// import { ANIMAL_TYPES } from '../animals/model';
// import { AnimalAPIEpics } from '../animals/api/epics';
import { GardenServiceEpics } from '../GardenModule/api/GardenSeviceEpics';
import { createLogger } from 'redux-logger';
import { combineEpics } from 'redux-observable';
import { AccessPointServiceEpics } from '../AccessPointModule/access-point/api/AccessPointServiceEpics';
import { StationServiceEpics } from '../StationModule/station/api/StationServiceEpics';

@Injectable()
export class RootEpics {
   constructor(private gardenEpic: GardenServiceEpics, private accessPointServiceEpics: AccessPointServiceEpics,
     private stationServiceEpics: StationServiceEpics) {}

  public createEpics() {
      return combineEpics(this.gardenEpic.createEpic(), this.accessPointServiceEpics.createEpic(), this.stationServiceEpics.createEpic());
  }
}
