# SurveyJS Creator v3 × Vike

Get-started demo of SurveyJS Creator v3 inside a [Vike](https://vike.dev/) + Vue app.

The Creator page uses `ssr: false` and mounts after hydration because Creator relies on `window`, `localStorage`, and Ace Editor.

## Stack

- Vike + `vike-vue`
- Vue 3
- `survey-creator-vue` / `survey-creator-core` / `survey-core` / `survey-vue3-ui` `3.0.0-beta.8`

## Run

```bash
npm install
npm run dev
```

Open http://127.0.0.1:3000/ (or the URL printed in the terminal).
