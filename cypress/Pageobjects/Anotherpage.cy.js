import login from "../Pageobjects/LoginObject";
let newlogin = new login();
beforeEach("",()=>{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

describe("Page Object Model", ()=>{
      it("POM", ()=>{     
           newlogin.buttonclick()
      })
 
})