const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "91vq58",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
