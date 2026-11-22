import { useEffect, useState } from "react";
import { Model, setupThemeAdapter } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/survey-core.css";
import "survey-core/themes/adapters/mui.css";
import "./survey-overrides.css";
import { patientIntakeJson } from "./patientIntakeSchema";
import { FormCompleted } from "../shared/FormCompleted";

// Apply the adapter's MUI layout defaults. Run once at startup, before creating any model.
setupThemeAdapter("mui");

export default function SurveyJsIntake() {
  const [survey] = useState(() => new Model(patientIntakeJson));
  const [result, setResult] = useState<unknown>(null);

  useEffect(() => {
    const onComplete = (sender: Model) => setResult(sender.data); // POST it to your API here
    survey.onComplete.add(onComplete);
    return () => survey.onComplete.remove(onComplete);
  }, [survey]);

  if (result) {
    return (
      <FormCompleted
        data={result}
        onReset={() => {
          survey.clear();
          setResult(null);
        }}
      />
    );
  }
  return <Survey model={survey} />;
}
