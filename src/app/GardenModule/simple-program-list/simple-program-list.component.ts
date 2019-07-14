import { GardenActionCreator } from '../garden/GardenActions';
import { SimpleProgram } from '../state/state';
import { AppState } from '../../store/app.state';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { SimpleProgramData } from '../state/models';

@Component({
  selector: 'app-simple-program-list',
  templateUrl: './simple-program-list.component.html',
  styleUrls: ['./simple-program-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleProgramListComponent implements OnInit {

  @Input() programs: List<SimpleProgram>;

  readonly isExpanded$: Observable<boolean> = this._ngRedux.select(state => state.garden.gardenViewModel.isSimpleProgramssListExpanded);
  isExpandedLastValue: boolean;

  constructor(private _ngRedux: NgRedux<AppState>) {
    this.isExpanded$.subscribe(value => this.isExpandedLastValue = value);
   }

  ngOnInit() {
  }

  listExpandedChanged($event) {
    if ($event !== this.isExpandedLastValue) {
      this._ngRedux.dispatch(GardenActionCreator.ChangeIsSimpleProgramsListExpandAction($event));
    }
  }

  getProgram(index: number): SimpleProgram {
    return this.programs.get(index);
  }

  getKey(_, program: SimpleProgram) {
    return program.simpleProgramData.id;
  }

  deleteProgram($event: SimpleProgram): void {
    this._ngRedux.dispatch(GardenActionCreator.DeleteSimpleProgramsAction($event));
  }

  addNewProgram(): void {
    this._ngRedux.dispatch(
      GardenActionCreator.AddSimpleProgramsAction(new SimpleProgram(new SimpleProgramData(this.getTemporaryProgramId()))));
  }

  private getTemporaryProgramId(): number {// its temporary cause the server will decide its value at the end
    let maxId = -1;
    this.programs.forEach((program) => {
      if (program.simpleProgramData.id > maxId) {
        maxId = program.simpleProgramData.id;
      }
      });
    return maxId + 1;
  }

}
