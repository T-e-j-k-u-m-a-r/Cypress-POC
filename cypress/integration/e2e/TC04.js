
before(function () {
    //cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

    cy.visit('http://demo.automationtesting.in/Alerts.html')

    cy.fixture('loginCred').then(function (data) {
        this.data = data
    })
})


it.skip('Confirm Alert', function () {

    // confirm alert - case 1
    cy.on('window:confirm', function (alertText) {
        expect(alertText).eq('I am a JS Confirm')
    })
    cy.contains(`Click for JS Confirm`).click()

    //confirm alert - case 2
    cy.on('window:confirm', function (alertText) {
        expect(alertText).eq('I am a JS Confirm')
        return false
    })
    cy.contains(`Click for JS Confirm`).click()



});

it('Confirm Alert1', function () {

    cy.get(`a[href*='CancelTab']`).click()
    cy.get(`div#CancelTab button`).click()

    // cy.on('window:confirm', function (txt) {
    //     console.log(txt);
    // })

    cy.handleAlertType2(this.data.confirmAlert.alertText)

});