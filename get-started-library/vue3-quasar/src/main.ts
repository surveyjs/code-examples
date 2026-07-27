import { createApp } from 'vue'
import { Quasar, Dark, Notify } from 'quasar'
import quasarLang from 'quasar/lang/en-US'
import { surveyPlugin } from 'survey-vue3-ui'
import iconSet from 'quasar/icon-set/material-icons'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './style.css'

import App from './App.vue'

createApp(App)
  .use(Quasar, {
    plugins: { Dark, Notify },
    lang: quasarLang,
    iconSet,
  })
  .use(surveyPlugin)
  .mount('#app')
