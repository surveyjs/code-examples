<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import { medicalFormSample } from '~/survey/medicalForm'

const PAGES = ['Patient', 'Insurance', 'History', 'Consent'] as const
const LAST_PAGE = PAGES.length - 1

type Allergy = { allergen: string; severity: string; reaction: string }

const currentPage = ref(0)
const attempted = ref([false, false, false, false])
const submitted = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  dob: '',
  sex: null as string | null,
  phone: '',
  preferredContact: null as string | null,
  carrier: '',
  memberId: '',
  groupNumber: '',
  relationship: 'self',
  hasSecondary: false,
  carrier2: '',
  memberId2: '',
  medicalHistory: {
    diabetes: null as string | null,
    hypertension: null as string | null,
    asthma: null as string | null,
    heart: null as string | null,
  },
  allergies: [] as Allergy[],
  currentMedications: '',
  consentTreatment: false,
  consentPrivacy: false,
  signedDate: '',
})

const historyRows = [
  { key: 'diabetes' as const, label: 'Diabetes' },
  { key: 'hypertension' as const, label: 'High blood pressure' },
  { key: 'asthma' as const, label: 'Asthma' },
  { key: 'heart' as const, label: 'Heart disease' },
]

const pageErrors = computed(() => {
  const show = attempted.value[currentPage.value]
  if (!show) {
    return {
      firstName: false,
      lastName: false,
      dob: false,
      carrier: false,
      memberId: false,
      carrier2: false,
      memberId2: false,
      consentTreatment: false,
      consentPrivacy: false,
    }
  }
  return {
    firstName: currentPage.value === 0 && !form.firstName.trim(),
    lastName: currentPage.value === 0 && !form.lastName.trim(),
    dob: currentPage.value === 0 && !form.dob,
    carrier: currentPage.value === 1 && !form.carrier.trim(),
    memberId: currentPage.value === 1 && !form.memberId.trim(),
    carrier2: currentPage.value === 1 && form.hasSecondary && !form.carrier2.trim(),
    memberId2: currentPage.value === 1 && form.hasSecondary && !form.memberId2.trim(),
    consentTreatment: currentPage.value === 3 && !form.consentTreatment,
    consentPrivacy: currentPage.value === 3 && !form.consentPrivacy,
  }
})

function isPageValid(page: number): boolean {
  switch (page) {
    case 0:
      return !!form.firstName.trim() && !!form.lastName.trim() && !!form.dob
    case 1:
      return (
        !!form.carrier.trim() &&
        !!form.memberId.trim() &&
        (!form.hasSecondary || (!!form.carrier2.trim() && !!form.memberId2.trim()))
      )
    case 2:
      return form.allergies.every((a) => !!a.allergen.trim())
    case 3:
      return form.consentTreatment && form.consentPrivacy
    default:
      return true
  }
}

function markAttempted(page: number) {
  if (!attempted.value[page]) {
    attempted.value = attempted.value.map((v, i) => (i === page ? true : v))
  }
}

function goBack() {
  currentPage.value = Math.max(0, currentPage.value - 1)
}

function goNext() {
  currentPage.value = Math.min(LAST_PAGE, currentPage.value + 1)
}

function complete() {
  markAttempted(currentPage.value)
  const firstInvalid = PAGES.findIndex((_, i) => !isPageValid(i))
  if (firstInvalid >= 0) {
    currentPage.value = firstInvalid
    attempted.value = attempted.value.map(() => true)
    return
  }
  submitted.value = true
}

function editResponse() {
  submitted.value = false
  currentPage.value = 0
}

function addAllergy() {
  form.allergies.push({ allergen: '', severity: '', reaction: '' })
}

function removeAllergy(index: number) {
  form.allergies.splice(index, 1)
}

