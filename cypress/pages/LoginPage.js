class LoginPage {
    getUsernameField() {
        return cy.get('#userName');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getLoginButton() {
        return cy.get('#login');
    }

    getErrorMessage() {
        return cy.get('.error-message');
    }

    visit() {
        cy.visit(Cypress.env('loginPath'));
    }

    fillCredentials(username, password) {
        this.getUsernameField().type(username);
        this.getPasswordField().type(password);
    }
    
    submitLogin() {
        this.getLoginButton().click();
    }
}
export default new LoginPage();