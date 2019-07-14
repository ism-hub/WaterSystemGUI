import { SimpleProgram, TimePattern } from '../state/state';
import { AppState } from '../../store/app.state';
import { SimpleProgramActionCreator } from './SimpleProgramActionCreator';
import { NgRedux } from '@angular-redux/store';
import { Component, OnInit, Input, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-simple-program',
  templateUrl: './simple-program.component.html',
  styleUrls: ['./simple-program.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleProgramComponent implements OnInit {

  @Input() readonly program: SimpleProgram;
  @Output() minusClick = new EventEmitter<SimpleProgram>();
 // isExpanded$: Observable<boolean>;
 // isExpandedLastValue: boolean;
 // id: number;

 // timePattern$: Observable<TimePattern>;

  constructor(private _ngRedux: NgRedux<AppState>) {
   }

  ngOnInit() {
    if (this.program === null) {
      return;
    }
   // this.isExpanded$ = this.program$.map(program => program.simpleProgramViewModel.isExpanded);
    // this.isExpanded$.subscribe(value => this.isExpandedLastValue = value);
    // this.program$.subscribe(program => this.id = program.simpleProgramData.id);
   // this.timePattern$ = this.program$.map(program => program.timePattern);
  }

  listExpandedChanged($event) {
    if ($event !== this.program.simpleProgramViewModel.isExpanded) {
      this._ngRedux.dispatch(SimpleProgramActionCreator.ChangeIsExpandedAction($event, this.program.simpleProgramData.id));
    }
  }

  changeName(name: string): void {
    this._ngRedux.dispatch(SimpleProgramActionCreator.ChangeNameAction(name, this.program.simpleProgramData.id));
  }

  onMinusClick(): void {
    this.minusClick.emit(this.program);
  }

}
