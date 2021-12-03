import login from "../pages/LoginPage"

describe('Web Scrolling', () => {

    it.only('x,y Scroll', () => {

        cy.visit('https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy')

        cy.scrollDown()
        cy.wait(5000)
        cy.scrollUp()

    });

});