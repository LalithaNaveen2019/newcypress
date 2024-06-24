/// <reference types="Cypress"/>

import 'cypress-iframe';    

Cypress.Commands.add("linkClick",(sometext)=>{
    cy.get("a").contains(sometext).click();
})
 
Cypress.Commands.add("customVisit", (url)=>{
     cy.visit(url);
})
Cypress.Commands.add("buttonClick",(somecontent)=>{
      cy.get("button").contains(somecontent);
})

Cypress.Commands.add("inputuserName",(sometext)=>{
      cy.get("[name='username']").type(sometext)
})
Cypress.Commands.add("inputpassword",(sometext)=>{
    cy.get("[name='password']").type(sometext)
})
Cypress.Commands.add("SubmitbtnClick",()=>{
    cy.get("[type='submit']").click();
})
//linkClick
