class PersonDetails {

    constructor() {
        this.personDetailsScreen = "#sidenav a[href*='PersonalDetails']";
        this.empID = "#personal_txtEmployeeId:last-of-type";
    }

    getPersonalScreenName() {

        return cy.get(this.personDetailsScreen)

    }

    getEmpID() {
        return cy.get(this.empID)
    }
}

let personDetails = new PersonDetails()

export default personDetails;