

import { Record, List } from 'immutable';

export enum Status {Off, On}

export class SprinklerData extends Record({id: -1, status: Status.Off}) {
  constructor(id?: number, status?: Status) {
    super({id, status});

  }
}

export class PlantData extends Record({id: -1, name: 'not-set'}) {
  constructor(id?: number, name?: string) {
    super({id, name});

  }
}

export class SimpleProgramData extends Record({id: -1, name: 'not-set' }) {
   constructor(id?: number, name?: string) {
    super({id, name});

  }
}

export class GardenData extends Record({name: 'not-set'}) {
   constructor(name?: string) {
    super({name});

  }
}

export class DayData extends Record({id: -1}) {
   constructor(id?: number) {
    super({id});
  }
}

export class TimePatternData extends Record({id: -1}) {
  constructor(id?: number) {
   super({id});
 }
}

export class HourData extends Record({id: -1, hour: -1, min: -1, duration: -1}) {
   constructor(id?: number, hour?: number, min?: number, duration?: number) {
    super({id, hour, min, duration});
  }
}


