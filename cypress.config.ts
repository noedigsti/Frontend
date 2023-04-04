/// <reference types="cypress" />

const config: Cypress.PluginConfig = (on, config) => {
  // Add custom configuration options here
  return {
    ...config,
    baseUrl: "http://localhost:3000",
    defaultCommandTimeout: 10000,
    video: false,
    fixturesFolder: "cypress/fixtures",
    integrationFolder: "cypress/integration",
    supportFile: "cypress/support/index.ts",
    ignoreTestFiles: "**/examples/*.spec.ts",
  };
};

export default {
  ...config,

  e2e: {
    setupNodeEvents(on : any, config : any) {
      // implement node event listeners here
    },
  },
};
