import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  workers: 2,
  use: { baseURL: "http://127.0.0.1:5173", reducedMotion: "reduce" },

  projects: [
    {
      name: "chromium",
      use: {
        browserName: "chromium",
        launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
          ? {
              executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
              args: ["--no-sandbox", "--disable-gpu"],
            }
          : {},
      },
    },
    { name: "firefox", use: { browserName: "firefox" } },
    { name: "webkit", use: { browserName: "webkit" } },
  ],

  webServer: {
    command: "npm run dev -- --host 127.0.0.1",
    url: "http://127.0.0.1:5173",
    reuseExistingServer: false,
  },
});
