
import { GardenData, PlantData, SprinklerData } from './models';
import { Record, List } from 'immutable';

// const sprVM: SprinkleViewModel = new SprinkleViewModel({isLoading: true});

export class ViewModel extends Record({isExpanded: false, isLoading: false}) {

}

export class SprinkleViewModel extends ViewModel {

}

export class PlantViewModel extends ViewModel {

}

// tslint:disable-next-line:max-line-length
export class GardenViewModel extends Record({isPlantsListExpanded: false, isSimpleProgramssListExpanded: false, isSprinklersListExpanded: false, isExpanded: false, isLoading: false}) {

}

export class SimpleProgramViewModel extends ViewModel {

}

// tslint:disable-next-line:max-line-length
export class TimePatternViewModel extends Record({isDaysListExpanded: false, isSimpleProgramssListExpanded: false, isExpanded: false, isLoading: false}) {

}

export class DayViewModel extends Record({isHoursListExpanded: false, isExpanded: false, isLoading: false}) {

}

export class HourViewModel extends ViewModel {

}

