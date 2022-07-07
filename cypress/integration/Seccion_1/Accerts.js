///<reference types="Cypress" />


describe("Accerts ",()=>{

    it(" ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get("#firstName").should("be.visible").type("test")
        cy.get("#lastName").should("be.enabled").type("test")
        
    })

})//cierre describe
