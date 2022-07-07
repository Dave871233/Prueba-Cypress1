///<reference types="Cypress" />
require('cypress-xpath')
import 'cypress-file-upload';




describe("Opciones click  ",()=>{

    it("CLicks sencillos", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get("#uploadPicture").should("be.visible").click({Force: true})
       
        
    })


    it.only("CLicks por coordenadas ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get("#uploadPicture").should("be.visible").click(70,10)
       
        
    })

    it("Select por xpath  ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.xpath("//*[@id='userNumber']").should("be.visible").type("556798")
       
        
    })


    it.only("Select por contains   ", () => {
        cy.visit("https://demoqa.com/automation-practice-form")
        cy.title().should('eq','ToolsQA')
        cy.get(".custom-control-label").contains("Female").click()
        cy.wait(1000)
        cy.get(".custom-control-label").contains("Male").click()
        
        const ruta='fondo.jpg'
        
        cy.get('[type="file"]').attachFile(ruta)
       



        
    })


})//cierre describe
