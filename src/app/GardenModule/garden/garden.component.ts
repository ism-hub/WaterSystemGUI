import { Garden } from '../state/state';
import { GardenActionCreator } from './GardenActions';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { dispatch, select, select$, WithSubStore, NgRedux } from '@angular-redux/store';
// import { List } from 'immutable';
// import { Observable } from 'rxjs/Observable';
import { GardenServerActionCreator } from '../api/GardenServiceActionCreator';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class GardenComponent implements OnInit {
  garden$: Observable<Garden>;
  garden: Garden;

  constructor(private _ngRedux: NgRedux<AppState>) {
    this.garden$ = _ngRedux.select(state => state.garden);
    this.garden$.subscribe(next => {
      this.garden = next;
    });
  }

  ngOnInit() {
  }

  changeName(name: string): void {
    this._ngRedux.dispatch(GardenActionCreator.ChangeNameAction(name));
  }

  listExpandedChanged($event) {
    if ($event !== this.garden.gardenViewModel.isExpanded) {
      this._ngRedux.dispatch(GardenActionCreator.ChangeIsExpandAction($event));
    }
  }

  refreshGarden() {
    this._ngRedux.dispatch(GardenServerActionCreator.LoadGardenAction());
  }

  saveGarden() {
    this._ngRedux.dispatch(GardenServerActionCreator.SaveGardenAction(this.garden));
  }
}

