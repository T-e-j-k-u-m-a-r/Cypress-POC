describe('DD-Drag and Drop', () => {

    it('DD', () => {

        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        //cy.get('div#column-a').drag('div#column-b')
        //or below code usinf custom commands

        cy.dragAndDrop('div#column-a', 'div#column-b')
        cy.wait(3000)


        //Assert
        cy.get('div#column-a>header').should('have.text', 'B')
        cy.get('div#column-b>header').should('have.text', 'A')


    });


});