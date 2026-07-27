<script setup lang="ts">
import { ref } from 'vue'
import NativeForm from '../../components/NativeForm.vue'
import SurveyForm from '../../components/SurveyForm.vue'

const surveyResult = ref<Record<string, unknown> | null>(null)

function onSurveyComplete(data: Record<string, unknown>) {
  surveyResult.value = data
}
</script>

<template>
  <div class="page">
    <header class="hero">
      <h1>SurveyJS v3 × Vike</h1>
      <p>
        SurveyJS Form Library in a Vike + Vue SSR app, side by side with a
        native Vue wizard. SurveyJS is server-rendered and hydrated on the client.
      </p>
    </header>

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
