import { useState } from "react";
import { Controller, useFieldArray, useForm, useWatch, type FieldPath } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import {
  defaultValues,
  historyAnswers,
  patientIntakeSchema,
  type PatientIntake,
  type PatientIntakeInput,
} from "./patientIntakeSchema";
import { RadioInput, SelectInput, TextInput, ToggleInput } from "./fields";
import { FormCompleted } from "../shared/FormCompleted";

type Fields = FieldPath<PatientIntakeInput>;

// Page titles and the fields each page validates before "Next".
const PAGES: { title: string; fields: Fields[] }[] = [
  { title: "Patient", fields: ["firstName", "lastName", "dob", "phone"] },
  { title: "Insurance", fields: ["carrier", "memberId", "carrier2", "memberId2"] },
  { title: "History", fields: ["allergies", "carriesEpinephrine"] },
  { title: "Consent", fields: ["consentTreatment", "consentPrivacy"] },
];

const HISTORY_ROWS = [
  { value: "diabetes", label: "Diabetes" },
  { value: "hypertension", label: "High blood pressure" },
  { value: "asthma", label: "Asthma" },
  { value: "heart", label: "Heart disease" },
];

function maskPhone(raw: string): string {
  const d = raw.replace(/\D/g, "").replace(/^1/, "").slice(0, 10);
  if (!d) return "";
  let out = `+1 (${d.slice(0, 3)}`;
  if (d.length >= 3) out += ")";
  if (d.length > 3) out += ` ${d.slice(3, 6)}`;
  if (d.length > 6) out += `-${d.slice(6)}`;
  return out;
}

