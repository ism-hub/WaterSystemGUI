
import { Injectable } from '@angular/core';
// import { Http, Response, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import { GardenServiceModel } from '../state/serviceModels';
import { Observable } from 'rxjs';
import { ServerAccessPointStatus, ServerAccessPointSettings } from '../../models';


// if below not working try this -
const URLS = {
  GET_STATUS: 'http://watersystem.local/apstatus',
  GET_SET_SETTINGS: 'http://watersystem.local/apconfig',
  SERVICE_BASE: 'http://watersystem.local/',
};
/*
const URLS = {
  GET_STATUS: 'http://watersystem/apstatus',
  GET_SET_SETTINGS: 'http://watersystem/apconfig',
  SERVICE_BASE: 'http://watersystem/',
};*/

@Injectable()
export class AccessPointService {
  constructor(private http: HttpClient) {}

  getStatus(): Observable<ServerAccessPointStatus> {
    return this.http.get<ServerAccessPointStatus>(URLS.GET_STATUS);
      // .map(resp => resp.json()/*['Garden']*/);
  }

  getSettings(): Observable<ServerAccessPointSettings> {
    return this.http.get<ServerAccessPointSettings>(URLS.GET_SET_SETTINGS);
  }

  setSettings(serverAccessPointSettings: ServerAccessPointSettings): Observable<ServerAccessPointSettings> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<ServerAccessPointSettings>(URLS.GET_SET_SETTINGS, serverAccessPointSettings, httpOptions);
  }
}
