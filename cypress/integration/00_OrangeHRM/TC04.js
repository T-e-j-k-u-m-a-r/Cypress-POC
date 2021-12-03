/**
 * Print all text present in the login screen
 */

import login from "../pages/LoginPage"

describe('Get Text Demo', () => {

    it('Cypress command to get a text of an element', () => {

        //cy.login_real()

        login.navigateToAppURL()
        login.getLoginPanelLabelName().getText().as('lname')

        // login.getLoginPanelLabelName().getText().then(function (labelName) {
        //     console.log(labelName);
        // })

        cy.get('@lname').then(function (labelNaam) {
            console.log(labelNaam);
        })

    });

});