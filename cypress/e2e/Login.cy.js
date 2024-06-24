describe("Fixture Test Data",()=>{
    let userdata;
    let anotherData;
    beforeEach(()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.fixture("samplelogin").then((data)=>{
             userdata = data;
        })
        cy.fixture("example").then((data)=>{
             anotherData = data;
        })
    })
    it("Test Driven", ()=>{          
              cy.get("[placeholder='Username']").type(userdata.username);
              cy.get("[placeholder='Password']").type(userdata.password);
              cy.get("[type='submit']").click();
              cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
              .should("have.text", userdata.checktext)          
    })

    it("Test Driven", ()=>{        
             cy.get("[placeholder='Username']").type(userdata.username);
             cy.get("[placeholder='Password']").type(userdata.password);
             cy.get("[type='submit']").click();
             cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
             .should("have.text", userdata.checktext)         
     })

     it("Another test data", ()=>{
          cy.log(anotherData.name);
          cy.log(anotherData.email);
          cy.log(anotherData.body);
     }) 

})