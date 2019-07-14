// import { AnyAction } from 'redux';
import { SimpleProgram, Sprinkler } from '../state/state';

export class PlantActionCreator {
  static readonly PLANT_CHANGE_NAME = 'PLANT_CHANGE_NAME';
  static readonly PLANT_REMOVE_PROGRAM = 'PLANT_REMOVE_PROGRAM';
  static readonly PLANT_REMOVE_SPRINKLER = 'PLANT_REMOVE_SPRINKLER';
  static readonly PLANT_ADD_PROGRAM = 'PLANT_ADD_PROGRAM';
  static readonly PLANT_ADD_SPRINKLER = 'PLANT_ADD_SPRINKLER';

  static ChangeNameAction(name: string, id: number): any {
    return {type: PlantActionCreator.PLANT_CHANGE_NAME, name, id};
  }

  static RemoveProgramFromPlantAction(value: SimpleProgram, id: number): any {
    return {type: PlantActionCreator.PLANT_REMOVE_PROGRAM, value, id};
  }

  static RemoveSprinklerFromPlantAction(value: Sprinkler, id: number): any {
    return {type: PlantActionCreator.PLANT_REMOVE_SPRINKLER, value, id};
  }

  static AddProgramFromPlantAction(value: SimpleProgram, id: number): any {
    return {type: PlantActionCreator.PLANT_ADD_PROGRAM, value, id};
  }

  static AddSprinklerFromPlantAction(value: Sprinkler, id: number): any {
    return {type: PlantActionCreator.PLANT_ADD_SPRINKLER, value, id};
  }
}
