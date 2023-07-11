import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const COMMON = [BrowserModule, AppRoutingModule, BrowserAnimationsModule];
const UTILS = [LayoutModule];
const PAGES = [];
const COMPONENTS = [];

@NgModule({
  declarations: [AppComponent],
  imports: [...COMMON, ...UTILS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
