import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ImagesContainerComponent } from './components/landing-page/images-container/images-container.component';
import { StoreModule } from '@ngrx/store';
import { ImageInfoEffects, reducer } from '@image-viewer/images-store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import {
  TilesModule,
  ButtonModule,
  NotificationModule,
  LoadingModule,
  GridModule,
} from 'carbon-components-angular';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    HeaderComponent,
    LandingPageComponent,
    ImagesContainerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([ImageInfoEffects]),
    StoreModule.forRoot({ imageInfo: reducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    TranslocoRootModule,
    TilesModule,
    ButtonModule,
    NotificationModule,
    LoadingModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
