import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationSkeletonComponent } from './navigation-skeleton/navigation-skeleton.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import {AccessPointComponent} from './AccessPointModule/access-point/access-point.component';
import { StationComponent } from './StationModule/station/station.component';
import { GardenComponent } from './GardenModule/garden/garden.component';

import { combineReducers } from 'redux';
import { routerReducer, NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { NgReduxModule, NgRedux } from '@angular-redux/store';

import { StoreModule } from './store/StoreModule';
import { DayComponent } from './GardenModule/day/day.component';
import { DayListComponent } from './GardenModule/day-list/day-list.component';
import { HourComponent } from './GardenModule/hour/hour.component';
import { HourListComponent } from './GardenModule/hour-list/hour-list.component';
import { PlantComponent } from './GardenModule/plant/plant.component';
import { PlantListComponent } from './GardenModule/plant-list/plant-list.component';
import { SimpleProgramComponent } from './GardenModule/simple-program/simple-program.component';
import { SimpleProgramListComponent } from './GardenModule/simple-program-list/simple-program-list.component';
import { SprinklerComponent } from './GardenModule/sprinkler/sprinkler.component';
import { SprinklerListComponent } from './GardenModule/sprinkler-list/sprinkler-list.component';
import { TimePatternComponent } from './GardenModule/time-pattern/time-pattern.component';

import { EditableLabelComponent } from './GardenModule/utilities/editable-label/editable-label.component';
import { CollapseDirective } from './GardenModule/directives/collapse.directive';
import { GardenAPIService } from './GardenModule/api/GardenAPIService';
import { GardenService2GardenModelTranslator } from './GardenModule/api/GardenService2GardenModelTranslator';
import { GardenModel2GardenServiceTranslator } from './GardenModule/api/GardenModel2GardenServiceTranslator';
import { GardenServiceEpics } from './GardenModule/api/GardenSeviceEpics';
import { HttpClientModule } from '@angular/common/http';
import { AccessPointStatusComponent } from './AccessPointModule/access-point-status/access-point-status.component';
import { AccessPointSettingsComponent } from './AccessPointModule/access-point-settings/access-point-settings.component';

import {ReactiveFormsModule} from '@angular/forms';
import { AccessPointService } from './AccessPointModule/access-point/api/AccessPointService';
import { AccessPointServiceEpics } from './AccessPointModule/access-point/api/AccessPointServiceEpics';
import { StationStatusComponent } from './StationModule/station-status/station-status.component';
import { StationScannerComponent } from './StationModule/station-scanner/station-scanner.component';
import { StationNetworkComponent } from './StationModule/station-network/station-network.component';
import { StationServiceEpics } from './StationModule/station/api/StationServiceEpics';
import { StationService } from './StationModule/station/api/StationService';


const appRoutes: Routes = [
  { path: 'AccessPoint' , component: AccessPointComponent},
  { path: 'Station' , component: StationComponent},
  { path: 'Garden' , component: GardenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationSkeletonComponent,
    AccessPointComponent,
    StationComponent,
    GardenComponent,
    DayComponent,
    DayListComponent,
    HourComponent,
    HourListComponent,
    PlantComponent,
    PlantListComponent,
    SimpleProgramComponent,
    SimpleProgramListComponent,
    SprinklerComponent,
    SprinklerListComponent,
    TimePatternComponent,
    EditableLabelComponent,
    CollapseDirective,
    AccessPointStatusComponent,
    AccessPointSettingsComponent,
    StationStatusComponent,
    StationScannerComponent,
    StationNetworkComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgReduxModule,
    NgReduxRouterModule.forRoot(),
    StoreModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ],
  providers: [
    GardenAPIService,
    GardenService2GardenModelTranslator,
    GardenModel2GardenServiceTranslator,
    GardenServiceEpics,
    AccessPointServiceEpics,
    AccessPointService,
    StationServiceEpics,
    StationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
