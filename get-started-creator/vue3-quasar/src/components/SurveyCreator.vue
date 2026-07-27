<script setup lang="ts">
import { onMounted, shallowRef } from 'vue'
import type { ICreatorOptions } from 'survey-creator-core'
import { registerCreatorTheme, SurveyCreatorModel } from 'survey-creator-core'
import SurveyTheme from 'survey-core/themes'
import { SurveyCreatorComponent } from 'survey-creator-vue'
import 'survey-core/survey-core.min.css'
import 'survey-creator-core/survey-creator-core.min.css'
import 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/ext-searchbox'

registerCreatorTheme(SurveyTheme)

const creatorOptions: ICreatorOptions = {
  autoSaveEnabled: true,
}

const defaultJson = {
  pages: [
    {
      name: 'Name',
      elements: [
        {
          name: 'FirstName',
          title: 'Enter your first name:',
          type: 'text',
        },
        {
          name: 'LastName',
          title: 'Enter your last name:',
          type: 'text',
        },
      ],
    },
  ],
}

const creator = shallowRef<SurveyCreatorModel | null>(null)

onMounted(() => {
  const model = new SurveyCreatorModel(creatorOptions)
  model.text =
    window.localStorage.getItem('survey-json') || JSON.stringify(defaultJson)
  model.saveSurveyFunc = (saveNo: number, callback: (no: number, ok: boolean) => void) => {
    window.localStorage.setItem('survey-json', model.text)
    callback(saveNo, true)
  }
  creator.value = model
})
</script>

<template>
  <SurveyCreatorComponent v-if="creator" :model="creator" />
</template>
