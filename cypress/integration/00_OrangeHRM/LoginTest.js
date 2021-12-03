import login1 from "../pages/loginPage1"

describe('Login Test - all Flows', () => {

    it('TC01', () => {

        //Invoking reel custom commnd with boiler plat code
        cy.login_reel()

    });

    it.only('TC02', () => {

        //Login script with POM & fixtures implemented
        cy.fixture('loginCred').then(function (cred) {

            cy.visit(cred.appURL)
            login1.getUn().type(cred.username)
            login1.getPw().type(cred.password)
            login1.getLoginBtn().click()

            //login1.getWelcomeText().should('have.text', cred.welcomeText)
        })

    });

    it('TC03', () => {

        //Invoking login from custom command where POM is implemented
        cy.login()

    });


});