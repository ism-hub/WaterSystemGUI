import { Garden } from '../GardenModule/state/state';
import { Record } from 'immutable';
import { AccessPoint } from '../AccessPointModule/models';
import { Station } from '../StationModule/modles';


// The entire app state
export class AppState extends Record({garden: new Garden, accessPoint: new AccessPoint, station: new Station, router: ''}) {
   constructor(garden?: Garden, accessPoint?: AccessPoint, station?: Station, router?: string) {
    super({garden, accessPoint, station, router});
  }
}
