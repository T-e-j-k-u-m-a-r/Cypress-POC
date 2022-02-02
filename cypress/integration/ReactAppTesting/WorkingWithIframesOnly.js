describe('Iframes', () => {

    it.only('TC01', () => {
        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/iframepage')

        //Way 1: Using custom commands


        /**FIXME:: Important Note: Generally in case of apps developed using react
         * 
         All the indenpently needed sections of an HTML are embedded inside an iframe
         And to work with all types of web elements within an iframe. 

         The child API used is within() not then() or its()
         * 
         * */

        cy.getIframe('#myFrame').within(function (frm) {
            cy.get(`td input[name='Channel Name']`).type('Tejkumar')
            cy.get(`td input[name='date']`).type('2021-11-23')

            cy.get(`form[onsubmit*='return false'] input`).scrollIntoView()
            cy.get(`form[onsubmit*='return false'] input`).click()

            //Assert
            cy.get("fieldset#myList li").then(function (text) {
                expect(text).to.contain("FIND input[type='submit']")
            })
        })

    });

    it.skip('TC02', () => {

        cy.visit('https://qaboxletstestcypresspracticesite.netlify.app/iframepage')

        //Way 2: without using custom command
        //Scenario: Enter channel name and date

        cy.get('#myFrame')
            .its('0.contentDocument.body')
            .should('be.visible')
            .within(function (frm) {

                cy.get(`td input[name='Channel Name']`).scrollIntoView()
                cy.get(`td input[name='Channel Name']`).type('Tejkumar')
                cy.get(`td input[name='date']`).type('2021-11-23')
            })

        cy.get('#myFrame')
            .its('0.contentDocument.body')
            .should('be.visible')
            .within(function (frm) {
                cy.get(`form[onsubmit*='return false'] input`).scrollIntoView()
                cy.get(`form[onsubmit*='return false'] input`).click()

                //Assert
                cy.get("fieldset#myList li").then(function (text) {
                    expect(text).to.contain("FIND input[type='submit']")
                })

            })
    })
});