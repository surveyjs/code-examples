// @ts-check
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  // Bind to IPv4 so http://localhost:4321 works on Windows
  // (default can listen on ::1 only, which browsers often fail to open).
  server: {
    host: '127.0.0.1',
  },
})
