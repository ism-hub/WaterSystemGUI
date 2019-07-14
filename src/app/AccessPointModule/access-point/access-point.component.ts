import { Component, OnInit } from '@angular/core';
import { AccessPoint } from '../models';
import { NgRedux } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-access-point',
  templateUrl: './access-point.component.html',
  styleUrls: ['./access-point.component.css']
})
export class AccessPointComponent implements OnInit {

  accessPoint: AccessPoint;

  constructor(private _ngRedux: NgRedux<AppState>) {
    const accessPoint$: Observable<AccessPoint> = _ngRedux.select(state => state.accessPoint);
    accessPoint$.subscribe(next => {
      this.accessPoint = next;
    });
  }

  ngOnInit() {
  }

}
