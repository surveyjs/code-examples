import { BrowserModule } from '@angular/platform-browser';
import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { SurveyModule } from "survey-angular-ui";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SurveyModule
  ],
  providers: [provideZoneChangeDetection()],
  bootstrap: [AppComponent]
})
export class AppModule { }