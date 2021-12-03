describe('Intercept Concept', () => {

    it.skip('How to replace wait by stubbing', () => {
        cy.visit('https://jsonplaceholder.typicode.com/')

        //spy the network call
        cy.intercept('GET', '/posts', { name: "Tejkumar Kempaiah" }).as('posts')

        //make an API call
        cy.get(`table:nth-of-type(1) a[href='/posts']`).click()

        cy.wait('@posts').then(function (res) {
            cy.log("---------------------")
            cy.log(JSON.stringify(res))
            cy.log("---------------------")
            console.log(res);
        })



    });


    it.skip('Spy & Stub Implementation', function () {

        cy.visit('https://jsonplaceholder.typicode.com/')

        //spy the network call & stub the response to be picked from fixture file
        cy.intercept('GET', '/posts', { fixture: "loginCred.json" }).as('posts')

        //make an API call
        cy.get(`table:nth-of-type(1) a[href='/posts']`).click()

        cy.wait('@posts').then(function (res) {
            console.log(typeof (res));
            console.log(res);
        })

    });

    it('Post call intercepting', () => {

        cy.visit('https://jsonplaceholder.typicode.com/')

        cy.intercept('POST','/posts/1',)

    });

});