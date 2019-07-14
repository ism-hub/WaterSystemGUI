import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs/Observable';
import { Station } from '../modles';

@Component({
  selector: 'app-station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.css']
})
export class StationComponent implements OnInit {

  station: Station;

  constructor(private _ngRedux: NgRedux<AppState>) {
    const station$: Observable<Station> = _ngRedux.select(state => state.station);
    station$.subscribe(next => {
      this.station = next;
    });
  }

  ngOnInit() {
  }

}
