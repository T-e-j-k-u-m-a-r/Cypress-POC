// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//

//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const { default: login1 } = require("../integration/pages/loginPage1");
const login1 = require("../integration/pages/loginPage1");
const home = require("../integration/pages/HomePage");

//Importing modules
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cy-verify-downloads').addCustomCommand();
require('cypress-downloadfile/lib/downloadFileCommand')

//List of custom commands
Cypress.Commands.add("login", function () {

    cy.fixture('loginCred').then(function (cred) {

        cy.visit(cred.appURL)
        login1.getUn().type(cred.validCred.username)
        login1.getPw().type(cred.validCred.password)
        login1.getLoginBtn().click()
        home.getwelcomeMenu().then(function (note) {
            expect(note).to.contain(cred.home.welcomeText)
        })

    })

})

Cypress.Commands.add('getText', { prevSubject: "element" }, (ele) => {
    cy.wrap(ele).scrollIntoView()
    return cy.wrap(ele).invoke('text')
}

)


Cypress.Commands.add("login_boilerCode", function () {
    console.log("Enter the user name");
    console.log("Enter the password");
    console.log("click on login button");
    console.log("Verify authentication");
    console.log("logout");
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })

Cypress.Commands.add('scrollDown', function (value) {
    cy.scrollTo(0, value)
})


Cypress.Commands.add('scrollUp', function (value) {
    cy.scrollTo(value, 0)
})

Cypress.Commands.add('creteNewUser', function () {

})


Cypress.Commands.add('dragAndDrop', function (src, target) {

    cy.get(src).drag(target)
})


Cypress.Commands.add('getIframe', (iframe) => {
    return
    cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})

Cypress.Commands.add('handleAlertType1', (expectedText) => {
    cy.on('window:alert', (alertText) => {
        //TODO: drive the data from fixture file
        expect(alertText).to.equal(this.expectedText)
    })
})

Cypress.Commands.add('handleAlertType2', (expectedText) => {

    //case 1: 
    cy.on('window:confirm', (alertText) => {
        //TODO: drive the data from fixture file
        expect(alertText).to.equal(this.expectedText)
    })


    /**case 2 : To be implemented 
     * 
     */

})

Cypress.Commands.add('handleAlertType3', (textBeToEntered) => {

    //case 1:
    cy.window().then(($win) => {
        cy.stub($win, 'prompt').returns(textBeToEntered)

    })


    /**case 2: TODO: To be implemented
     * 
     */

})