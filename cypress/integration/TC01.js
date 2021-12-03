import home from "./pages/HomePage";
import login from "./pages/LoginPage";

/**
 * Data Driven testing from the cred's in config(cypress.json) file
 * Note: The env protocol is an array of environments like staging, qa, pre-prod
 */

describe('Login Test', function () {

    beforeEach(function () {
        login.navigateToAppURL()
    });


    //Login test via custom commands
    it.skip('Login Test', () => {

        cy.login();

    });

    it.only('TC01 - Valid Flow', function () {

        let qa = Cypress.env('qa')

        //enter username
        login.getUsername().type(qa.username)

        //enter password
        login.getPassword().type(qa.password)

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


})