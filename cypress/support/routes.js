class Routes {

    as = {
        
        // Articles
        postArticles: 'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',
        
        // Register | Login
        postUsers: 'POSTUsers',
        getUsersTags: 'GETUsersTags',
        getUsersArticles: 'GETUsersArticles',

        //Login
        postUsersLogin: 'POSTUsersLogin'
    }

    init(){
        // Articles
        cy.intercept('POST', '**/api/articles').as(this.as.postArticles);
        cy.intercept('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle);
        cy.intercept('GET', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesTitleComments);
        
        // Register | Login
        cy.intercept('POST', '**/api/users').as(this.as.postUsers);
        cy.intercept('GET', '**/api/tags').as(this.as.getUsersTags);
        cy.intercept('GET', '/api/articles/feed?limit=10&offset=0').as(this.as.getUsersArticles);

        //Login
        cy.intercept('POST', '**/api/users/login').as(this.as.postUsersLogin);
    }
}

export default new Routes();
