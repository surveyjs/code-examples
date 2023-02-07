import { createElement } from "react";
import { SliderPicker, SketchPicker, CompactPicker } from "react-color";
import { ElementFactory, Question, Serializer, SvgRegistry } from "survey-core";
import { SurveyQuestionElementBase, ReactQuestionFactory } from "survey-react-ui";
import { localization, PropertyGridEditorCollection } from "survey-creator-react";
import { ReactComponent as ColorPickerIcon } from "../color-picker.svg";
import ReactDOMServer from "react-dom/server";

const CUSTOM_TYPE = "color-picker";

// A model for the new question type
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

// Register `QuestionColorPickerModel` as a model for the `color-picker` type
export function registerColorPicker() {
  ElementFactory.Instance.registerElement(CUSTOM_TYPE, (name) => {
    return new QuestionColorPickerModel(name);
  });
}

// Specify display names for the question type and its properties 
const locale = localization.getLocale("");
locale.qt[CUSTOM_TYPE] = "Color Picker";
locale.pe.colorPickerType = "Color picker type";
locale.pe.disableAlpha = "Disable alpha channel";

// Register an SVG icon for the question type
const svg = ReactDOMServer.renderToString(<ColorPickerIcon />);
SvgRegistry.registerIconFromSvg(CUSTOM_TYPE, svg);

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

// A class that renders questions of the new type in the UI
export class SurveyQuestionColorPicker extends SurveyQuestionElementBase {
  constructor(props) {
    super(props);
    this.state = { value: this.question.value };
  }
  get question() {
    return this.questionBase;
  }
  get value() {
    return this.question.value;
  }
  get disableAlpha() {
    return this.question.disableAlpha;
  }
  get type() {
    return this.question.colorPickerType;
  }
  handleColorChange = (data) => {
    this.question.value = data.hex;
  };

  // Support the read-only and design modes
  get style() {
    return this.question.getPropertyValue("readOnly") || this.question.isDesignMode ? { pointerEvents: "none" } : undefined;
  }

  renderColorPicker(type) {
    switch (type) {
      case "Slider": {
        return (
          <SliderPicker color={this.value} onChange={this.handleColorChange} />
        );
      }
      case "Sketch": {
        return (
          <SketchPicker color={this.value} onChange={this.handleColorChange} disableAlpha={this.disableAlpha} />
        );
      }
      case "Compact": {
        return (
          <CompactPicker color={this.value} onChange={this.handleColorChange} />
        );
      }
      default:
        return <div>Unknown type</div>;
    }
  }

  renderElement() {
    return (
      <div style={this.style}>
        {this.renderColorPicker(this.type)}
      </div>
    );
  }
}

// Register `SurveyQuestionColorPicker` as a class that renders `color-picker` questions 
ReactQuestionFactory.Instance.registerQuestion(CUSTOM_TYPE, (props) => {
  return createElement(SurveyQuestionColorPicker, props);
});

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