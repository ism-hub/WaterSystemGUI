import { Injectable } from '@angular/core';
import { Epic, createEpicMiddleware, combineEpics } from 'redux-observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import { map, filter, mapTo, switchMap, startWith, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
// import { AnyAction, Action } from 'redux';
import { AppState } from '../../store/app.state';
import { GardenServerActionCreator } from './GardenServiceActionCreator';
import { GardenAPIService } from './GardenAPIService';
import { GardenService2GardenModelTranslator } from './GardenService2GardenModelTranslator';
import { GardenModel2GardenServiceTranslator } from './GardenModel2GardenServiceTranslator';
import { Action } from 'redux';
import { Observable } from 'rxjs';

@Injectable()
export class GardenServiceEpics {
  constructor(private service: GardenAPIService,
              private translator: GardenService2GardenModelTranslator,
              private garden2sGardenTranslator: GardenModel2GardenServiceTranslator) {}

  public createEpic() {
    const epics = combineEpics(this.createGardenServiceEpic(), this.GardenServiceSaveEpic());
    return epics;
    // return createEpicMiddleware(epics);
    // return createEpicMiddleware(this.createGardenServiceEpic());
  }

  private createGardenServiceEpic() {
    return (action$, store) =>  action$.pipe(
      ofType( GardenServerActionCreator.LOAD_GARDEN),
      switchMap(() => this.service.getGarden().pipe(
        map(data => GardenServerActionCreator.LoadGardenSucceededAction(this.translator.translate(data))),
        catchError(response => of(GardenServerActionCreator.LoadGardenFaileddAction(response))),
        startWith(GardenServerActionCreator.LoadGardenStartedAction())
        )
      )
    );
    /*action$
      .ofType(GardenServerActionCreator.LOAD_GARDEN)
      .switchMap(() => this.service.getGarden()
        .map(data => GardenServerActionCreator.LoadGardenSucceededAction(this.translator.translate(data)))
        .catch(response => of(GardenServerActionCreator.LoadGardenFaileddAction(response)))
        .startWith(GardenServerActionCreator.LoadGardenStartedAction()));*/
  }

  private GardenServiceSaveEpic() {
    return (action$: Observable<{type, garden}>, store) => action$.pipe( // TODO: make the actions type-safe (compile time typesafty)
      ofType(GardenServerActionCreator.SAVE_GARDEN),
      switchMap(action => this.service.saveGarden(this.garden2sGardenTranslator.translate(action.garden)).pipe(
        map(data => GardenServerActionCreator.SaveGardenSucceededAction()),
        catchError(response => of(GardenServerActionCreator.SaveGardenFaileddAction(response))),
        startWith(GardenServerActionCreator.SaveGardenStartedAction())
        )
      )
    );

    /*return (action$, store) => action$
      .ofType(GardenServerActionCreator.SAVE_GARDEN)
      .switchMap((action) => this.service.saveGarden(this.garden2sGardenTranslator.translate(action.garden))
        .map(data => GardenServerActionCreator.SaveGardenSucceededAction())
        .catch(response => of(GardenServerActionCreator.SaveGardenFaileddAction(response)))
        .startWith(GardenServerActionCreator.SaveGardenStartedAction()));*/
  }
}
