/**
 * Create a new Job 
 */

import login from "../pages/LoginPage"
import home from "../pages/HomePage"
import nationality from "../pages/Nationalities"
import randomData from "../../utility/randomData"


describe('Creation Search & Delete Nationality', () => {

    before(function () {
        cy.fixture('loginCred').then(function (data) {
            this.data = data;
        })

    })

    it('Login - Search - Delete', function () {

        //login
        login.navigateToAppURL()
        login.getLoginPanelLabelName().should('have.text', this.data.loginPage.panelName)
        login.getUsername().type(this.data.validCred.username)
        login.getPassword().type(this.data.validCred.password)
        login.getSubmitBtn().click()
        home.getWelcomeText().should('contain.text', this.data.home.welcomeText)

        //navigate to nationality screen & click on it
        home.getAdminMenu().click()
        home.getNationalityMenu().click({ force: true })

        //verify if the screen is navigated to nationality screen
        nationality.getNationalitiesMenu().should('have.text', this.data.nationality.labelText)

        //create new nationality
        let localeName = randomData.getLocale()
        let countryName = this.data.prefix.prefixName + localeName;
        console.log("localName = " + localeName);

        nationality.getNationalityAddBtn().click()
        nationality.getNationalityNameTxtBox().type(countryName)
        nationality.getSaveBtn().click()

        //search created nationality & delete it
        cy.contains(countryName).invoke('text').should('contain', localeName)

        //delete the created nationality
        cy.contains(countryName).parent().prev().then(function ($ele) {
            cy.wrap($ele).click()
        })

        //click on delete button
        nationality.getDeleteBtn().scrollIntoView().click()
        nationality.getOkBtnOnAlert().click()

        //Assert post deleting the newly created nationality  
        let deletedRecord =
            cy.xpath("//a[normalize-space()='" + localeName + "']").should('not.exist')
    });

});