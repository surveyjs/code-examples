<script setup lang="ts">
import { ref } from 'vue'
import NativeForm from './NativeForm.vue'
import SurveyForm from './SurveyForm.vue'

const surveyResult = ref<Record<string, unknown> | null>(null)

function onSurveyComplete(data: Record<string, unknown>) {
  surveyResult.value = data
}
</script>

<template>
  <div class="page">
    <div class="comparison">
      <section>
        <h2 class="col-label">SurveyJS Form Library</h2>
        <SurveyForm @complete="onSurveyComplete" />
      </section>
      <section>
        <h2 class="col-label">Native Vue baseline</h2>
        <NativeForm />
      </section>
    </div>

    <div v-if="surveyResult" class="panel result">
      <h3>Last SurveyJS submission</h3>
      <pre>{{ JSON.stringify(surveyResult, null, 2) }}</pre>
    </div>
  </div>
</template>
