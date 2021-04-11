/// <reference types="cypress" />

import articles from '../support/pages/articles/index'
import Routes from '../support/routes'

context('Posts', () => {
    beforeEach(() => {
        cy.get(Routes);
        cy.backgroundLogin()
        articles.accessForm()
    }); 
    it('Creates new post', () => {
        articles.fillForm()
        articles.submitPost()
        articles.verifySuccessfullyRegistredPost()    
    });
})