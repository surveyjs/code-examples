import { z } from "zod";

const required = (message: string) => z.string().trim().min(1, message);

export const historyAnswers = ["yes", "no", "unsure"] as const;

export const patientIntakeSchema = z
  .object({
    // Patient
    firstName: required("First name is required."),
    lastName: required("Last name is required."),
    dob: required("Date of birth is required."),
    sex: z.enum(["f", "m", ""]),
    phone: z
      .string()
      .refine((v) => v === "" || /^\+1 \(\d{3}\) \d{3}-\d{4}$/.test(v), "Enter a complete phone number."),
    preferredContact: z.enum(["Phone", "Email", "Text message", ""]),
    // Insurance
    carrier: required("Insurance carrier is required."),
    memberId: required("Member ID is required."),
    groupNumber: z.string(),
    relationshipToInsured: z.enum(["self", "spouse", "dependent"]),
    hasSecondary: z.boolean(),
    carrier2: z.string(),
    memberId2: z.string(),
    // History
    medicalHistory: z.record(z.string(), z.enum(historyAnswers).optional()),
    allergies: z.array(
      z.object({
        allergen: required("Allergen is required."),
        severity: z.enum(["Mild", "Moderate", "Severe", ""]),
        reaction: z.string(),
      }),
    ),
    carriesEpinephrine: z.enum(["yes", "no", ""]),
    currentMedications: z.string(),
    // Consent
    consentTreatment: z.boolean().refine((v) => v, "Consent to treatment is required."),
    consentPrivacy: z.boolean().refine((v) => v, "Acknowledgement is required."),
    signature: z.string(),
    signedDate: z.string(),
  })
  .superRefine((v, ctx) => {
    // Severe allergies need a reaction and an answer about epinephrine.
    v.allergies.forEach((a, i) => {
      if (a.severity === "Severe" && !a.reaction.trim())
        ctx.addIssue({ code: "custom", path: ["allergies", i, "reaction"], message: "Describe the reaction for severe allergies." });
    });
    if (v.allergies.some((a) => a.severity === "Severe") && !v.carriesEpinephrine)
      ctx.addIssue({ code: "custom", path: ["carriesEpinephrine"], message: "Response required." });
    // Secondary insurance fields are required only when the switch is on.
    if (!v.hasSecondary) return;
    if (!v.carrier2.trim())
      ctx.addIssue({ code: "custom", path: ["carrier2"], message: "Insurance carrier is required." });
    if (!v.memberId2.trim())
      ctx.addIssue({ code: "custom", path: ["memberId2"], message: "Member ID is required." });
  });

export type PatientIntakeInput = z.input<typeof patientIntakeSchema>;
export type PatientIntake = z.output<typeof patientIntakeSchema>;

export const defaultValues: PatientIntakeInput = {
  firstName: "",
  lastName: "",
  dob: "",
  sex: "",
  phone: "",
  preferredContact: "",
  carrier: "",
  memberId: "",
  groupNumber: "",
  relationshipToInsured: "self",
  hasSecondary: false,
  carrier2: "",
  memberId2: "",
  medicalHistory: {},
  allergies: [],
  carriesEpinephrine: "",
  currentMedications: "",
  consentTreatment: false,
  consentPrivacy: false,
  signature: "",
  signedDate: "",
};
