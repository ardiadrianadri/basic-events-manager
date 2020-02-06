import { InjectionToken } from '@angular/core';

import { Observable } from 'rxjs';

import { Message } from '../common';

export interface Writer {
  typeWriter: String;
  channel: Observable<Message>;
  write(payload: any): void;
}

export const WRITERS: InjectionToken<Writer[]> = new InjectionToken<Writer[]>('WRITERS');