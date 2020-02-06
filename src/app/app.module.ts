import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EventsDirective } from './events.directive';
import * as writers from './writers';
import * as readers from './readers';
import { EventsManager } from './events-manager.service';
 
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  providers: [
    writers.WriterFocus,
    { provide: writers.WRITERS, useExisting: writers.WriterFocus, multi: true },
    writers.WriterKeyup,
    { provide: writers.WRITERS, useExisting: writers.WriterKeyup, multi: true },
    writers.WriterMouseOut,
    { provide: writers.WRITERS, useExisting: writers.WriterMouseOut, multi: true },
    writers.WriterMouseOver,
    { provide: writers.WRITERS, useExisting: writers.WriterMouseOver, multi: true },
    readers.ReaderKeyup,
    { provide: readers.READERS, useExisting: readers.ReaderKeyup, multi: true },
    { provide: readers.READERS, useClass: readers.ReaderFocus, multi: true },
    { provide: readers.READERS, useClass: readers.ReaderMouseout, multi: true },
    { provide: readers.READERS, useClass: readers.ReaderMouseover, multi: true },
    EventsManager
  ],
  declarations: [ AppComponent, EventsDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
