// cypress/support/commands.js
import LoginPage from '../pages/LoginPage';

Cypress.Commands.add('loginUI', (username, password) => {
  LoginPage.visit();
  LoginPage.fillCredentials(username, password);
  LoginPage.submitLogin();
  cy.url().should('include', Cypress.env('profilePath'));
});

Cypress.Commands.add('loginAPI', (username, password) => {
  return cy.request({
    method: 'POST',
    url: `${Cypress.env('apiBaseUrl')}${Cypress.env('apiLogin')}`,
    body: { userName: username, password },
    failOnStatusCode: false
  }).then((response) => {
    console.log('loginAPI response:', response);
    const token = response.body?.token || response.body?.Token || response.body?.accessToken || response.body?.tokenValue || null;

    if (!token) {
      cy.log('loginAPI: token não encontrado. response.body = ' + JSON.stringify(response.body));
    } else {
      Cypress.env('authToken', token);
      cy.log('loginAPI: authToken salvo em Cypress.env');
    }

    return response;
  });
});
