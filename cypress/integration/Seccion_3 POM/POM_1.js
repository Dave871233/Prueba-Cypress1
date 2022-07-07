import proyectouno_Po from '../../support/pageObject/proyecto_uno_po/proyectouno_po';


/// <reference  types='Cypress' />
import 'cypress-file-upload';
require('@4tw/cypress-drag-drop')
require('cypress-xpath')
require('cypress-plugin-tab')


describe ('Page object models',()=>{
    const claseuno= new proyectouno_Po
    claseuno.gohome()


it('test', () => {

    claseuno.SeccionUno("David","david@mail.com","direccion","permanente",1000)
})

});
