const { defineConfig } = require("cypress");

module.exports = defineConfig({
  port: 5200,
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
