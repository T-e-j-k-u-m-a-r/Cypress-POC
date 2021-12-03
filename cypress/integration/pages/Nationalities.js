class Nationalities {

    constructor() {
        this.NationalitiesLabelMenu = "div#search-results h1"
        this.nationalityAdd = "#btnAdd"
        this.nationalityNameTxtBox = "#nationality_name"
        this.saveBtn = "#btnSave"
        this.delBtn = "#btnDelete"
        this.okBtnOnAlert = "div#deleteConfModal div:nth-of-type(3) input:first-of-type"
        this.cancelBtnOnAlert = "div#deleteConfModal div:nth-of-type(3) input:last-of-type"
    }


    getNationalitiesMenu() {
        return cy.get(this.NationalitiesLabelMenu)
    }

    getNationalityAddBtn() {
        return cy.get(this.nationalityAdd)
    }

    getNationalityNameTxtBox() {
        return cy.get(this.nationalityNameTxtBox)
    }

    getSaveBtn() {
        return cy.get(this.saveBtn)
    }

    getDeleteBtn() {
        return cy.get(this.delBtn)
    }

    getOkBtnOnAlert() {
        return cy.get(this.okBtnOnAlert)
    }

    getCancelBtnOnAlert() {
        return cy.get(this.cancelBtnOnAlert)
    }

}

const nationalities = new Nationalities()

export default nationalities;