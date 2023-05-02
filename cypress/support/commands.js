// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (UserName,Password) => { 
    // cy.session([UserName,Password],() =>
    // {
        cy.visit('/apex-chat/login');
        cy.get('#P9999_USERNAME').type(UserName);
        cy.get('#P9999_PASSWORD').type(Password,{log:false});
        cy.get('#B6981150094220966017').click();
        cy.url().should("contain","spam-list")
//     },
//    {
//    cacheAcrossSpecs: true
//    }
//     )  
})