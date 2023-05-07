import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "qv89m8",
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  videosFolder: "cypress/videos",
  screenshotsFolder: "cypress/screenshots",
  chromeWebSecurity: false,
  defaultCommandTimeout: 5000,

  e2e: {
    specPattern: "cypress_test.js"
  },
});