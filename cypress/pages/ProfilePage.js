class ProfilePage {
    getLogoutButton() {
        return cy.get('#submit');
    }

    getDeleteAccountButton() {
        return cy.get('#delete-account-button');
    }

    getWelcomeMessage() {
        return cy.get('#userName-value');
    }

    logout() {
        this.getLogoutButton().click();
    }
    
    deleteAccount(confirm = true) {
        if (confirm) {
            cy.on('window:confirm', () => true);
        }
        this.getDeleteAccountButton().click();
    }
    
    visitProfile() {
        cy.visit(Cypress.env('profilePath'));
    }
}

export default new ProfilePage();