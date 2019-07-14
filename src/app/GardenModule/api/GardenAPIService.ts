
import { ServerGarden } from './ServerGardenModel';
import { Injectable } from '@angular/core';
// import { Http, Response, RequestOptionsArgs, Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/observable/of';
// import { GardenServiceModel } from '../state/serviceModels';
import { Observable } from 'rxjs';


// A fake API on the internets.
const URLS = {
  GET_GARDEN: 'http://watersystem/',
  // GET_GARDEN: 'http://www.mocky.io/v2/5a925cf13300008100e919fa',
  SERVER_BASE: 'http://watersystem/',
};

@Injectable()
export class GardenAPIService {
  constructor(private http: HttpClient) {}

  getGarden(): Observable<ServerGarden> {
    return this.http.get<ServerGarden>(URLS.GET_GARDEN);
      // .map(resp => resp.json()/*['Garden']*/);
  }

  saveGarden(serverGarden: ServerGarden): Observable<ServerGarden> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post<ServerGarden>(URLS.SERVER_BASE, serverGarden, httpOptions);
  }

 /* private translateServerJson2ServerModel(jsonGarden: any): ServerGarden {
    console.log(jsonGarden);
    const serverGarden = new ServerGarden();
    serverGarden.name = jsonGarden.name;
    console.log('2333333333333333333333333333333');
    console.log(serverGarden.name);
    return jsonGarden;
  }*/
}
