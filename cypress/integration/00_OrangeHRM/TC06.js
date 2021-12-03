describe('CBs / Rbs', () => {

    it.skip('Cbs', () => {

        cy.visit('https://the-internet.herokuapp.com/checkboxes')

        cy.get(`input[type='checkbox']:nth-of-type(1)`).as('cb1')

        //assert default ch1 state
        cy.get('@cb1').should('not.be.checked')

        //check & assert
        cy.get('@cb1').check().should('be.checked')

        //uncheck & assert 
        cy.get('@cb1').uncheck().should('not.be.checked')

    });

});