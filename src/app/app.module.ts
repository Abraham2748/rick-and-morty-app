import { LayoutModule } from '@angular/cdk/layout';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';

const COMMON = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  StoreModule.forRoot({}, {}),
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode(), autoPause: true }),
];
const UTILS = [LayoutModule];
const PAGES = [LandingComponent];

@NgModule({
  declarations: [AppComponent],
  imports: [...COMMON, ...UTILS, ...PAGES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
