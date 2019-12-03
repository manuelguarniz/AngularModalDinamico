import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverlayService } from './services/overlay/overlay.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelloWorldModalComponent } from './components/options/hello-world-modal/hello-world-modal.component';
import { SlideOverService } from './services/slide-over/slide-over.service';
import { OVERLAY_PROVIDERS } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    OVERLAY_PROVIDERS,
    OverlayService,
    SlideOverService,
  ],
  entryComponents: [
    HelloWorldModalComponent,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
