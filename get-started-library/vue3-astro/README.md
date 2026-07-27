# SurveyJS v3 × Astro

Side-by-side comparison of SurveyJS Form Library v3 and a native Vue wizard inside an [Astro](https://astro.build/) + Vue islands app.

SurveyJS mounts with `client:only="vue"` because the library needs browser APIs.

## Stack

- Astro
- Vue 3 (`@astrojs/vue`)
- `survey-core` / `survey-vue3-ui` `3.0.0-beta.8`

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
