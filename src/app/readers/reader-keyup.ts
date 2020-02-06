import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

import { Message } from '../common';
import { Reader } from './reader';

@Injectable()
export class ReaderKeyup implements Reader {

  private _channel: Subject<Message> = new Subject<Message>();

  public typeReader = 'keyup';
  public get channel(): Observable<String> {
    return this._channel.pipe(
      filter((message: Message) => {
        return message.type === this.typeReader;
      } ),
      map((message: Message) => message.payload as String )
    );
  }

  public emit(message: Message) {
    this._channel.next(message);
  }
}