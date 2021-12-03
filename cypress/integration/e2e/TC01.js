/**
 * Objective: Login and create new user
 * @author: Tejkumar
 */

import login from "../pages/LoginPage"
import home from "../pages/HomePage";

describe('Login -> Create new user', function () {

    beforeEach(function () {
        cy.fixture('loginCred').then(function (cred) {
            this.cred = cred;
        })
    })

    it('TC01-RT33445-AzureTeam', function () {

        login.navigateToAppURL()
        login.getUsername().type(this.cred.validCred.username)
        login.getPassword().type(this.cred.validCred.password)
        login.getSubmitBtn().click()
        home.getwelcomeMenu().then(function (note) {
            expect(note).to.contain(this.cred.home.welcomeText)
        })
        home.getwelcomeMenu().click()
        home.getlogoutBtn().click()
        login.getLoginPanelLabelName().invoke('text').then(function (panelName) {
            expect(panelName).to.eq(this.cred.loginPage.panelName)
        })

    });

});