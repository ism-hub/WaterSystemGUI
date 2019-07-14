import { Injectable } from '@angular/core';
import { AccessPointService } from './AccessPointService';
import { combineEpics, ofType } from 'redux-observable';
import { AccessPointServiceActionCreator, AccessPointSettingsAction } from './AccessPointServiceActionCreator';
import { switchMap, map, catchError, startWith } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs';
import { AccessPointServer2ServiceTranslator, AccessPointService2ServerTranslator } from './translators';


@Injectable()
export class AccessPointServiceEpics {
  constructor(private accessPointService: AccessPointService) {}

  public createEpic() {
    return combineEpics(this.getStatusEpic(), this.getSettingsEpic(), this.setSettingsEpic());
  }

  private getStatusEpic() {
    return (action$, store) =>  action$.pipe(
      ofType( AccessPointServiceActionCreator.ACCESSPOINT_GET_STATUS_DATA),
      switchMap(() => this.accessPointService.getStatus().pipe(
        // tslint:disable-next-line:max-line-length
        map(data => AccessPointServiceActionCreator.GetStatusDataSucceededAction(AccessPointServer2ServiceTranslator.translateStatus(data))),
        catchError(response => of(AccessPointServiceActionCreator.GetStatusDataFailedAction(response))),
        startWith(AccessPointServiceActionCreator.GetStatusDataStartedAction()),
        )
      )
    );
  }

  private getSettingsEpic() {
    return (action$, store) =>  action$.pipe(
      ofType( AccessPointServiceActionCreator.ACCESSPOINT_GET_SETTINGS_DATA),
      switchMap(() => this.accessPointService.getSettings().pipe(
        map(data =>
          AccessPointServiceActionCreator.GetSettingsDataSucceededAction(AccessPointServer2ServiceTranslator.translateSettings(data))),
        catchError(response => of(AccessPointServiceActionCreator.GetSettingsDataFailedAction(response))),
        startWith(AccessPointServiceActionCreator.GetSettingsDataStartedAction()),
        )
      )
    );
  }

  private setSettingsEpic() {
    return (action$: Observable<AccessPointSettingsAction>, store) => action$.pipe(
      ofType(AccessPointServiceActionCreator.ACCESSPOINT_SET_SETTINGS_DATA),
      switchMap(action => this.accessPointService.setSettings(
        AccessPointService2ServerTranslator.translateSettings(action.accessPointSettingsData)).pipe(
          map(data =>
            AccessPointServiceActionCreator.SetSettingsDataSucceededAction(AccessPointServer2ServiceTranslator.translateSettings(data))),
          catchError(response => of(AccessPointServiceActionCreator.SetSettingsDataFaileddAction(response))),
          startWith(AccessPointServiceActionCreator.SetSettingsDataStartedAction()),
        )
    )
  );
  }
}
