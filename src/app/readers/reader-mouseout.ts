import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Message } from '../common';
import { Reader } from './reader';

@Injectable()
export class ReaderMouseout implements Reader {

  private _channel: Subject<Message> = new Subject<Message>();

  public typeReader = 'mouseout';
  public get channel(): Observable<Message> {
    return this._channel .pipe(
      filter((message: Message) => message.type === this.typeReader )
    );
  }

  constructor() {
    this.channel
    .subscribe(
      (message: Message) => { this._mouseoutAction(message.payload); }
    );
  }

  private _mouseoutAction(event: any) {
    console.log('Mouse out action: ', event);
  }

  public emit(message: Message) {
    this._channel.next(message);
  }

}