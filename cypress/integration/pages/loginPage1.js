class LoginPage1 {

    constructor() {
        this.usernameTxtBox = "#txtUsername"
        this.passwordTxtBox = "#txtPassword"
        this.loginBtn = "#btnLogin"
        this.homePageURLpath = "dashboard"
        this.welcomeText = "#welcome"
        this.cred;
    }

    getUn() {

        return cy.get(this.usernameTxtBox)
    }

    getPw() {
        return cy.get(this.passwordTxtBox)
    }

    getLoginBtn() {
        return cy.get(this.loginBtn)
    }

    getWelcomeText() {
        return cy.get(this.welcomeText)
    }

}


let login1 = new LoginPage1()

export default login1;