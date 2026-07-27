// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-24',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  // Bind to IPv4 so http://127.0.0.1:3000 works on Windows
  // (default can listen on ::1 only).
  devServer: {
    host: '127.0.0.1',
    port: 3000,
  },
  app: {
    head: {
      title: 'SurveyJS v3 × Nuxt',
      meta: [
        {
          name: 'description',
          content: 'SurveyJS Form Library v3 integration demo in a Nuxt + Vue app',
        },
      ],
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    },
  },
})
