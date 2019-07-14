import { Record } from 'immutable';

export class GardenServiceModel extends Record({isLoading: false, error: ''}) {
  constructor(isLoading?: boolean, error?: string) {
    super({isLoading, error});

  }
}
