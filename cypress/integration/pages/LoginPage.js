class Login {

    constructor() {
        this.usernameTxtBox = "#txtUsername";
        this.passwordTxtBox = "#txtPassword";
        this.submitBtn = "#btnLogin";
        this.loginPanelLabelName = "#logInPanelHeading";
    }

    getUsername() {
        return cy.get(this.usernameTxtBox)
    }

    getPassword() {
        return cy.get(this.passwordTxtBox)
    }

    getSubmitBtn() {
        return cy.get(this.submitBtn)
    }

    navigateToAppURL() {
        return cy.visit('/')
    }

    getLoginPanelLabelName() {
        return cy.get(this.loginPanelLabelName)
    }



}

let login = new Login()

export default login;