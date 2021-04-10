const faker = require('faker')
const el = require('../register/elements').ELEMENTS
import Routes from '../../routes'

class Register {
    accessPage(){
        cy.visit('register');
    }   
    fillForm(){
        cy.get(el.inputUserName).type(faker.name.firstName() + faker.name.lastName());
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('Senha12345!');
    }
    submitPost(){
        cy.get(Routes);
        cy.get(el.buttonSubmit).click();
    }
    verifyLoginWasSucessed(){
        cy.wait('@POSTUsers').then((postUsers) => {
            expect(postUsers.response.statusCode).to.eq(200)
        });
        cy.wait('@GETUsersTags').then((getUsersTags) => {
            expect(getUsersTags.response.statusCode).to.eq(200)
        });
        cy.wait('@GETUsersArticles').then((getUsersArticles) => {
            expect(getUsersArticles.response.statusCode).to.eq(200)
        });
    }
}

export default new Register();