import { Action } from 'redux';
import { Plant, SimpleProgram, Sprinkler } from '../state/state';


export class GardenActionCreator {
  static readonly GARDEN_CHANGE_NAME = 'GARDEN_CHANGE_NAME';
  static readonly GARDEN_CHANGE_ISEXPAND = 'GARDEN_CHANGE_ISEXPAND';
  static readonly GARDEN_CHANGE_IS_PLANTS_LIST_EXPANDED = 'GARDEN_CHANGE_IS_PLANTS_LIST_EXPANDED';
  static readonly GARDEN_CHANGE_IS_SIMPLE_PROGRAMS_LIST_EXPANDED = 'GARDEN_CHANGE_IS_SIMPLE_PROGRAMS_LIST_EXPANDED';
  static readonly GARDEN_CHANGE_IS_SPRINKLER_LIST_EXPANDED = 'GARDEN_CHANGE_IS_SPRINKLER_LIST_EXPANDED';
  static readonly GARDEN_ADD_PLANT = 'GARDEN_ADD_PLANT';
  static readonly GARDEN_DELETE_PLANT = 'GARDEN_DELETE_PLANT';
  static readonly GARDEN_DELETE_PROGRAM = 'GARDEN_DELETE_PROGRAM';
  static readonly GARDEN_ADD_PROGRAM = 'GARDEN_ADD_PROGRAM';
  static readonly GARDEN_DELETE_SPRINKLER = 'GARDEN_DELETE_SPRINKLER';
  static readonly GARDEN_ADD_SPRINKLER = 'GARDEN_ADD_SPRINKLER';

  static ChangeNameAction(name: string): any {
    return {type: GardenActionCreator.GARDEN_CHANGE_NAME, name};
  }

  static ChangeIsExpandAction(value: boolean): any {
    return {type: GardenActionCreator.GARDEN_CHANGE_ISEXPAND, value};
  }

  static ChangeIsPlantsListExpandAction(value: boolean): any {
    return {type: GardenActionCreator.GARDEN_CHANGE_IS_PLANTS_LIST_EXPANDED, value};
  }

  static ChangeIsSimpleProgramsListExpandAction(value: boolean): any {
    return {type: GardenActionCreator.GARDEN_CHANGE_IS_SIMPLE_PROGRAMS_LIST_EXPANDED, value};
  }

  static ChangeIsSprinklerListExpandAction(value: boolean): any {
    return {type: GardenActionCreator.GARDEN_CHANGE_IS_SPRINKLER_LIST_EXPANDED, value};
  }

  static AddPlantAction(value: Plant): any {
    return {type: GardenActionCreator.GARDEN_ADD_PLANT, value};
  }

  static DeletePlantAction(value: number): any {
    return {type: GardenActionCreator.GARDEN_DELETE_PLANT, value};
  }

  static DeleteSimpleProgramsAction(value: SimpleProgram): any {
    return {type: GardenActionCreator.GARDEN_DELETE_PROGRAM, value};
  }

  static AddSimpleProgramsAction(value: SimpleProgram): any {
    return {type: GardenActionCreator.GARDEN_ADD_PROGRAM, value};
  }

  static DeleteSprinklerAction(value: Sprinkler): any {
    return {type: GardenActionCreator.GARDEN_DELETE_SPRINKLER, value};
  }

  static AddSprinklerAction(value: Sprinkler): any {
    return {type: GardenActionCreator.GARDEN_ADD_SPRINKLER, value};
  }
}
