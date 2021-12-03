class Homepage {

    constructor() {
        this.logoutBtn = 'a[href*="logout"]';
        this.welcomeMenu = "#welcome";
        this.homePagePath = "dashboard";
        this.pinModule = "a#menu_pim_viewPimModule";
        this.welcomeText = "a#welcome"
        this.nationalityMenu = "a#menu_admin_nationality"
        this.adminMenu = "a#menu_admin_viewAdminModule b"
    }

    getwelcomeMenu() {
        return cy.get(this.welcomeMenu)
    }

    getlogoutBtn() {
        return cy.get(this.logoutBtn)
    }

    verifyLoginPass(path) {
        expect(path).to.include(this.homePagePath);
    }

    getPinModule() {
        return cy.get(this.pinModule)
    }

    getWelcomeText() {
        return cy.get(this.welcomeText)
    }

    getNationalityMenu() {
        return cy.get(this.nationalityMenu)
    }

    getAdminMenu() {
        return cy.get(this.adminMenu)
    }
}

let home = new Homepage()

export default home;