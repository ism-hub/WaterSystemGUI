// import { AnyAction } from 'redux';

export class SimpleProgramActionCreator {
  static readonly SIMPLE_PROGRAM_CHANGE_NAME = 'SIMPLE_PROGRAM_CHANGE_NAME';
  static readonly SIMPLE_PROGRAM_CHANGE_IS_EXPANDED = 'SIMPLE_PROGRAM_CHANGE_IS_EXPANDED';

  static ChangeNameAction(name: string, id: number): any {
    return {type: SimpleProgramActionCreator.SIMPLE_PROGRAM_CHANGE_NAME, name, id};
  }

  static ChangeIsExpandedAction(value: boolean, id: number): any {
    return {type: SimpleProgramActionCreator.SIMPLE_PROGRAM_CHANGE_IS_EXPANDED, value, id};
  }

}
