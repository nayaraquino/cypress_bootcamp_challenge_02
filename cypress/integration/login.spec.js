/// <reference types= "cypress" />

import login from '../support/pages/login'
import Routes from '../support/routes'

context('Realize login', { browser: '!firefox' }, () => {
    it('Login', () => {
        cy.get(Routes);
        login.accessPage()
        login.realizeLogin()
        login.submeterLoginForm()
        login.verifySuccessfulLogin
    });
});