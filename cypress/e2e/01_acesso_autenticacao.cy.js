import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';

describe('Cenários 1 e 3: Acesso, Logout e Segurança', () => {

 let user;
 before(() => {
  cy.fixture('users.json').then((data) => {
    user = data.validUser;
  });
 });

 it('Deve permitir o Login com credenciais válidas (UI)', () => {  
  cy.loginUI("apiacesso", "Api!1234"); 
  ProfilePage.getWelcomeMessage().should('contain', "apiacesso");
 });
 
 it('Deve realizar o Log out corretamente', () => {
  cy.loginUI("apiacesso", "Api!1234"); 
  ProfilePage.getWelcomeMessage().should('contain', "apiacesso");

  ProfilePage.logout();
 
  cy.url().should('include', Cypress.env('loginPath'));
  LoginPage.getLoginButton().should('be.visible');
});

 it('Deve negar o acesso a rotas restritas após o Log out', () => {
   cy.loginUI("apiacesso", "Api!1234"); 
    ProfilePage.getWelcomeMessage().should('contain', "apiacesso");
    ProfilePage.logout();

    ProfilePage.visitProfile(); 
    cy.get('#notLoggin-label').should('be.visible');
});
});