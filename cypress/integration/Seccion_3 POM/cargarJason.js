/// <reference  types='Cypress' />
require('cypress-xpath')


describe ('Prueba2 Json',()=>{

    before(function(){
        cy.fixture('archivo').as("datosarchivo")
    
    })
    
it('test carga de jason 2', () => {

    cy.visit('https://demoqa.com/text-box'),
            cy.title().should('eq','ToolsQA')
            cy.wait(2000)

            cy.get("@datosarchivo").then((data)=>{

                cy.get('#userName').should('be.visible').type(data.name)
                cy.xpath("//input[@id='userEmail']").should('be.visible').type(data.email)
                cy.xpath("//textarea[@id='currentAddress']").should('be.visible').type(data.direccion)
                cy.xpath("//textarea[@id='permanentAddress']").should('be.visible').type(data.direccion2)

            })



            

})
});