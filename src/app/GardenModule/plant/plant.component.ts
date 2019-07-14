
import { Plant, SimpleProgram, Sprinkler, Garden } from '../state/state';
import { AppState} from '../../store/app.state';
import { PlantActionCreator } from './PlantActionCreator';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GardenActionCreator } from '../garden/GardenActions';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantComponent implements OnInit {

  @Input() readonly plant: Plant;
  garden: Garden;
  garden$: Observable<Garden>;

  constructor(private _ngRedux: NgRedux<AppState>) {
    this.garden$  = _ngRedux.select(state => state.garden);
    this.garden$.subscribe(newGarden => this.garden = newGarden);
  }

  ngOnInit() {
  }

  changeName(name: string): void {
      this._ngRedux.dispatch(PlantActionCreator.ChangeNameAction(name, this.plant.plantData.id));
  }

  deletePlant(): void {
    this._ngRedux.dispatch(GardenActionCreator.DeletePlantAction(this.plant.plantData.id));
  }

  removeProgramFromPlant($event: SimpleProgram): void {
    this._ngRedux.dispatch(PlantActionCreator.RemoveProgramFromPlantAction($event, this.plant.plantData.id));
  }

  removeSprinklerFromPlant($event: Sprinkler): void {
    this._ngRedux.dispatch(PlantActionCreator.RemoveSprinklerFromPlantAction($event, this.plant.plantData.id));
  }

  setSprinkler(sprinkler: Sprinkler): void {
    this._ngRedux.dispatch(PlantActionCreator.AddSprinklerFromPlantAction(sprinkler, this.plant.plantData.id));
  }

  setProgram(program: SimpleProgram): void {
    this._ngRedux.dispatch(PlantActionCreator.AddProgramFromPlantAction(program, this.plant.plantData.id));
  }

}
