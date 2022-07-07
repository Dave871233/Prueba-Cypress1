///<reference types="Cypress" />


describe("Accerts ",()=>{

    it(" ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get("#firstName").should("be.visible").type("test")
        cy.get("#lastName").should("be.enabled").type("test")
        
    })


    it.only("YOutube", () => {
        cy.visit("https://www.sopitas.com/")
        ("//nav[@class='bg-yellow']//li[1]//a[1]")
        
    })




})//cierre describe
