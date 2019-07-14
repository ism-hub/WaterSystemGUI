import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';
import { AccessPointStatusData, AccessPoint, AccessPointStatus } from '../models';
import { NgRedux, dispatch } from '@angular-redux/store';
import { AppState } from '../../store/app.state';
import { AccessPointServiceActionCreator } from '../access-point/api/AccessPointServiceActionCreator';

@Component({
  selector: 'app-access-point-status',
  templateUrl: './access-point-status.component.html',
  styleUrls: ['./access-point-status.component.css']
})
export class AccessPointStatusComponent implements OnInit {

  @Input() accessPointStatus: AccessPointStatus;

  constructor(private _ngRedux: NgRedux<AppState>) {
    this._ngRedux.dispatch(AccessPointServiceActionCreator.GetStatusDataAction());
  }

  ngOnInit() {

  }

  refreshStatus() {
    this._ngRedux.dispatch(AccessPointServiceActionCreator.GetStatusDataAction());
  }

}
