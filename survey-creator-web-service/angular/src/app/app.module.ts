import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatorWidgetComponent } from './components/creator-widget.component';
import { SurveyListComponent } from './components/survey-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreatorWidgetComponent,
    SurveyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SurveyCreatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
