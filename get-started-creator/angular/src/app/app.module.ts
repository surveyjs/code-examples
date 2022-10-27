import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyCreatorAngularModule } from 'survey-creator-angular';

import { AppComponent } from './app.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyCreatorComponent
  ],
  imports: [
    BrowserModule,
    SurveyCreatorAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
