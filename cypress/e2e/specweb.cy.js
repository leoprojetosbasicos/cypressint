/// <reference types="cypress" />

import locators from "../support/locators"

/*OBS o objetivo e demonstrar apenas o conhecimento sobre os comandos PARTE RELATIVA como ORGANIZACAO ou IDEIAS de teste etc NAO E O MEU FOCO 
aqui o foco E APENAS EM COISAS OBEJTIVAS*/

describe('utilizando o github actions',() =>{

    before('',()=>{
        cy.visit("/")
    })
    
    
    it('radiobutton exemplo',()=>{
        let check = '2'
	    switch(check){
		    case '1':
			    cy.get(locators.radiobutton.opcao1).click().should('be.checked')
		    break;
		    case '2':
			    cy.get(locators.radiobutton.opcao2).click().should('be.checked')
		    break;
		    case '3':
			    cy.get(locators.radiobutton.opcao3).click().should('be.checked')
		    default:
		    break;	
	    }

    })
})



