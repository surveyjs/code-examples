<script setup lang="ts">
import { computed, ref } from 'vue'
import { useQuasar } from 'quasar'
import NativeQuasarForm from '@/components/NativeQuasarForm.vue'
import SurveyForm from '@/components/SurveyForm.vue'

const $q = useQuasar()
const isDark = computed(() => $q.dark.isActive)

function toggleTheme() {
  $q.dark.toggle()
}

const surveyResult = ref<Record<string, unknown> | null>(null)

function onSurveyComplete(data: Record<string, unknown>) {
  surveyResult.value = data
}
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated :class="isDark ? 'bg-dark text-white' : 'bg-white text-dark'">
      <q-toolbar>
        <q-toolbar-title>
          <span class="text-weight-medium">SurveyJS v3 × Quasar</span>
          <span class="text-caption text-grey q-ml-md gt-xs">Form Library integration</span>
        </q-toolbar-title>
        <q-chip dense color="warning" text-color="white" class="q-mr-sm">
          Experimental adapter
        </q-chip>
        <q-btn
          flat
          round
          dense
          :icon="isDark ? 'light_mode' : 'dark_mode'"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="toggleTheme"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding class="q-pa-md">
        <q-banner rounded class="bg-info text-white q-mb-md">
          SurveyJS Form Library via
          <code>survey-vue3-ui@3.0.0-beta.8</code>, with an experimental
          theme bridge mapping Quasar
          <code>--q-*</code> tokens onto SurveyJS
          <code>--sjs2-*</code> tokens. Toggle light/dark — both columns follow
          the host theme.
        </q-banner>

        <div class="row q-col-gutter-md comparison-row">
          <div class="col-12 col-md-6 comparison-col comparison-col--survey">
            <div class="text-subtitle2 text-grey q-mb-sm">SurveyJS Form Library (bridged)</div>
            <SurveyForm @complete="onSurveyComplete" />
          </div>
          <div class="col-12 col-md-6 comparison-col comparison-col--native">
            <div class="text-subtitle2 text-grey q-mb-sm">Native Quasar baseline</div>
            <NativeQuasarForm />
          </div>
        </div>

        <q-card v-if="surveyResult" flat bordered class="q-mt-md">
          <q-card-section>
            <div class="text-subtitle1">Last SurveyJS submission</div>
            <pre class="text-caption" style="overflow: auto">{{
              JSON.stringify(surveyResult, null, 2)
            }}</pre>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>

    <q-footer class="bg-transparent text-grey text-center q-pa-sm text-caption">
      No official Quasar adapter in survey-core — theme bridge lives in
      <code>src/survey/quasarTheme.ts</code>
    </q-footer>
  </q-layout>
</template>

<style scoped>
@media (min-width: 1024px) {
  .comparison-col--survey {
    border-right: 1px solid rgba(0, 0, 0, 0.12);
  }

  :global(.body--dark) .comparison-col--survey {
    border-right-color: rgba(255, 255, 255, 0.18);
  }
}
</style>
