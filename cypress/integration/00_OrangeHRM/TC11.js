describe('Hover Demo', () => {

    it('hOver', () => {

        cy.visit('http://codenboxautomationlab.com/practice/#top')

        cy.get(`fieldset[style*='margin-bottom']>legend`).scrollIntoView().realHover

        cy.wait(3000)

        cy.get(`div[class*="mouse-hover-content"]>a:nth-of-type(1)`).click()

        cy.wait(3000)
    });

});