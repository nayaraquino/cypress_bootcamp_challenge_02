/// <reference types="cypress" />

import register from '../support/pages/register'
import Routes from '../support/routes'

context('Register', () => {
    it('Register new user', () => {
        cy.get(Routes);
        register.accessPage()
        register.fillForm()
        register.submitPost()
        register.verifyLoginWasSucessed()
    });
});