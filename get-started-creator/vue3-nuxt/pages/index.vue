<script setup lang="ts">
import SurveyCreator from '~/components/SurveyCreator.vue'
</script>

<template>
  <div class="creator-shell">
    <ClientOnly>
      <SurveyCreator />
      <template #fallback>
        <p class="fallback">Loading Survey Creator…</p>
      </template>
    </ClientOnly>
  </div>
</template>

<style scoped>
.fallback {
  margin: 24px;
  font-family: system-ui, sans-serif;
  color: #5f6b7a;
}
</style>
