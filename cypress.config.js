const { defineConfig } = require("cypress");

module.exports = defineConfig({
  port: 5200,
  chromeWebSecurity: false,
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
