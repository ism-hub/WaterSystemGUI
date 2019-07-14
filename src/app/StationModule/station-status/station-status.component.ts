import { Component, OnInit, Input } from '@angular/core';
import { StationStatus, Network } from '../modles';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../../store/app.state';
import { StationServiceActionCreator } from '../station/api/StationServiceActionCreator';

@Component({
  selector: 'app-station-status',
  templateUrl: './station-status.component.html',
  styleUrls: ['./station-status.component.css']
})
export class StationStatusComponent implements OnInit {

  @Input() stationStatus: StationStatus;

  constructor(private _ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  refreshStatus() {
    this._ngRedux.dispatch(StationServiceActionCreator.getStationStatusAction());
  }

  disconnectFromNetwork() {
    this._ngRedux.dispatch(StationServiceActionCreator.sendStationDisconnectReqAction(this.stationStatus.data.network));
  }

}
