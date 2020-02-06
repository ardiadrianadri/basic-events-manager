import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from '../common';

export interface Reader {

  typeReader: String;
  channel: Observable<any>;

  emit(message: Message):void;

}

export const READERS: InjectionToken<Reader[]> = new InjectionToken<Reader[]>('READERS');