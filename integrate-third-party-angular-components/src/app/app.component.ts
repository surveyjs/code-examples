import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ColorPickerComponent } from './color-picker/color-picker.component';

@Component({
  standalone: false,
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  static declaration = [ColorPickerComponent];
}
