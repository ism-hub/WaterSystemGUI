
import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { provideReduxForms } from '@angular-redux/form';

// Redux ecosystem stuff.
import { createLogger } from 'redux-logger';

// The top-level reducers and epics that make up our app's logic.
import { Sprinkler, Plant, Garden, SimpleProgram, TimePattern, Hour, Day } from '../GardenModule/state/state';
import { AppState } from './app.state';
import { SprinklerData, PlantData, GardenData, SimpleProgramData, HourData, DayData, Status } from '../GardenModule/state/models';
import { rootReducer } from './RootReducer';
import { RootEpics } from './RootEpics';
import { List } from 'immutable';
import { createEpicMiddleware } from 'redux-observable';
import { applyMiddleware, createStore } from 'redux';


@NgModule({
  imports: [NgReduxModule, NgReduxRouterModule],
  providers: [RootEpics],
})
export class StoreModule {
  constructor(
    public store: NgRedux<AppState>,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    rootEpics: RootEpics,
  ) {
    console.log('StoreModule CTOR');
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.

    const epicMiddleware = createEpicMiddleware();

   /* const store2 = createStore(
      rootReducer,
      this.initialAppState(),
      applyMiddleware(createLogger(), epicMiddleware),
    );

    store.provideStore(store2);
    epicMiddleware.run(rootEpics.createEpics());*/

   store.configureStore(
      rootReducer,
      this.initialAppState(),
      [epicMiddleware, createLogger()], // applyMiddleware(epicMiddleware), // [ createLogger(), ...rootEpics.createEpics() ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);

   epicMiddleware.run(rootEpics.createEpics());

    // Enable syncing of Angular router state with our Redux store.
    if (ngReduxRouter) {
      ngReduxRouter.initialize(/* args */);
    }

    // Enable syncing of Angular form state with our Redux store.
     provideReduxForms(store); // not compatible with store v7 that im using (maybe later)
  }

  /*private initialAppState(): AppState {
    const appState = new AppState();
    return appState;
  }*/

  private initialAppState(): AppState {
        // init programs
    const hourA: Hour = new Hour(new HourData(111, 9, 30));
    const hourB: Hour = new Hour(new HourData(112, 21, 30));
    const dayDataA: DayData = new DayData(80);
    const dayA: Day = new Day(dayDataA, List<Hour>([hourA, hourB]));

     const hourBA: Hour = new Hour(new HourData(221, 10, 30));
    const hourBB: Hour = new Hour(new HourData(222, 22, 30));
    const dayDataB: DayData = new DayData(90);
    const dayB: Day = new Day(dayDataB, List<Hour>([hourBA, hourBB]));

    const timePattern: TimePattern = new TimePattern(List<Day>([dayA, dayB]));
    const timePattern2: TimePattern = new TimePattern(List<Day>([dayA, dayB]));

    const simpleProgramDataA: SimpleProgramData = new SimpleProgramData(123, 'simpleProgramA');
    const simpleProgramA: SimpleProgram = new SimpleProgram(simpleProgramDataA, timePattern);

    const simpleProgramDataB: SimpleProgramData = new SimpleProgramData(234, 'simpleProgramB');
    const simpleProgramB: SimpleProgram = new SimpleProgram(simpleProgramDataB, timePattern2);

    // init plants
    const sprinklerAData: SprinklerData = new SprinklerData(1, Status.On);
    const sprinklerBData: SprinklerData = new SprinklerData(2, Status.Off);
    const plantAData: PlantData = new PlantData(11, 'plantA');
    const plantBData: PlantData = new PlantData(22, 'plantB');

    const sprinklerA: Sprinkler = new Sprinkler(sprinklerAData);
    const sprinklerB: Sprinkler = new Sprinkler(sprinklerBData);
    const plantA: Plant = new Plant(plantAData, sprinklerA, simpleProgramA);
    const plantB: Plant = new Plant(plantBData);

    // init garden
    const gardenData: GardenData = new GardenData('Food Garden');

    const garden = new Garden(
          gardenData,
          List<Plant>([plantA, plantB]), List<SimpleProgram>([simpleProgramA, simpleProgramB]), List<Sprinkler>([sprinklerA, sprinklerB]));
    const appState = new AppState(garden);
    console.log(appState);
    return appState;
  }

}
