import { defineConfig } from "vite";

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: { input: { main: "index.html", embed: "embed.html" } },
  },
});
