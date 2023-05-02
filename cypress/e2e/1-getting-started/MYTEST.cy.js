describe('My First Test', () => {
    beforeEach(() => {
        // cy.visit('/apex-chat/login');
        // var UserName = Cypress.env("username");
        // var Password = Cypress.env("password");
        // cy.get('#P9999_USERNAME').type(UserName);
        // cy.get('#P9999_PASSWORD').type(Password,{log:false});
        // cy.get('#B6981150094220966017').click();
        var UserName = Cypress.env("username");
        var Password = Cypress.env("password");
        cy.login(UserName,Password);
      
        // cy.url().should("contain","spam-list")
        //    .then ($url => {
        //     window.loggedInPage = $url;
        //    }
        //     );  
      //  cy.getCookie("ORA_WWV_PACKAGED_APPLICATIONS").then($cookie => {
      //      window.appCookie = $cookie.value;
      //  })          
    });
    
    
    it('Visits the User Page', () => {
      cy.visit('/apex-chat/spam-list');
      cy.get('#R7240194550676808709_heading').should("contain","ADD/REMOVE");
    })



    it('Visits again', () => {
      cy.visit('/apex-chat/app-users');
      cy.get('#R7041252388767179254_heading').should("contain","APP");
    })
  })
  