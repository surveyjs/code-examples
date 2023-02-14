import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SurveyCreatorModule } from 'survey-creator-angular';
import { ColorSketchModule } from "ngx-color/sketch";
import { ColorSliderModule } from "ngx-color/slider";
import { ColorCompactModule } from "ngx-color/compact";

import { AppComponent } from './app.component';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    SurveyCreatorComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    SurveyCreatorModule,
    ColorSketchModule,
    ColorSliderModule,
    ColorCompactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
