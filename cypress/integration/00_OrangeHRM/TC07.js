describe('DD-DropDown', () => {

    it('DD-Type1', () => {

        cy.visit('https://the-internet.herokuapp.com/dropdown')

        cy.title().as('appTitle')

        cy.get('@appTitle').then((title) => {
            console.log("app Title :: " + title);
        })

        cy.get('select#dropdown').select('Option 2')

        cy.wait(3000)

        //assert value of option tag: TODO: 1 
        cy.get('select#dropdown').should('have.value', '2')

        //assert text of option tag: TODO: 2
        cy.get('select#dropdown').find(":selected").contains('Option 2')

        //assert text of option tag: TODO: 3
        cy.get('select#dropdown').find(":selected").should('have.text', 'Option 2')

    });

});