/// <reference  types='Cypress' />
require('cypress-xpath')


describe ('Prueba Json',()=>{

    before(function(){
        cy.fixture('archivo').then(function(data){

            globalThis.data=data
        })
    })
    
it('test', () => {

    cy.visit('https://demoqa.com/text-box'),
            cy.title().should('eq','ToolsQA')
            cy.wait(2000)
            cy.get('#userName').should('be.visible').type(data.name)
            cy.xpath("//input[@id='userEmail']").should('be.visible').type(data.email)
            cy.xpath("//textarea[@id='currentAddress']").should('be.visible').type(data.direccion)
            cy.xpath("//textarea[@id='permanentAddress']").should('be.visible').type(data.direccion2)

})
});
