const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl: 'https://apex.oracle.com/pls/apex/r/hashaam-admin',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
   env: {
    username: "AMJAD",
    password: "Amjad@123"

   }
  },
});
