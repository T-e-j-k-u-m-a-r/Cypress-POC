import moment from "moment"

class SouthWestPage {

    constructor() {
        this.deparTextBox = "input#LandingAirBookingSearchForm_originationAirportCode"
        this.arriveTxtbox = "input#LandingAirBookingSearchForm_destinationAirportCode"
        this.oneWayCheckBox = "input[value='oneway']"
        this.departDate = "input#LandingAirBookingSearchForm_departureDate"
        this.travelersCount = "ul[role='listbox']>li:nth-of-type(5)"
        this.arriveDate = ""
        this.passengerDropDown = "input[id='LandingAirBookingSearchForm_adultPassengersCount']"
        this.searchBtn = "button#LandingAirBookingSearchForm_submit-button"
        this.departureDateTestDate = moment().format('MM') + "/" + moment().add(3, 'd').format('D')  //3+ current date
        this.arrivalDateTestData = moment().format('MM') + "/" + moment().add(6, 'd').format('D')  //3+ current date
    }


    getDepartLocation() {
        return cy.get(this.deparTextBox)
    }

    getArrivealLocation() {
        return cy.get(this.arriveTxtbox)
    }

    getoneWayCheckBox() {
        return cy.get(this.oneWayCheckBox)
    }

    getPassengerDropDown() {
        return cy.get(this.passengerDropDown)
    }

    getSearchBtn() {
        return cy.get(this.searchBtn)
    }

    getdepartDate() {
        return cy.get(this.departDate)
    }
    gettravelersCount() {
        return cy.get(this.travelersCount)
    }


}

let sw = new SouthWestPage()

export default sw;