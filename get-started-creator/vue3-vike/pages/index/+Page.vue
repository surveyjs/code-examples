<script setup lang="ts">
import { onMounted, ref } from 'vue'
import SurveyCreator from '../../components/SurveyCreator.vue'

// Defer mounting Creator until the client — Ace / localStorage need `window`.
const ready = ref(false)
onMounted(() => {
  ready.value = true
})
</script>

<template>
  <SurveyCreator v-if="ready" />
  <p v-else class="fallback">Loading Survey Creator…</p>
</template>
