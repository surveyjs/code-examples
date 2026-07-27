# SurveyJS Creator v3 × Astro

Get-started demo of SurveyJS Creator v3 inside an [Astro](https://astro.build/) + Vue islands app.

The Creator island uses `client:only="vue"` because it relies on `window`, `localStorage`, and Ace Editor.

## Stack

- Astro
- Vue 3 (`@astrojs/vue`)
- `survey-creator-vue` / `survey-creator-core` / `survey-core` / `survey-vue3-ui` `3.0.0-beta.8`

## Run

```bash
npm install
npm run dev
```

Open http://127.0.0.1:4321/ (or the URL printed in the terminal).

To preview the production build:

```bash
npm run build
npm run preview
```
