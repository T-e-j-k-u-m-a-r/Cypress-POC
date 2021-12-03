import home from "../pages/HomePage";
import login from "../pages/LoginPage";

/**
 * Data Driven testing from the cred's in fixture file
 */

describe('Login Test', function () {

    // let cred;

    beforeEach(function () {

        //Note: Aliasing make the variable global in nature

        // cy.fixture('loginCredentials').then(function (cred) {
        //     this.cred = cred;
        // })

        //or -> both works
        cy.fixture('loginCredentials').as('cred')
    });

    it('TC01 - Valid Flow', function () {

        //navigate to app url
        login.navigateToAppURL()


        //enter username
        login.getUsername().type(this.cred.validCred.username)

        //enter password
        login.getPassword().type(this.cred.validCred.password)

        //click on submit button
        login.getSubmitBtn().click()

        //Assert for successfull authentication
        cy.url().as('homePagePath').then(function (homePagePath) {
            home.verifyLoginPass(homePagePath)
        })

        //logout
        home.getwelcomeMenu().click()
        home.getlogoutBtn().click()

    })

    it('TC01 - InValid Flow', function () {

        //enter username
        login.getUsername().type(this.cred.invalidCred.username)

        //enter password
        login.getPassword().type(this.cred.invalidCred.password)

        //click on submit button
        login.getSubmitBtn().click()

        //Assert for successfull authentication
        cy.url().as('homePagePath').then(function (homePagePath) {
            home.verifyLoginPass(homePagePath)
        })


    })
})