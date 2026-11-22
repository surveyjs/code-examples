# Patient Intake, built two ways (MUI 7)

Companion code for the blog post comparing a hand-coded MUI form with SurveyJS + the MUI theme adapter.

- `src/rhf/` – MUI + react-hook-form + Zod (`patientIntakeSchema.ts`, `RhfIntake.tsx`, reusable `fields.tsx`)
- `src/surveyjs/` – SurveyJS Form Library + MUI theme adapter (`patientIntakeSchema.ts` JSON schema, `SurveyJsIntake.tsx`)
- `src/theme.ts` – MUI theme with `cssVariables` enabled (required by the adapter)

## Run

```bash
npm install
npm run dev
```

Open `/#surveyjs` or `/#rhf`. Use the header button to switch light/dark mode.

## Commit history of this folder

1. **Baseline** – the Patient Intake form in both versions. The line counts in the post come from this commit.
2. **Change request** – the same new requirement (severe allergy rules) applied to both versions, so you can compare the diffs.
3. **Polish** – an override that keeps SurveyJS error messages directly under their inputs, and an outlined Next button in the react-hook-form version.
