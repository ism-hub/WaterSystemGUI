import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StationStatus, StationStatusData, StationScannerData, Network } from '../../modles';
import { map } from 'rxjs/operators';
// import 'rxjs/observable/map';
import { ServerStationScanner, ServerStationStatus, ServerNetwork } from './serverModels';
import { StationServer2ServiceTranslator, Service2StationServerTranslator } from './translators';

// A fake API on the internets.
/*const URLS = {
  GET_STATUS: 'http://watersystem/station/connectionStatus',
  GET_NEARBYNETWORKS: 'http://watersystem/station/nearbyNetworks',
  POST_DISCONNECT: 'http://watersystem/station/disconnect',
  POST_CONNECT: 'http://watersystem/station/connect',
  SERVICE_BASE: 'http://watersystem/',
};*/
const URLS = {
  GET_STATUS: 'http://192.168.69.1/station/connectionStatus',
  GET_NEARBYNETWORKS: 'http://192.168.69.1/station/nearbyNetworks',
  POST_DISCONNECT: 'http://192.168.69.1/station/disconnect',
  POST_CONNECT: 'http://192.168.69.1/station/connect',
  SERVICE_BASE: 'http://192.168.69.1/',
};

@Injectable()
export class StationService {
  constructor(private http: HttpClient) {}

  getStatus(): Observable<StationStatusData> {
    return this.http.get<ServerStationStatus>(URLS.GET_STATUS).pipe(
      map((serverStationStatus) => StationServer2ServiceTranslator.translateStationStatusData(serverStationStatus))
    );
  }

  getNearbyNetworks(): Observable<StationScannerData> {
    return this.http.get<ServerStationScanner>(URLS.GET_NEARBYNETWORKS).pipe(
      map((serverStationScanner) => StationServer2ServiceTranslator.translateStationScannerData(serverStationScanner))
    );
  }

  askToConnect(network: Network): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const serverNetwork: ServerNetwork = Service2StationServerTranslator.translateNetwork(network);
    return this.http.post<any>(URLS.POST_CONNECT, serverNetwork, httpOptions);
  }

  askToDisconnect(network: Network): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const serverNetwork: ServerNetwork = Service2StationServerTranslator.translateNetwork(network);
    return this.http.post<any>(URLS.POST_DISCONNECT, serverNetwork, httpOptions);
  }
}
