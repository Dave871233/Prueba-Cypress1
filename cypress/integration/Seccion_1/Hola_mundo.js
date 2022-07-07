describe("Bienvenido al curso Cypress",()=>{

    it("Mi primer test - > Hola mundo ", () => {
        cy.log("hola mundo")
    })

    it("Segunto Test -> Campo Name", () => {
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("David")
        cy.wait(4000)
    })

})//cierre describe
