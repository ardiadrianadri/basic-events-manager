import { Component } from '@angular/core';

import { Observable } from 'rxjs';

import { ReaderKeyup } from './readers';
import { EventsManager } from './events-manager.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  public textInput$: Observable<String>

  constructor(
    private _keyupReader: ReaderKeyup,
    private _eventsManager: EventsManager
  ) {
    this.textInput$ = this._keyupReader.channel;
  }
}
