import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Message } from '../common';
import { Reader } from './reader';

@Injectable()
export class ReaderFocus implements Reader {

  private _channel: Subject<Message> = new Subject<Message>();

  public typeReader = 'focus';
  public get channel(): Observable<Message> {
    return this._channel
    .pipe(filter((message: Message) => message.type === this.typeReader ));
  }

  constructor() {
    
    this.channel.subscribe(
      (message: Message) => { this._focusAction(message.payload); }
    );
  }

  private _focusAction(event: any) {
    console.log('Focus action: ', event);
  }

  public emit(message: Message) {
    this._channel.next(message);
  } 

}