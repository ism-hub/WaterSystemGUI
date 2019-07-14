import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editable-label',
  templateUrl: './editable-label.component.html',
  styleUrls: ['./editable-label.component.css']
})
export class EditableLabelComponent implements OnInit {

  @ViewChild('textBox', { static: true }) textBox1: ElementRef;
  @ViewChild('label', { static: true }) span1: ElementRef;

  private _text: string;
  @Input()
  get text(): string {
    return this._text;
  }
  set text(val: string) {
    if (val === this._text) {
      return;
    }
    this._text = val;
    this.textChange.emit(this._text);
  }

  @Output() textChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }
  onClick() {
    // this.span1.nativeElement.style.display = 'none';
    // this.textBox1.nativeElement.style.display = 'block';
    this.span1.nativeElement.setAttribute('hidden', true);
    this.textBox1.nativeElement.removeAttribute('hidden');
    // this.span1.nativeElement.style.visibility = 'hidden';
    // this.textBox1.nativeElement.style.visibility = 'visible';
    this.textBox1.nativeElement.focus();
  }
  onBlur() {
    // this.span1.nativeElement.style.display = 'block';
    // this.textBox1.nativeElement.style.display = 'none';

    // this.textBox1.nativeElement.style.visibility = 'hidden';
    // this.span1.nativeElement.style.visibility = 'visible';

    this.textBox1.nativeElement.setAttribute('hidden', true);
    this.span1.nativeElement.removeAttribute('hidden');
  }

}
