///<reference types="Cypress" />
require('cypress-xpath')

describe("Checkbox ",()=>{

    it(" ", () => {
        cy.visit("https://www.ericmmartin.com/code/jquery/checkbox.html")
        cy.get("[type='checkbox']").check().should("be.checked")
        
    })




    it.only(" enter google ", () => {
        cy.visit("https://www.google.com")
        cy.title().should('eq','Google')
        
        cy.get("#.XDyW0e").should("be.visible").click
        //cy.get("[name='q']").should("be.visible").type("Ferrari").type("{enter}")
        //cy.get("voiceSearchButton").click
    })

        

        






})//cierre describe
