///<reference types="Cypress" />
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require('cypress-xpath')




describe("Eventos del mouse ",()=>{

    it("Drag and drop  ", () => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.title("eq","The Internet")
        cy.wait(1500)
        cy.get("#column-a").drag("#column-b",{force:true})

        
    })



    it("Abrir pag en otra pestaña  ", () => {
        let tiempo =1000
        cy.visit("https://www.w3schools.com/tags/att_a_target.asp")
        cy.title("eq","HTML a target Attribute")
        cy.wait(tiempo)
        cy.contains("Try it Yourself »").invoke("removeAttr","target").click()

        
    })


    it("Mover Barra  ", () => {
        let tiempo =1000
        cy.visit("https://www.w3schools.com/howto/howto_js_rangeslider.asp")
        cy.title("eq","How To Create Range Sliders")
        cy.wait(tiempo)
        cy.get ("#id2").invoke("attr","value","80")
   
    })


    it.only("Mover Barra  ", () => {
        let tiempo =100
        cy.visit("http://automationpractice.com/index.php")
        cy.title("eq","My Store")
        cy.wait(tiempo)
        const datos=[];

        cy.get("#center_column .product-name").each(($el,index,$list)=>{
            datos[index]=$el.text()
        }).then(()=>   {

     for    (let x=0; x<datos.length; x++){
            cy.get("#center_column .product-name").eq(x).click({force:true})
            cy.wait(tiempo)
            cy.get("#quantity_wanted").should("be.visible").clear().type("4")
            cy.wait(tiempo)
            cy.get("#group_1").select("M").should("have.value","2")
            cy.wait(tiempo)
            cy.get(".exclusive > span").should("be.visible").click({force:true})
            cy.wait(tiempo)
            cy.xpath("//span[contains(.,'Proceed to checkout')]").click({force:true})
            cy.wait(tiempo)
            cy.get(".icon-home").should("be.visible").click({force:true})
            }

    })
    })



})//cierre describe