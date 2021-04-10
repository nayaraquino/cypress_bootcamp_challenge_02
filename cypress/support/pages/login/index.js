const el = require('../login/elements').ELEMENTS
import Routes from '../../routes'

class Login{
    accessPage(){
        cy.visit('login');
    }
    realizeLogin(){
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }
    submeterLoginForm(){
        cy.get(Routes);
        cy.get(el.buttonLogin).click();
    }
    verifySuccessfulLogin(){
        cy.wait('@POSTUsersLogin').then((postUsersLogin) => {
            expect(postUsersLogin.response.statusCode).to.eq(200)
        });
        cy.wait('@GETUsersTags').then((getUsersTags) => {
            expect(getUsersTags.response.statusCode).to.eq(200)
        });
        cy.wait('@GETUsersArticles').then((getUsersArticles) => {
            expect(getUsersArticles.response.statusCode).to.eq(200)
        });
    }
}

export default new Login();