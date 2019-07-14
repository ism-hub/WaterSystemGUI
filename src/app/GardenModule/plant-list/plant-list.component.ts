import { GardenActionCreator } from '../garden/GardenActions';
import { Plant } from '../state/state';
import { AppState } from '../../store/app.state';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { List } from 'immutable';
import { Observable } from 'rxjs/Observable';
import { PlantData } from '../state/models';

@Component({
  selector: 'app-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlantListComponent implements OnInit {

  @Input() plants: List<Plant>;
  @Input() isExpanded: boolean;

  constructor(private _ngRedux: NgRedux<AppState>) {
   }

  ngOnInit() {
  }

  listExpandedChanged($event) {
    if ($event !== this.isExpanded) {
      this._ngRedux.dispatch(GardenActionCreator.ChangeIsPlantsListExpandAction($event));
    }
  }

  getKey(_, plant: Plant) {
    return plant.plantData.id;
  }

  addNewPlant(): void {
    console.log('addNewPlant ##############');
    this._ngRedux.dispatch(GardenActionCreator.AddPlantAction(new Plant(new PlantData(this.getTemporaryPlantId()))));
  }

  private getTemporaryPlantId(): number {// its temporary cause the server will decide its value at the end
    let maxPlantId = -1;
    this.plants.forEach((plant) => {
      if (plant.plantData.id > maxPlantId) {
        maxPlantId = plant.plantData.id;
      }
      });
    return maxPlantId + 1;
  }

}
