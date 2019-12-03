import { Injectable } from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, ComponentType } from '@angular/cdk/portal';
import { TypeModalOverlay } from 'src/app/shared/overlay/type-modal-overlay.enum';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class OverlayService {

  private overlayRef: OverlayRef;
  constructor(
    private overlay: Overlay,
    ) { }

  create<T>(component: ComponentType<T>, typeModal: TypeModalOverlay): Observable<boolean> {
    return Observable.create((observable: Subject<boolean>) => {
      const overlayRef = this.overlay.create(this.switchModal(typeModal));
      const popupComponentPortal = new ComponentPortal(component);
      overlayRef.attach(popupComponentPortal);
      overlayRef.backdropClick().subscribe(() => {
        overlayRef.dispose();
        observable.next(true);
      });
    });
  }

  private switchModal(typeModal: TypeModalOverlay) {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const configDiv: OverlayConfig = {
      hasBackdrop: true,
      height: '200px',
      positionStrategy,
    };

    switch (typeModal) {
      case TypeModalOverlay.small:
        configDiv.width = '300px';
        break;
      case TypeModalOverlay.medium:
        configDiv.width = '500px';
        break;
      case TypeModalOverlay.large:
        configDiv.width = '800px';
        break;
      default:
        configDiv.width = '300px';
        break;
    }
    return configDiv;
  }
}
