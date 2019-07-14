import { GardenActionCreator } from '../garden/GardenActions';
import { Sprinkler } from '../state/state';
import { AppState } from '../../store/app.state';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { List } from 'immutable';
import { SprinklerData } from '../state/models';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-sprinkler-list',
  templateUrl: './sprinkler-list.component.html',
  styleUrls: ['./sprinkler-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SprinklerListComponent implements OnInit {

  @Input() readonly sprinklers: List<Sprinkler>;
  @Input() readonly isExpanded: List<Sprinkler>;

  constructor(private _ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

  listExpandedChanged($event) {
    if ($event !== this.isExpanded) {
      this._ngRedux.dispatch(GardenActionCreator.ChangeIsSprinklerListExpandAction($event));
    }
  }

  getKey(_, sprinkler: Sprinkler) {
    return sprinkler.sprinklerData.id;
  }

  deleteSprinkler($event: Sprinkler): void {
    this._ngRedux.dispatch(GardenActionCreator.DeleteSprinklerAction($event));
  }

  addNewSprinkler(): void {
    this._ngRedux.dispatch(GardenActionCreator.AddSprinklerAction(new Sprinkler(new SprinklerData(this.getTemporarySprinklerId()))));
  }

  private getTemporarySprinklerId(): number {// its temporary cause the server will decide its value at the end
    let maxId = -1;
    this.sprinklers.forEach((sprinkler) => {
      if (sprinkler.sprinklerData.id > maxId) {
        maxId = sprinkler.sprinklerData.id;
      }
      });
    return maxId + 1;
  }
}
