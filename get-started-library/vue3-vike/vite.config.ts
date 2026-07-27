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
});
