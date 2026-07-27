import vike from "vike/plugin";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vike(), vue()],
  // Bind to IPv4 so http://127.0.0.1:3000 works on Windows
  server: {
    host: "127.0.0.1",
    port: 3000,
  },
  // Bundle SurveyJS for SSR so named ESM imports from the CJS/UMD build work
  ssr: {
    noExternal: [
      "survey-core",
      "survey-vue3-ui",
      "survey-creator-core",
      "survey-creator-vue",
    ],
  },
});
