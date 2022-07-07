///<reference types="Cypress" />
require('cypress-xpath')

describe("Contains en un padre   ",()=>{

    it(" ", () => {
        cy.visit("http://automationpractice.com/index.php")
        cy.title().should('eq','My Store')
        cy.get("#block_top_menu").contains("Women").click() 
        cy.get(".product-container").find(".product-image-container").eq(3).click() // las clases llevan . 
        cy.get("#product_condition .editable").then((e)=>{
            //cy.log(e.text())
            let estado= e.text()
            //cy.log(estado)
            if(estado=="New"){

                cy.log("el vestido es nuevo ")
            }
         })

         cy.get("#our_price_display").then((e)=>{
             cy.log(e.text())
             let precio= e.text()
             precio = precio.slice(1,3)
             cy.log(precio)

             if(precio > 30){
                cy.log("Mayor a 30")
                cy.xpath("//*[@id='columns']/div[1]/a[2]").click()
             }   
             else{
                 cy.log("comprar vestido ")
                 cy.get("#add_to_cart").click()
             }  
         })
    })





})//cierre describe



