class login{

    setusername(username){
         cy.get("[placeholder='Username']").type(username)
    }

    setpassword(password){
        cy.get("[placeholder='Password']").type(password)
    }
    buttonclick(){
        cy.get("[type='submit']").click()
    }
}


export default login;