/** Load the full sample response into the form. */
function prefillDemoData() {
  const sample = medicalFormSample
  form.firstName = sample.firstName
  form.lastName = sample.lastName
  form.dob = sample.dob
  form.sex = sample.sex
  form.phone = sample.phone
  form.preferredContact = sample.preferredContact
  form.carrier = sample.carrier
  form.memberId = sample.memberId
  form.groupNumber = sample.groupNumber
  form.relationship = sample.relationshipToInsured
  form.hasSecondary = sample.hasSecondary
  form.carrier2 = sample.carrier2
  form.memberId2 = sample.memberId2
  form.medicalHistory.diabetes = sample.medicalHistory.diabetes
  form.medicalHistory.hypertension = sample.medicalHistory.hypertension
  form.medicalHistory.asthma = sample.medicalHistory.asthma
  form.medicalHistory.heart = sample.medicalHistory.heart
  form.allergies = sample.allergies.map((a) => ({ ...a }))
  form.currentMedications = sample.currentMedications
  form.consentTreatment = sample.consentTreatment
  form.consentPrivacy = sample.consentPrivacy
  form.signedDate = sample.signedDate
}
</script>

<template>
  <div class="panel native">
    <div v-if="submitted" class="done">
      <p><strong>Submitted</strong></p>
      <p>Thank you. Your intake form has been submitted.</p>
      <button type="button" class="btn btn-text" @click="editResponse">Edit response</button>
    </div>

    <template v-else>
      <h2 class="panel-title">Patient Intake (Native Vue)</h2>
      <p class="panel-desc">Hand-built Vue controls — the stylistic baseline for comparison.</p>

      <div class="steps" aria-hidden="true">
        <span
          v-for="(page, i) in PAGES"
          :key="page"
          class="step"
          :class="{ active: i === currentPage }"
        >
          {{ i + 1 }}. {{ page }}
        </span>
      </div>

      <div v-if="currentPage === 0" class="grid">
        <label class="field">
          <span>First name</span>
          <input v-model="form.firstName" type="text" :aria-invalid="pageErrors.firstName" />
          <small v-if="pageErrors.firstName" class="err">Required</small>
        </label>
        <label class="field">
          <span>Last name</span>
          <input v-model="form.lastName" type="text" :aria-invalid="pageErrors.lastName" />
          <small v-if="pageErrors.lastName" class="err">Required</small>
        </label>
        <label class="field">
          <span>Date of birth</span>
          <input v-model="form.dob" type="date" :aria-invalid="pageErrors.dob" />
          <small v-if="pageErrors.dob" class="err">Required</small>
        </label>
        <fieldset class="field">
          <legend>Sex assigned at birth</legend>
          <label class="inline"><input v-model="form.sex" type="radio" value="f" /> Female</label>
          <label class="inline"><input v-model="form.sex" type="radio" value="m" /> Male</label>
        </fieldset>
        <label class="field">
          <span>Mobile phone</span>
          <input v-model="form.phone" type="tel" placeholder="+1 (999) 999-9999" />
        </label>
        <label class="field">
          <span>Preferred contact method</span>
          <select v-model="form.preferredContact">
            <option :value="null" disabled>Select…</option>
            <option>Phone</option>
            <option>Email</option>
            <option>Text message</option>
          </select>
        </label>
      </div>

      <div v-else-if="currentPage === 1">
        <h3 class="section">Primary insurance</h3>
        <div class="grid">
          <label class="field">
            <span>Insurance carrier</span>
            <input v-model="form.carrier" type="text" :aria-invalid="pageErrors.carrier" />
            <small v-if="pageErrors.carrier" class="err">Required</small>
          </label>
          <label class="field">
            <span>Member ID</span>
            <input v-model="form.memberId" type="text" :aria-invalid="pageErrors.memberId" />
            <small v-if="pageErrors.memberId" class="err">Required</small>
          </label>
          <label class="field">
            <span>Group number</span>
            <input v-model="form.groupNumber" type="text" />
          </label>
          <fieldset class="field full">
            <legend>Patient is the…</legend>
            <label class="inline"><input v-model="form.relationship" type="radio" value="self" /> Policyholder</label>
            <label class="inline"><input v-model="form.relationship" type="radio" value="spouse" /> Spouse</label>
            <label class="inline"><input v-model="form.relationship" type="radio" value="dependent" /> Dependent</label>
          </fieldset>
          <label class="field full switch-row">
            <input v-model="form.hasSecondary" type="checkbox" />
            Do you have secondary insurance?
          </label>
        </div>

        <template v-if="form.hasSecondary">
          <h3 class="section spaced">Secondary insurance</h3>
          <div class="grid">
            <label class="field">
              <span>Insurance carrier</span>
              <input v-model="form.carrier2" type="text" :aria-invalid="pageErrors.carrier2" />
              <small v-if="pageErrors.carrier2" class="err">Required</small>
            </label>
            <label class="field">
              <span>Member ID</span>
              <input v-model="form.memberId2" type="text" :aria-invalid="pageErrors.memberId2" />
              <small v-if="pageErrors.memberId2" class="err">Required</small>
            </label>
          </div>
        </template>
      </div>

      <div v-else-if="currentPage === 2">
        <p class="hint">Have you ever been diagnosed with any of the following?</p>
        <div v-for="row in historyRows" :key="row.key" class="history-row">
          <span>{{ row.label }}</span>
          <div class="radios">
            <label class="inline"><input v-model="form.medicalHistory[row.key]" type="radio" value="yes" /> Yes</label>
            <label class="inline"><input v-model="form.medicalHistory[row.key]" type="radio" value="no" /> No</label>
            <label class="inline"><input v-model="form.medicalHistory[row.key]" type="radio" value="unsure" /> Unsure</label>
          </div>
        </div>

        <h3 class="section spaced">Allergies</h3>
        <p v-if="!form.allergies.length" class="hint">No allergies added.</p>
        <div v-for="(allergy, index) in form.allergies" :key="index" class="grid allergy">
          <label class="field">
            <span>Allergen *</span>
            <input v-model="allergy.allergen" type="text" />
          </label>
          <label class="field">
            <span>Severity</span>
            <select v-model="allergy.severity">
              <option value="">Severity…</option>
              <option>Mild</option>
              <option>Moderate</option>
              <option>Severe</option>
            </select>
          </label>
          <label class="field">
            <span>Reaction</span>
            <input v-model="allergy.reaction" type="text" />
          </label>
          <button type="button" class="btn btn-text" @click="removeAllergy(index)">Remove</button>
        </div>
        <button type="button" class="btn btn-text" @click="addAllergy">Add allergy</button>

        <label class="field full spaced-top">
          <span>Current medications</span>
          <textarea v-model="form.currentMedications" rows="3" />
        </label>
      </div>

      <div v-else>
        <label class="check">
          <input v-model="form.consentTreatment" type="checkbox" />
          I consent to treatment
        </label>
        <small v-if="pageErrors.consentTreatment" class="err">Required</small>
        <label class="check">
          <input v-model="form.consentPrivacy" type="checkbox" />
          I acknowledge the privacy practices (HIPAA)
        </label>
        <small v-if="pageErrors.consentPrivacy" class="err">Required</small>
        <label class="field half spaced-top">
          <span>Date</span>
          <input v-model="form.signedDate" type="date" />
        </label>
      </div>

      <div class="nav">
        <div class="nav-start">
          <button type="button" class="btn btn-text" @click="prefillDemoData">
            Prefill demo data
          </button>
          <button
            v-if="currentPage > 0"
            type="button"
            class="btn btn-text"
            @click="goBack"
          >
            Previous
          </button>
        </div>
        <button
          v-if="currentPage < LAST_PAGE"
          type="button"
          class="btn btn-outline"
          @click="goNext"
        >
          Next
        </button>
        <button v-else type="button" class="btn btn-primary" @click="complete">Complete</button>
      </div>
    </template>
  </div>
</template>
