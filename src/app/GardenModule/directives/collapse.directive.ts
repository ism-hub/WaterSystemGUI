// tslint:disable-next-line:max-line-length
import { Directive, ViewChild, Input, Output, EventEmitter, ElementRef, ContentChild, AfterContentInit, AfterViewInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Directive({
  selector: '[appCollapse]'
})
export class CollapseDirective implements AfterContentInit, AfterViewInit {


  @ContentChild('collapseCtrl', /* TODO: add static flag */ {static: false}) collapseCtrl: ElementRef;
  @ContentChild('collapseCollapse', /* TODO: add static flag */ {static: false}) collapseCollapse: ElementRef;

  @Output() isCollapsedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  private _isCollapsed;
  @Input()
  get isCollapsed(): boolean {
    return this._isCollapsed;
  }
  set isCollapsed(value: boolean) {
    if (this._isCollapsed === value) {// no change
      return;
    }
    this._isCollapsed = value;
    $(this.collapseCollapse.nativeElement).collapse(this._isCollapsed ? 'hide' : 'show');
    this.isCollapsedChange.emit(this._isCollapsed);
  }

  constructor() {
  }


  ngAfterContentInit(): void {
    $(this.collapseCtrl.nativeElement).click(() => {this.isCollapsed = ! this.isCollapsed; });
    $(this.collapseCollapse.nativeElement).addClass('collapse');
    this.isCollapsed = true;
  }

  ngAfterViewInit(): void {

  }

}
