import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

import { Message } from '../common';
import { Writer } from './writer';

@Injectable()
export class WriterFocus implements Writer {

  private _channel: Subject<Message> = new Subject<Message>();

  public typeWriter = 'focus';
  public get channel(): Observable<Message> {
    return this._channel.asObservable();
  }

  public write( payload: any): void {
    this._channel.next({
      type: this.typeWriter,
      payload: payload
    });
  }
}