export default function RhfIntake() {
  const [page, setPage] = useState(0);
  const [result, setResult] = useState<PatientIntake | null>(null);
  const { control, handleSubmit, trigger, reset } = useForm<PatientIntakeInput, unknown, PatientIntake>({
    resolver: zodResolver(patientIntakeSchema),
    defaultValues,
  });
  const allergies = useFieldArray({ control, name: "allergies" });
  const hasSecondary = useWatch({ control, name: "hasSecondary" });
  const watchedAllergies = useWatch({ control, name: "allergies" });
  const hasSevereAllergy = watchedAllergies.some((a) => a.severity === "Severe");
  const isLast = page === PAGES.length - 1;

  async function next() {
    if (await trigger(PAGES[page].fields)) setPage((p) => p + 1);
  }

  const onSubmit = (data: PatientIntake) => {
    // Drop answers to hidden questions, then POST to your API here.
    if (!data.hasSecondary) {
      data = { ...data, carrier2: "", memberId2: "" };
    }
    if (!data.allergies.some((a) => a.severity === "Severe")) {
      data = { ...data, carriesEpinephrine: "" };
    }
    setResult(data);
  };

  if (result) {
    return (
      <FormCompleted
        data={result}
        onReset={() => {
          reset(defaultValues);
          setPage(0);
          setResult(null);
        }}
      />
    );
  }

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ p: 2 }}>
      <Typography variant="h5" fontWeight={600}>
        Patient Intake
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        Tell us about you and your insurance coverage.
      </Typography>
      <Stepper activeStep={page} alternativeLabel sx={{ mb: 4 }}>
        {PAGES.map((p) => (
          <Step key={p.title}>
            <StepLabel>{p.title}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {page === 0 && (
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextInput control={control} name="firstName" label="First name" required />
            <TextInput control={control} name="lastName" label="Last name" required />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextInput control={control} name="dob" label="Date of birth" type="date" required />
            <RadioInput
              control={control}
              name="sex"
              label="Sex assigned at birth"
              options={[
                { value: "f", label: "Female" },
                { value: "m", label: "Male" },
              ]}
            />
          </Stack>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextInput
              control={control}
              name="phone"
              label="Mobile phone"
              type="tel"
              placeholder="+1 (___) ___-____"
              helperText="We'll send appointment reminders to this number."
              format={maskPhone}
            />
            <SelectInput
              control={control}
              name="preferredContact"
              label="Preferred contact method"
              options={["Phone", "Email", "Text message"]}
            />
          </Stack>
        </Stack>
      )}

      {page === 1 && (
        <Stack spacing={3}>
          <Typography variant="h6">Primary insurance</Typography>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextInput control={control} name="carrier" label="Insurance carrier" required />
            <TextInput control={control} name="memberId" label="Member ID" required />
          </Stack>
          <TextInput control={control} name="groupNumber" label="Group number" />
          <RadioInput
            control={control}
            name="relationshipToInsured"
            label="Patient is the…"
            options={[
              { value: "self", label: "Policyholder" },
              { value: "spouse", label: "Spouse" },
              { value: "dependent", label: "Dependent" },
            ]}
          />
          <ToggleInput
            control={control}
            name="hasSecondary"
            label="Do you have secondary insurance?"
            variant="switch"
          />
          {hasSecondary && (
            <>
              <Typography variant="h6">Secondary insurance</Typography>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <TextInput control={control} name="carrier2" label="Insurance carrier" required />
                <TextInput control={control} name="memberId2" label="Member ID" required />
              </Stack>
            </>
          )}
        </Stack>
      )}

      {page === 2 && (
        <Stack spacing={3}>
          <Typography>Have you ever been diagnosed with any of the following?</Typography>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell />
                {historyAnswers.map((a) => (
                  <TableCell key={a} align="center" sx={{ textTransform: "capitalize" }}>
                    {a}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {HISTORY_ROWS.map((row) => (
                <Controller
                  key={row.value}
                  control={control}
                  name={`medicalHistory.${row.value}`}
                  render={({ field }) => (
                    <TableRow>
                      <TableCell>{row.label}</TableCell>
                      {historyAnswers.map((a) => (
                        <TableCell key={a} align="center">
                          <Radio
                            checked={field.value === a}
                            onChange={() => field.onChange(a)}
                            slotProps={{ input: { "aria-label": `${row.label}: ${a}` } }}
                          />
                        </TableCell>
                      ))}
                    </TableRow>
                  )}
                />
              ))}
            </TableBody>
          </Table>

          <Typography>Allergies</Typography>
          {allergies.fields.length === 0 && (
            <Typography color="text.secondary">No allergies added.</Typography>
          )}
          {allergies.fields.map((item, i) => (
            <Paper key={item.id} variant="outlined" sx={{ p: 2 }}>
              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems="flex-start">
                <TextInput control={control} name={`allergies.${i}.allergen`} label="Allergen" required />
                <SelectInput
                  control={control}
                  name={`allergies.${i}.severity`}
                  label="Severity"
                  options={["Mild", "Moderate", "Severe"]}
                />
                <TextInput control={control} name={`allergies.${i}.reaction`} label="Reaction" />
                <IconButton aria-label="Remove allergy" onClick={() => allergies.remove(i)}>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            </Paper>
          ))}
          <Button
            variant="outlined"
            sx={{ alignSelf: "flex-start" }}
            onClick={() => allergies.append({ allergen: "", severity: "", reaction: "" })}
          >
            Add allergy
          </Button>

          {hasSevereAllergy && (
            <RadioInput
              control={control}
              name="carriesEpinephrine"
              label="Do you carry an epinephrine auto-injector?"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
            />
          )}
          <TextInput
            control={control}
            name="currentMedications"
            label="Current medications"
            multiline
            rows={3}
          />
        </Stack>
      )}

      {page === 3 && (
        <Stack spacing={3}>
          <ToggleInput control={control} name="consentTreatment" label="I consent to treatment" />
          <ToggleInput
            control={control}
            name="consentPrivacy"
            label="I acknowledge the privacy practices (HIPAA)"
          />
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextInput control={control} name="signature" label="Signature" />
            <TextInput control={control} name="signedDate" label="Date" type="date" />
          </Stack>
        </Stack>
      )}

      <Stack direction="row" spacing={1} sx={{ mt: 4 }}>
        {page > 0 && (
          <Button variant="outlined" onClick={() => setPage((p) => p - 1)}>
            Previous
          </Button>
        )}
        {isLast ? (
          <Button type="submit" variant="contained">
            Complete
          </Button>
        ) : (
          <Button variant="outlined" onClick={next}>
            Next
          </Button>
        )}
      </Stack>
    </Box>
  );
}
