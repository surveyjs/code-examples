<script setup lang="ts">
import { onMounted, onUnmounted, ref, shallowRef, watch } from 'vue'
import { Model } from 'survey-core'
import { SurveyComponent } from 'survey-vue3-ui'
import { useQuasar } from 'quasar'
import { medicalFormJson, medicalFormSample } from '@/survey/medicalForm'
import { getQuasarTheme } from '@/survey/quasarTheme'

import 'survey-core/survey-core.min.css'

const emit = defineEmits<{
  complete: [data: Record<string, unknown>]
}>()

const $q = useQuasar()

function createSurveyModel() {
  const survey = new Model(medicalFormJson)
  survey.applyTheme(getQuasarTheme($q.dark.isActive))
  return survey
}

const model = shallowRef(createSurveyModel())
const completed = ref(false)

watch(
  () => $q.dark.isActive,
  (isDark) => {
    model.value.applyTheme(getQuasarTheme(isDark))
  },
)

function addPrefillAction(survey: Model) {
  survey.addNavigationItem({
    id: 'sv-prefill-demo',
    title: 'Prefill demo data',
    action: () => {
      survey.mergeData({ ...medicalFormSample })
    },
  })
}

function onComplete(sender: Model) {
  completed.value = true
  emit('complete', sender.data as Record<string, unknown>)
}

function editResponse() {
  model.value.clear(false)
  completed.value = false
}

onMounted(() => {
  addPrefillAction(model.value)
  model.value.onComplete.add(onComplete)
})

onUnmounted(() => {
  model.value.onComplete.remove(onComplete)
  model.value.navigationBar.removeActionById('sv-prefill-demo')
})
</script>

<template>
  <q-card flat bordered class="overflow-hidden">
    <q-banner v-if="completed" class="bg-positive text-white">
      <template #avatar>
        <q-icon name="check_circle" />
      </template>
      <div class="text-weight-medium">Submitted</div>
      <div>Thank you. Your intake form has been submitted.</div>
      <template #action>
        <q-btn flat label="Edit response" @click="editResponse" />
      </template>
    </q-banner>
    <SurveyComponent v-else :model="model" />
  </q-card>
</template>
