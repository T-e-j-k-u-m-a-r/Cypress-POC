describe('Intercept Concept', () => {

    it.skip('UI Case', () => {

        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept.html')

        //verify if the no data is displayed on the table view
        cy.get(`table#xhrusers .start`).should('be.visible')

        //click on load 1 user and verify the data
        cy.get(`#loadSpecificUserXHR`).click()

        // cy.wait(5000)

        //Assert  

        cy.get(`table#xhrusers .start`).should('not.exist')
        cy.get(`table#xhrusers tbody tr td`).should('have.length', 6)

    });

    it.only('API Case', () => {

        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/intercept.html')
        //verify if the no data is displayed on the table view
        cy.get(`table#xhrusers .start`).should('be.visible')

        //spy
        cy.intercept('GET', '/users?*').as('users')

        //click on load 1 user and verify the data
        cy.get(`#loadThreeUsersXHR`).click()

        cy.wait('@users').then(function (res) {
            cy.get(`table#xhrusers > tbody > tr`).should('have.length', 3)
        })



    });

});