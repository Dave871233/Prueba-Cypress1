class proyectouno_Po{
    
    gohome(){
        let tiempo=1000
        before (()=>{

        
            cy.visit('https://demoqa.com/text-box'),
            cy.title().should('eq','ToolsQA')
            cy.wait.tiempo

        })
    }

    SeccionUno(name,email,adress,permanentaddress,t){
        let tiempo=t
        cy.xpath("//input[@id='userName']").should('be.visible').type(name)
        cy.wait(tiempo)
        cy.xpath("//input[@id='userEmail']").should('be.visible').type(email)
        cy.wait(tiempo)
        cy.xpath("//textarea[@id='currentAddress']").should('be.visible').type(adress)
        cy.wait(tiempo)
        cy.xpath("//textarea[@id='permanentAddress']").should('be.visible').type(permanentaddress)
        cy.wait(tiempo)
        cy.xpath("//button[@id='submit']").click()

    }

}//final clase 

export default proyectouno_Po;
