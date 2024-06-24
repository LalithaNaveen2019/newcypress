describe("Custom Sample", ()=>{
    //  it("custom commands", ()=>{
    //       cy.customVisit("https://demo.opencart.com/");         
    //       cy.linkClick("MacBook");
    //  })

    // it("button",()=>{
    //      cy.visit("https://getbootstrap.com/docs/4.0/examples/pricing/");
    //      cy.buttonClick("Get started");
    //      cy.linkClick("Cool stuff");
    // })

    it("submitclick", ()=>{
         cy.customVisit("https://www.aimoretechnologies.com/");
         cy.viewport(1920,1080)
        //   cy.inputuserName("Admin");
        //   cy.inputpassword("admin123")
        //   cy.SubmitbtnClick();
        //   cy.linkClick("Admin");
        //   cy.linkClick("PIM");
         cy.linkClick("Courses & Certifications").trigger("mouseover");
         cy.linkClick("DevOps");

          
    })

      
})