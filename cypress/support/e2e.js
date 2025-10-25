import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  if (err && err.message && err.message.includes('Script error')) {
    return false;
  }
  return false;
});
