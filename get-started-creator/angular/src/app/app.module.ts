import { NgModule, provideZoneChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyCreatorModule } from 'survey-creator-angular';

import { AppComponent } from './app.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyCreatorComponent
  ],
  imports: [
    BrowserModule,
    SurveyCreatorModule
  ],
  providers: [provideZoneChangeDetection()],
  bootstrap: [AppComponent]
})
export class AppModule { }
