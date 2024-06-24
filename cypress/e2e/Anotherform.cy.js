 describe("GET API",()=>{
      it.skip("GET CALL",()=>{
          cy.request({
               method: "GET",
               url: "https://jsonplaceholder.typicode.com/users/2"
          })
          .then((res)=>{
                expect(res.status).to.eq(200);
                expect(res.body).to.have.property("username");
                expect(res.body.username).to.eq("Antonette")
                expect(res.body.address).to.have.property("city");
                expect(res.body.address.city).to.eq("Wisokyburgh")
          })
      })
         
      it("News",()=>{
           cy.request({
                method: "GET",
                url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=da083256778d4c069bc37db6aeebff4f"
           }).then((res)=>{
                cy.log(res.body.articles);
                expect(res.body.articles.source).to.have.property("id")
           })
      })
   
 

 })