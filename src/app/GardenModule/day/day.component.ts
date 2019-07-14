import { Day, Hour } from '../state/state';
import { DayActionCreator } from './DayActionCreator';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HourData, DayData } from '../state/models';
import { TimePatternActionCreator } from '../time-pattern/TimePatternActionCreator';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DayComponent implements OnInit {

  @Input() readonly day: Day;
  @Input() readonly programId: number;

  constructor(private _ngRedux: NgRedux<AppState>) {
   }

  ngOnInit() {
  }

  listExpandedChanged($event) {
   if (!($event === this.day.dayViewModel.isExpanded)) {
      this._ngRedux.dispatch(DayActionCreator.ChangeDayIsExpandedAction($event, this.programId, this.day.dayData.id));
   }
  }

  getKey(_, hour: Hour) {
    return hour.hourData.id;
  }

  deleteDay(): void {
    this._ngRedux.dispatch(TimePatternActionCreator.TimePatternDeleteDayAction(this.day, this.programId));
  }

  addNewHour(): void {
    const newHour = new Hour(new HourData(this.getTemporaryHourId()));
    this._ngRedux.dispatch(DayActionCreator.DayAddHourAction(newHour, this.programId, this.day.dayData.id));
  }

  private getTemporaryHourId(): number {// its temporary cause the server will decide its value at the end
    let maxHourId = -1;
    this.day.hours.forEach((hour) => {
      if (hour.hourData.id > maxHourId) {
        maxHourId = hour.hourData.id;
      }
      });
    return maxHourId + 1;
  }
}
