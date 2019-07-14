import { GardenData, PlantData, SprinklerData, SimpleProgramData, HourData, DayData, TimePatternData } from './models';
// tslint:disable-next-line:max-line-length
import { SprinkleViewModel, PlantViewModel, GardenViewModel, SimpleProgramViewModel, TimePatternViewModel, DayViewModel, HourViewModel } from './viewModels';
// import { routerReducer } from '@angular-redux/router';
import { Record, List } from 'immutable';
import { GardenServiceModel } from './serviceModels';

// Definition of our tree

export class Sprinkler extends Record({sprinklerData: new SprinklerData, sprinklerViewModel: new SprinkleViewModel}) {
  constructor(sprinklerData?: SprinklerData, sprinklerViewModel?: SprinkleViewModel) {
    super({sprinklerData, sprinklerViewModel});
  }
}

export class TimePattern extends Record({days: List<Day>(), timePatternViewModel: new TimePatternViewModel }) {
  constructor(days?: List<Day>, timePatternViewModel?: TimePatternViewModel) {
    super({ days, timePatternViewModel});
  }
}

// tslint:disable-next-line:max-line-length
export class SimpleProgram extends Record({simpleProgramData: new SimpleProgramData, timePattern: new TimePattern, simpleProgramViewModel: new SimpleProgramViewModel}) {
  constructor(simpleProgramData?: SimpleProgramData, timePattern?: TimePattern, simpleProgramViewModel?: SimpleProgramViewModel) {
    super({simpleProgramData, timePattern, simpleProgramViewModel});
  }
}

export class Plant extends Record({plantData: new PlantData, sprinkler: null, simpleProgram: null, plantViewModel: new PlantViewModel}) {
  constructor(plantData?: PlantData, sprinkler?: Sprinkler, simpleProgram?: SimpleProgram, plantViewModel?: PlantViewModel) {
    super({plantData, sprinkler, simpleProgram, plantViewModel});
  }
}

export class Hour extends Record({hourData: new HourData, hourViewModel: new HourViewModel}) {
  constructor(hourData?: HourData, hourViewModel?: HourViewModel) {
    super({hourData, hourViewModel});
  }
}

export class Day extends Record({dayData: new DayData, hours: List<Hour>(), dayViewModel: new DayViewModel }) {
  constructor(dayData?: DayData, hours?: List<Hour>, dayViewModel?: DayViewModel) {
    super({dayData, hours, dayViewModel});
  }
}

// tslint:disable-next-line:max-line-length
export class Garden extends Record({gardenData: new GardenData, plants: List<Plant>(), simplePrograms: List<SimpleProgram>(), sprinklers: List<Sprinkler>(), gardenViewModel: new GardenViewModel, gardenServiceModel: new GardenServiceModel}) {
  // tslint:disable-next-line:max-line-length
  constructor(gardenData?: GardenData, plants?: List<Plant>, simplePrograms?: List<SimpleProgram>, sprinklers?: List<Sprinkler>, gardenViewModel?: GardenViewModel, gardenServiceModel?: GardenServiceModel) {
    super({gardenData, plants, simplePrograms, sprinklers, gardenViewModel, gardenServiceModel});
  }
}
