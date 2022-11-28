const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.rahulshettyacademy.com/AutomationPractice/",
    viewportWidth: 1024,
    viewportHeight: 768,
    chromeWebSecurity: false,
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
