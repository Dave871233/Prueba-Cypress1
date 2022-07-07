///<reference types="Cypress" />
require('cypress-plugin-tab')



describe("Funciones para tab",()=>{

    it("Type --> Tab ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get("#firstName").type("david").tab().
        type("Cruz")
    })





})//cierre describe
