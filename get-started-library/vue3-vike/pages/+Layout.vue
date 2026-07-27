<template>
  <div class="shell">
    <slot />
  </div>
</template>

<style>
:root {
  --bg: #f4f6f8;
  --surface: #ffffff;
  --text: #1a1a1a;
  --muted: #5f6b7a;
  --border: #d0d7de;
  --primary: #1867c0;
  --danger: #b00020;
  --radius: 8px;
  --gap: 12px;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  background: var(--bg);
  color: var(--text);
}

* {
  box-sizing: border-box;
}

.shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

.page .hero {
  margin-bottom: 24px;
}

.page .hero h1 {
  margin: 0 0 8px;
  font-size: 1.75rem;
}

.page .hero p {
  margin: 0;
  color: var(--muted);
  max-width: 72ch;
  line-height: 1.5;
}

.page code {
  font-size: 0.9em;
}

.comparison {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 960px) {
  .comparison {
    grid-template-columns: 1fr 1fr;
  }

  .comparison > section:first-child {
    border-right: 1px solid var(--border);
    padding-right: 24px;
  }
}

.col-label {
  margin: 0 0 8px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px;
  overflow: hidden;
}

.panel.loading {
  color: var(--muted);
  min-height: 120px;
  display: flex;
  align-items: center;
}

.panel.result {
  margin-top: 24px;
}

.panel.result pre {
  margin: 0;
  font-size: 0.75rem;
  overflow: auto;
}

.panel-title {
  margin: 0 0 4px;
  font-size: 1.15rem;
}

.panel-desc {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 0.9rem;
}

.steps {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.step {
  font-size: 0.8rem;
  color: var(--muted);
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid transparent;
}

.step.active {
  color: var(--primary);
  border-color: var(--primary);
  background: color-mix(in srgb, var(--primary) 8%, white);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap);
}

@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.9rem;
}

.field.full {
  grid-column: 1 / -1;
}

.field.half {
  max-width: 50%;
}

.field span,
.field legend {
  color: var(--muted);
  font-size: 0.8rem;
}

.field input,
.field select,
.field textarea {
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 8px 10px;
  font: inherit;
  background: transparent;
}

.field input[aria-invalid='true'],
.field select[aria-invalid='true'] {
  border-color: var(--danger);
}

.field fieldset,
fieldset.field {
  border: none;
  margin: 0;
  padding: 0;
}

.inline {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-right: 12px;
  font-size: 0.9rem;
}

.switch-row {
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: 16px;
}

.section {
  margin: 0 0 12px;
  font-size: 1rem;
}

.section.spaced {
  margin-top: 20px;
}

.spaced-top {
  margin-top: 16px;
}

.hint {
  color: var(--muted);
  font-size: 0.9rem;
  margin: 0 0 12px;
}

.history-row {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.radios {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.allergy {
  margin-bottom: 8px;
  align-items: end;
}

.check {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.err {
  color: var(--danger);
  font-size: 0.75rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.btn {
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  padding: 8px 14px;
  border: 1px solid transparent;
}

.btn-text {
  background: transparent;
  color: var(--primary);
  border: none;
  padding-left: 0;
  padding-right: 0;
}

.btn-outline {
  background: transparent;
  color: var(--primary);
  border-color: var(--primary);
}

.btn-primary {
  background: var(--primary);
  color: #fff;
}

.done {
  padding: 8px 0;
}

.done p {
  margin: 0 0 8px;
}
</style>
