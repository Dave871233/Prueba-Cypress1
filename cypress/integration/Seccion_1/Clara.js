///<reference types="Cypress" />


describe("Bienvenido al curso Cypress",()=>{

      Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

    it(" ", () => {
        cy.visit("https://test.clara.cc/auth/login")
        cy.wait(2000)

        cy.get("#email").type("david.cruz+admin1@clara.team")

        cy.get("#password").type("Clara1234!QA")
        cy.get(".MuiButton-label").should("be.visible").click()
        cy.wait(4000)
       
        
    })

})//cierre describe