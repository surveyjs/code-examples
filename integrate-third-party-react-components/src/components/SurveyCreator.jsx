import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { registerColorPicker } from "./ColorPicker";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";

registerColorPicker();

export function SurveyCreatorWidget () {
  const creator = new SurveyCreator();
  return <SurveyCreatorComponent creator={creator} />;
}
