// @ts-check
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

const root = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  // Bind to IPv4 so http://localhost:4321 works on Windows
  // (default can listen on ::1 only, which browsers often fail to open).
  server: {
    host: '127.0.0.1',
  },
  vite: {
    resolve: {
      // Package "main" is UMD/CJS; point SSR/prerender at the ESM build for named imports.
      alias: {
        'survey-vue3-ui': path.resolve(
          root,
          'node_modules/survey-vue3-ui/survey-vue3-ui.es.js',
        ),
      },
    },
    ssr: {
      noExternal: ['survey-core', 'survey-vue3-ui'],
    },
  },
})
