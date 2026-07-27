<template>
  <div class="shell">
    <slot />
  </div>
</template>

<style>
html,
body {
  margin: 0;
  height: 100%;
}

.shell {
  height: 100vh;
  width: 100vw;
}

.fallback {
  margin: 24px;
  font-family: system-ui, sans-serif;
  color: #5f6b7a;
}
</style>
