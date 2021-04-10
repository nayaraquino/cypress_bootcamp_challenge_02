const faker = require('faker')
const el = require('../articles/elements').ELEMENTS
import Routes from '../../routes'

class Articles {
    accessForm(){
        cy.get(el.linkButtonNewPost).click();
    }
    fillForm(){
        cy.get(el.inputTitle).type('Agilizei Title');
        cy.get(el.inputDescription).type('Cypress');
        cy.get(el.textareaParagraph).type(faker.lorem.paragraph());
        cy.get(el.inputTag).type('cypress');
    }
    submeterPost(){
        cy.get(Routes);
        cy.get(el.buttonUpPost).click();   
    }

    verifyPostWasRegistred(){
        cy.wait('@POSTArticles').then((postArticlesResponse) => {
            expect(postArticlesResponse.response.statusCode).to.eq(200)
        });

        cy.wait('@GETArticlesTitle').then((getArticlesTitleResponse) => {
            expect(getArticlesTitleResponse.response.statusCode).to.eq(200)
        });

        cy.wait('@GETArticlesTitleComments').then((getArticlesTitleCommentsResponse) => {
            expect(getArticlesTitleCommentsResponse.response.statusCode).to.eq(200)
        });
    }
}

export default new Articles();