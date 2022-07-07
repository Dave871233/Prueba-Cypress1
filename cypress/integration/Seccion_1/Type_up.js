///<reference types="Cypress" />


describe("Type up",()=>{

    it(" ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#userName").type('{pageup}')
        cy.wait(2000)
        
        
    })


    it.only(" ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.wait(1000)
        cy.get("#userName").type('{pagedown}')
        cy.wait(2000)
        
        
    })

})//cierre describe