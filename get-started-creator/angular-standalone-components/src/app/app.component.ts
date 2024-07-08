import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyCreatorComponent } from './survey-creator/survey-creator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SurveyCreatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Get Started with SurveyJS Form Builder for Angular';
}
