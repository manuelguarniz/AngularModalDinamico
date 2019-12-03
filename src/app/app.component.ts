import { Component } from '@angular/core';
import { SlideOverService } from './services/slide-over/slide-over.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'modal-controller';

  constructor(
    private _slideOverServices: SlideOverService,
  ) { }

  openPrompt(event: EventEmitter) {
    console.log('click !');
    this._slideOverServices.promptHelloWorld().subscribe(res => {
      console.log(res);
    });
  }
}
