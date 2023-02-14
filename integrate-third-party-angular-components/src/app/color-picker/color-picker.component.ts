import { Component } from "@angular/core";
import { AngularComponentFactory, QuestionAngular } from "survey-angular-ui";
import { ElementFactory, Question, Serializer, SvgRegistry } from "survey-core";
import { PropertyGridEditorCollection, localization } from "survey-creator-core";
import { ColorEvent } from 'ngx-color';

const CUSTOM_TYPE = "color-picker";

@Component({
  selector: "color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: [ "./color-picker.component.css" ]
})
export class ColorPickerComponent extends QuestionAngular<QuestionColorPickerModel> {
  handleChange($event: ColorEvent) {
    this.model.value = $event.color.hex;
  }
}
AngularComponentFactory.Instance.registerComponent(CUSTOM_TYPE + "-question", ColorPickerComponent);

export class QuestionColorPickerModel extends Question {
  getType() {
    return CUSTOM_TYPE;
  }

  get colorPickerType() {
    return this.getPropertyValue("colorPickerType");
  }
  set colorPickerType(val) {
    this.setPropertyValue("colorPickerType", val);
  }

  get disableAlpha() {
    return this.getPropertyValue("disableAlpha");
  }
  set disableAlpha(val) {
    this.setPropertyValue("disableAlpha", val);
  }
}

ElementFactory.Instance.registerElement(CUSTOM_TYPE, (name) => {
  return new QuestionColorPickerModel(name);
});

// Add question type metadata for further serialization into JSON
Serializer.addClass(
  CUSTOM_TYPE,
  [{
    name: "colorPickerType",
    default: "Slider",
    choices: ["Slider", "Sketch", "Compact"],
    category: "general",
    visibleIndex: 2 // After the Name and Title
  }, {
    name: "disableAlpha:boolean",
    dependsOn: "colorPickerType",
    visibleIf: function (obj) {
      return obj.colorPickerType === "Sketch";
    },
    category: "general",
    visibleIndex: 3 // After the Name, Title, and Color Picker type
  }],
  function () {
    return new QuestionColorPickerModel("");
  },
  "question"
);

// Specify display names for the question type and its properties 
const locale = localization.getLocale("");
locale.qt[CUSTOM_TYPE] = "Color Picker";
locale.pe.colorPickerType = "Color picker type";
locale.pe.disableAlpha = "Disable alpha channel";

// Register an SVG icon for the question type
SvgRegistry.registerIconFromSvg(
  CUSTOM_TYPE,
  '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M24 21.4201C23.9387 22.1566 23.5894 22.8394 23.0278 23.3202C22.4662 23.8011 21.7376 24.0413 21 23.9888C20.2624 24.0413 19.5338 23.8011 18.9722 23.3202C18.4106 22.8394 18.0613 22.1566 18 21.4201C18 18.8513 21 16.2826 21 14.9932C21 16.2826 24 18.8513 24 21.4201ZM22 12.9942L11 1.99951L8.71 4.2884L10.12 5.70771L11 4.82814L18.17 11.9946L5.64 15.8028L2.83 12.9942L7.71 8.11653L9.29 9.70576C9.38296 9.79944 9.49356 9.8738 9.61542 9.92455C9.73728 9.97529 9.86799 10.0014 10 10.0014C10.132 10.0014 10.2627 9.97529 10.3846 9.92455C10.5064 9.8738 10.617 9.79944 10.71 9.70576C10.8037 9.61284 10.8781 9.5023 10.9289 9.3805C10.9797 9.2587 11.0058 9.12805 11.0058 8.99611C11.0058 8.86416 10.9797 8.73352 10.9289 8.61172C10.8781 8.48992 10.8037 8.37937 10.71 8.28645L3.71 1.28986C3.5217 1.10165 3.2663 0.995911 3 0.995911C2.7337 0.995911 2.4783 1.10165 2.29 1.28986C2.1017 1.47807 1.99591 1.73334 1.99591 1.99951C1.99591 2.26569 2.1017 2.52096 2.29 2.70917L6.29 6.70722L0 12.9942L10 22.9893L18 14.9932L22 12.9942Z" /></svg>'
);

// Register the `color-picker` as an editor for properties of the `color` type in the Survey Creator's Property Grid
PropertyGridEditorCollection.register({
  fit: function (prop) {
    return prop.type === "color";
  },
  getJSON: function () {
    return {
      type: CUSTOM_TYPE,
      colorPickerType: "Compact"
    };
  }
});