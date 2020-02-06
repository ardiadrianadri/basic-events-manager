import { Directive, HostListener } from '@angular/core';
import {
  WriterFocus,
  WriterKeyup,
  WriterMouseOut,
  WriterMouseOver
} from './writers';

@Directive({
  selector: '[events-catcher]'
})
export class EventsDirective {

  constructor(
    private _writerFocus: WriterFocus,
    private _writerKeyup: WriterKeyup,
    private _writerMouseOut: WriterMouseOut,
    private _writerMouseOver: WriterMouseOver
  ){}

  @HostListener('mouseover', ['$event'])
  onMouseOver(event: any) {
    this._writerMouseOver.write(event);
  }

  @HostListener('mouseout',['$event'])
  onMouseOut(event: any) {
    this._writerMouseOut.write(event);
  }

  @HostListener('keyup',['$event.target'])
  onKeyup(event: any) {
    this._writerKeyup.write(event.value);
  }

  @HostListener('focus',['$event'])
  onFocus(event: any) {
    this._writerFocus.write(event);
  }
}