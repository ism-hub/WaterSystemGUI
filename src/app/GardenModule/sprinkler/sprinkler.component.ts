import { AppState } from '../../store/app.state';
import { Sprinkler } from '../state/state';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { SprinklerActionCreator } from './SprinklerActionCreator';
import { Status } from '../state/models';


@Component({
  selector: 'app-sprinkler',
  templateUrl: './sprinkler.component.html',
  styleUrls: ['./sprinkler.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SprinklerComponent implements OnInit {

  @Input() readonly sprinkler: Sprinkler;
  @Output() readonly  minusClick = new EventEmitter<Sprinkler>();

  constructor(private _ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  listExpandedChanged($event) {
  //  if ($event !== this.isExpanded)
  //    this._ngRedux.dispatch(GardenActionCreator.ChangeIsSprinklerListExpandAction($event));
  }

  onMinusClick(): void {
    this.minusClick.emit(this.sprinkler);
  }

  changeStatus($event): void {
    const status = +$event === 1 ? Status.On : Status.Off;
    if (status !== this.sprinkler.sprinklerData.status) {
      this._ngRedux.dispatch(SprinklerActionCreator.ChangeStatusAction(status, this.sprinkler.sprinklerData.id));
    }
  }

}
