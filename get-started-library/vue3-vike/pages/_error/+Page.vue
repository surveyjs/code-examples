<template>
  <div v-if="is404">
    <h1>404 Page Not Found</h1>
    <p>{{ abortReason }}</p>
  </div>
  <div v-else>
    <h1>500 Internal Server Error</h1>
    <p>Something went wrong.</p>
  </div>
</template>

<script lang="ts" setup>
import { usePageContext } from 'vike-vue/usePageContext'
const pageContext = usePageContext()
const is404 = pageContext.is404
const abortReason = pageContext.abortReason
</script>
