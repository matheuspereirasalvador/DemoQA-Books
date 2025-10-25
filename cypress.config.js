const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },

    supportFile: 'cypress/support/e2e.js',

    baseUrl: 'https://demoqa.com',

    env: {
      loginPath: '/login',
      registerPath: '/register',
      profilePath: '/profile',

      apiBaseUrl: 'https://demoqa.com',
      apiBooks: '/BookStore/v1/Books',
      apiLogin: '/Account/v1/GenerateToken'
    }
  },
});
