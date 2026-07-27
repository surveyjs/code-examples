<script setup lang="ts">
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import { Model } from 'survey-core'
import { SurveyComponent } from 'survey-vue3-ui'
import { medicalFormJson, medicalFormSample } from '~/survey/medicalForm'
import { compactTheme } from '~/survey/compactTheme'

import 'survey-core/survey-core.min.css'

const emit = defineEmits<{
  complete: [data: Record<string, unknown>]
}>()

function createSurveyModel() {
  const survey = new Model(medicalFormJson)
  survey.applyTheme(compactTheme)
  return survey
}

const model = shallowRef(createSurveyModel())
const completed = ref(false)

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
  <div class="panel">
    <div v-if="completed" class="done">
      <p><strong>Submitted</strong></p>
      <p>Thank you. Your intake form has been submitted.</p>
      <button type="button" class="btn btn-text" @click="editResponse">Edit response</button>
    </div>
    <SurveyComponent v-else :model="model" />
  </div>
</template>
