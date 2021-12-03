import sw from "../pages/SouthwestPage";

describe('Southwest Scenario Test', () => {

    let testData;
    before(function () {

        cy.fixture('southwest').then(function (testData) {

            this.testData = testData
            cy.visit(this.testData.appURL)
        })

    });

    it('Flight Search & Assert', function () {

        cy.contains('Book').scrollIntoView()
        sw.getoneWayCheckBox().check()

        //enter date & click on search
        sw.getDepartLocation().type(this.testData.src)
        sw.getArrivealLocation().type(this.testData.dest)
        sw.getdepartDate().type(sw.departureDateTestDate)
        sw.getPassengerDropDown().click()
        sw.gettravelersCount().click()
        sw.getSearchBtn().click()
        //cy.get('#form-mixin--submit-button').click()

        //assert (5 cases)

    });

});