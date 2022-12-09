const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
      video: false,
      viewportWidth: 1600,
      viewportHeight: 900,
      chromeWebSecurity: false,
      numTestsKeptInMemory: 5,
      excludeSpecPattern: '*.js',
      pageLoadTimeout: 10000,
      defaultCommandTimeout: 10000,
      specPattern: 'cypress/e2e/**/*.cy.{ts,tsx}',
      supportFile: 'cypress/support/e2e.ts',

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
