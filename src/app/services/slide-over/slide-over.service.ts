import { Injectable } from '@angular/core';
import { OverlayService } from '../overlay/overlay.service';
import { Observable } from 'rxjs';
import { HelloWorldModalComponent } from 'src/app/components/options/hello-world-modal/hello-world-modal.component';
import { TypeModalOverlay } from 'src/app/shared/overlay/type-modal-overlay.enum';

@Injectable()
export class SlideOverService {

  constructor(
    private _overlay: OverlayService,
  ) { }

  promptHelloWorld(): Observable<boolean> {
    return this._overlay.create(HelloWorldModalComponent, TypeModalOverlay.medium);
  }
}
