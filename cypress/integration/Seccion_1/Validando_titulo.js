///<reference types="Cypress" />


describe("Validando titulo ",()=>{


    it("Test Validar titulo pagina ", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.title().should('eq','ToolsQA')
        cy.log("El titulo es correcto")
        
    })

})//cierre describe
