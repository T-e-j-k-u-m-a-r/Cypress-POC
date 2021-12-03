class AddEmployeePage {
    constructor() {

        this.addEmployeeScreen = "#content h1";
        this.firstname = "input#firstName";
        this.middlename = "input#middleName";
        this.lastname = "input#lastName";
        this.saveBtn = "input#btnSave";
        this.addEmployeeURlPath = "addEmployee";
        this.addEmpBtn = "a#menu_pim_addEmployee"
        this.empID = "#employeeId";

    }

    getFirstName() {
        return cy.get(this.firstname)
    }

    getMiddleName() {
        return cy.get(this.middlename)
    }

    getLastName() {
        return cy.get(this.lastname)
    }

    getSaveBTn() {
        return cy.get(this.saveBtn)
    }

    getAddEmpScreen() {
        return cy.get(this.addEmployeeScreen)
    }

    verifyIfUserIsOnAddEmpScreen(url) {
        expect(url).to.contain(this.addEmployeeURlPath)
    }

    getAddEmpBtn() {
        return cy.get(this.addEmpBtn)
    }

    getEmpID() {
        return cy.get(this.empID)
    }

}

let addEmpPage = new AddEmployeePage()

export default addEmpPage;