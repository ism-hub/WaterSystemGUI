import { Hour } from '../state/state';
import { AppState } from '../../store/app.state';
import { NgRedux, dispatch } from '@angular-redux/store';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HourActionCreator } from './HourActionCreator';
import { HourData } from '../state/models';
import { DayActionCreator } from '../day/DayActionCreator';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HourComponent implements OnInit {

  @Input() readonly hour: Hour;
  @Input() readonly programId: number;
  @Input() readonly dayId: number;


  constructor(private _ngRedux: NgRedux<AppState>) {
   }

  ngOnInit() {
  }

  changeHour($event: string, whatChanged: string): void {
    let min = this.hour.hourData.min;
    let hour = this.hour.hourData.hour;
    let duration = this.hour.hourData.duration;
    if (whatChanged === 'min') {
      min = +$event;
    } else if (whatChanged === 'hour') {
      hour = +$event;
    } else if (whatChanged === 'duration') {
      duration = +$event;
    }
    if (min === this.hour.hourData.min && hour === this.hour.hourData.hour && duration === this.hour.hourData.duration) {
      return;
    }
    this._ngRedux.dispatch(HourActionCreator.HourChangHourAction({min, hour, duration}, this.programId, this.dayId, this.hour.hourData.id));
  }

  deleteHour(): void {
    this._ngRedux.dispatch(DayActionCreator.DayDeleteHourAction(this.hour, this.programId, this.dayId));
  }

}
