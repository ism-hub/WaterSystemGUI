import { TimePattern, Day } from '../state/state';

import { TimePatternActionCreator } from './TimePatternActionCreator';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { DayData } from '../state/models';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-time-pattern',
  templateUrl: './time-pattern.component.html',
  styleUrls: ['./time-pattern.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimePatternComponent implements OnInit {

  @Input() readonly timePattern: TimePattern;
  @Input() readonly programId: number;

 // readonly isExpanded$: Observable<boolean> = this._ngRedux.select(state => state.garden.simplePrograms.get(
 // tslint:disable-next-line:max-line-length
 // state.garden.simplePrograms.findIndex((program) => program.simpleProgramData.id === this.programId)).timePattern.timePatternViewModel.isExpanded);

 // isExpandedLastValue: boolean;

  constructor(private _ngRedux: NgRedux<AppState>) {
   }

  ngOnInit() {
  //  this.isExpanded$.subscribe(value => this.isExpandedLastValue = value);
  }

  listExpandedChanged($event) {
   if ($event !== this.timePattern.timePatternViewModel.isExpanded)
      this._ngRedux.dispatch(TimePatternActionCreator.ChangeIsExpandedAction($event, this.programId));
  }

  getKey(_, day: Day) {
    return day.dayData.id;
  }

  addNewDay(): void {
    const newDayPattern = new Day(new DayData(this.getTemporaryDayId()));
    this._ngRedux.dispatch(TimePatternActionCreator.TimePatternAddDayAction(newDayPattern , this.programId));
  }

  private getTemporaryDayId(): number {// its temporary cause the server will decide its value at the end
    let maxDayId = -1;
    this.timePattern.days.forEach((day) => {
      if (day.dayData.id > maxDayId)
      maxDayId = day.dayData.id;
      });
    return maxDayId + 1;
  }

}
