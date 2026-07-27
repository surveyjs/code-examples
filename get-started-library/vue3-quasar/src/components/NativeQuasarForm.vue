<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

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
</script>

<template>
  <q-card flat bordered class="q-pa-md">
    <template v-if="submitted">
      <q-banner class="bg-positive text-white">
        <template #avatar>
          <q-icon name="check_circle" />
        </template>
        <div class="text-weight-medium">Submitted</div>
        <div>Thank you. Your intake form has been submitted.</div>
        <template #action>
          <q-btn flat label="Edit response" @click="editResponse" />
        </template>
      </q-banner>
    </template>

    <template v-else>
      <div class="text-h6 q-mb-xs">Patient Intake (Native Quasar)</div>
      <div class="text-body2 text-grey q-mb-md">
        Hand-built Quasar controls — the stylistic baseline for comparison.
      </div>

      <q-tabs
        :model-value="currentPage"
        dense
        class="q-mb-md text-grey"
        active-color="primary"
        indicator-color="primary"
        align="left"
        narrow-indicator
      >
        <q-tab
          v-for="(page, i) in PAGES"
          :key="page"
          :name="i"
          :label="`${i + 1}. ${page}`"
          disable
        />
      </q-tabs>

      <div v-if="currentPage === 0" class="row q-col-gutter-md">
        <div class="col-12 col-sm-6">
          <q-input
            v-model="form.firstName"
            label="First name"
            outlined
            dense
            :error="pageErrors.firstName"
            error-message="Required"
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-input
            v-model="form.lastName"
            label="Last name"
            outlined
            dense
            :error="pageErrors.lastName"
            error-message="Required"
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-input
            v-model="form.dob"
            label="Date of birth"
            type="date"
            outlined
            dense
            stack-label
            :error="pageErrors.dob"
            error-message="Required"
          />
        </div>
        <div class="col-12 col-sm-6">
          <div class="text-caption text-grey q-mb-xs">Sex assigned at birth</div>
          <q-option-group v-model="form.sex" inline :options="[
            { label: 'Female', value: 'f' },
            { label: 'Male', value: 'm' },
          ]" type="radio" dense />
        </div>
        <div class="col-12 col-sm-6">
          <q-input
            v-model="form.phone"
            label="Mobile phone"
            outlined
            dense
            placeholder="+1 (999) 999-9999"
          />
        </div>
        <div class="col-12 col-sm-6">
          <q-select
            v-model="form.preferredContact"
            label="Preferred contact method"
            :options="['Phone', 'Email', 'Text message']"
            outlined
            dense
            emit-value
            map-options
          />
        </div>
      </div>

      <div v-else-if="currentPage === 1">
        <div class="text-subtitle2 q-mb-sm">Primary insurance</div>
        <div class="row q-col-gutter-md">
          <div class="col-12 col-sm-6">
            <q-input
              v-model="form.carrier"
              label="Insurance carrier"
              outlined
              dense
              :error="pageErrors.carrier"
              error-message="Required"
            />
          </div>
          <div class="col-12 col-sm-6">
            <q-input
              v-model="form.memberId"
              label="Member ID"
              outlined
              dense
              :error="pageErrors.memberId"
              error-message="Required"
            />
          </div>
          <div class="col-12 col-sm-6">
            <q-input v-model="form.groupNumber" label="Group number" outlined dense />
          </div>
          <div class="col-12">
            <div class="text-caption text-grey q-mb-xs">Patient is the…</div>
            <q-option-group
              v-model="form.relationship"
              inline
              :options="[
                { label: 'Policyholder', value: 'self' },
                { label: 'Spouse', value: 'spouse' },
                { label: 'Dependent', value: 'dependent' },
              ]"
              type="radio"
              dense
            />
          </div>
          <div class="col-12 q-mt-md">
            <q-toggle v-model="form.hasSecondary" label="Do you have secondary insurance?" color="primary" />
          </div>
        </div>

        <template v-if="form.hasSecondary">
          <div class="text-subtitle2 q-mt-md q-mb-sm">Secondary insurance</div>
          <div class="row q-col-gutter-md">
            <div class="col-12 col-sm-6">
              <q-input
                v-model="form.carrier2"
                label="Insurance carrier"
                outlined
                dense
                :error="pageErrors.carrier2"
                error-message="Required"
              />
            </div>
            <div class="col-12 col-sm-6">
              <q-input
                v-model="form.memberId2"
                label="Member ID"
                outlined
                dense
                :error="pageErrors.memberId2"
                error-message="Required"
              />
            </div>
          </div>
        </template>
      </div>

      <div v-else-if="currentPage === 2">
        <div class="text-body2 q-mb-sm">
          Have you ever been diagnosed with any of the following?
        </div>
        <div v-for="row in historyRows" :key="row.key" class="row items-center q-mb-xs">
          <div class="col-12 col-sm-4">{{ row.label }}</div>
          <div class="col-12 col-sm-8">
            <q-option-group
              v-model="form.medicalHistory[row.key]"
              inline
              dense
              :options="[
                { label: 'Yes', value: 'yes' },
                { label: 'No', value: 'no' },
                { label: 'Unsure', value: 'unsure' },
              ]"
              type="radio"
            />
          </div>
        </div>

        <div class="text-subtitle2 q-mt-md q-mb-sm">Allergies</div>
        <div v-if="!form.allergies.length" class="text-body2 text-grey q-mb-sm">
          No allergies added.
        </div>
        <div v-for="(allergy, index) in form.allergies" :key="index" class="row q-col-gutter-sm q-mb-sm">
          <div class="col-12 col-sm-4">
            <q-input v-model="allergy.allergen" label="Allergen *" outlined dense />
          </div>
          <div class="col-12 col-sm-3">
            <q-select
              v-model="allergy.severity"
              label="Severity"
              :options="['Mild', 'Moderate', 'Severe']"
              outlined
              dense
              emit-value
              map-options
            />
          </div>
          <div class="col-12 col-sm-4">
            <q-input v-model="allergy.reaction" label="Reaction" outlined dense />
          </div>
          <div class="col-12 col-sm-1 flex flex-center">
            <q-btn flat round dense icon="close" @click="removeAllergy(index)" />
          </div>
        </div>
        <q-btn flat color="primary" label="Add allergy" class="q-mb-md" @click="addAllergy" />

        <q-input
          v-model="form.currentMedications"
          label="Current medications"
          type="textarea"
          outlined
          dense
          autogrow
        />
      </div>

      <div v-else>
        <q-checkbox
          v-model="form.consentTreatment"
          label="I consent to treatment"
          color="primary"
          :error="pageErrors.consentTreatment"
        />
        <div v-if="pageErrors.consentTreatment" class="text-negative text-caption q-mb-sm">
          Required
        </div>
        <q-checkbox
          v-model="form.consentPrivacy"
          label="I acknowledge the privacy practices (HIPAA)"
          color="primary"
          :error="pageErrors.consentPrivacy"
          class="q-mb-md"
        />
        <div v-if="pageErrors.consentPrivacy" class="text-negative text-caption q-mb-sm">
          Required
        </div>
        <div class="row">
          <div class="col-12 col-sm-6">
            <q-input
              v-model="form.signedDate"
              label="Date"
              type="date"
              outlined
              dense
              stack-label
            />
          </div>
        </div>
      </div>

      <div class="row justify-between q-mt-md">
        <q-btn v-if="currentPage > 0" flat label="Previous" @click="goBack" />
        <div v-else />
        <q-btn
          v-if="currentPage < LAST_PAGE"
          outline
          color="primary"
          label="Next"
          @click="goNext"
        />
        <q-btn v-else color="primary" label="Complete" @click="complete" />
      </div>
    </template>
  </q-card>
</template>
