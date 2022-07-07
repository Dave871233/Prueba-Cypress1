Given('Abrir el navegador principal',()=>{
    cy.visit("https://demoqa.com/text-box")
})

When ('Cargando nombre',()=>{
    cy.get('#userName').should('be.visible').type('david')
    cy.wait(500)
})

When ('Cargando email',()=>{
    cy.get('#userEmail').should('be.visible').type('tes@mail.com')
    cy.wait(500)
})

And  ('Cargando la direccion',()=>{
    cy.get('#currentAddress').should('be.visible').type('direccion')
    cy.wait(500)
})

Then ('Validar nombre de la pagina',()=>{
    cy.title().should('eq','ToolsQA')
})
