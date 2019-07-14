import { Injectable } from '@angular/core';
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, map, catchError, startWith } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import { StationService } from './StationService';
import { StationServiceActionCreator, StationAction } from './StationServiceActionCreator';


@Injectable()
export class StationServiceEpics {
  constructor(private stationService: StationService) {}

  public createEpic() {
    return combineEpics(this.getStatusEpic(), this.getScannerEpic(), this.reqConnectEpic(), this.reqDisconnectEpic());
  }

  private getStatusEpic() {
    return (action$, store) =>  action$.pipe(
      ofType( StationServiceActionCreator.STATION_GET_STATUS),
      switchMap(() => this.stationService.getStatus().pipe(
        map(data => StationServiceActionCreator.getStatusDataSucceededAction(data)),
        catchError(response => of(StationServiceActionCreator.getStatusDataFailedAction(response))),
        startWith(StationServiceActionCreator.GetStatusDataStartedAction()),
        )
      )
    );
  }

  private getScannerEpic() {
    return (action$, store) =>  action$.pipe(
      ofType( StationServiceActionCreator.STATION_GET_NEARBY_NETWORKS),
      switchMap(() => this.stationService.getNearbyNetworks().pipe(
        map(data => StationServiceActionCreator.getNearbyNetworksSucceededAction(data)),
        catchError(response => of(StationServiceActionCreator.getNearbyNetworksFailedAction(response))),
        startWith(StationServiceActionCreator.getNearbyNetworksStartedAction()),
        )
      )
    );
  }

  private reqConnectEpic() {
    return (action$: Observable<StationAction>, store) =>  action$.pipe(
      ofType( StationServiceActionCreator.STATION_CONNECT_TO_NETWORK_REQ),
      switchMap((action) => this.stationService.askToConnect(action.network).pipe(
        map(data => StationServiceActionCreator.askToConnectSucceededAction()),
        catchError(response => of(StationServiceActionCreator.askToConnectFailedAction(response))),
        startWith(StationServiceActionCreator.askToConnectStartedAction()),
        )
      )
    );
  }

  private reqDisconnectEpic() {
    return (action$: Observable<StationAction>, store) =>  action$.pipe(
      ofType( StationServiceActionCreator.STATION_DISCONNECT_FROM_NETWORK_REQ),
      switchMap((action) => this.stationService.askToDisconnect(action.network).pipe(
        map(data => StationServiceActionCreator.askToDisconnectSucceededAction()),
        catchError(response => of(StationServiceActionCreator.askToDisconnectFailedAction(response))),
        startWith(StationServiceActionCreator.askToDisconnectStartedAction()),
        )
      )
    );
  }


}
