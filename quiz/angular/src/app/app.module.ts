import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SurveyAngularModule } from 'survey-angular-ui';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SurveyAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
