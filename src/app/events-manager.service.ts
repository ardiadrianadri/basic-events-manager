import { Injectable, Inject } from '@angular/core';

import { WRITERS, Writer } from './writers';
import { READERS, Reader } from './readers';
import { Message } from './common';

@Injectable()
export class EventsManager {

  constructor(
    @Inject(WRITERS) private _writers: Writer[],
    @Inject(READERS) private _readers: Reader[]
  ){
    for (const writer of this._writers) {
      writer.channel.subscribe((message: Message) => {
        for (const reader of this._readers) {
          reader.channel.next(message);
        }
      });
    }
  }
}
