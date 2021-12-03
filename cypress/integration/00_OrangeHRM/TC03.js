/**
 * 1. Create new emp
 * 2. Search emp
 * 3. Delete emp
 *
 * Note: Use random data generator API - Completed
 */

//Importing external modules
import login from "../pages/LoginPage"
import home from "../pages/HomePage"
import addEmpPage from "../pages/AddEmployeePage"
import personDetails from "../pages/PersonalDetailsPage"
import empDetails from "../../utility/randomData"

describe('CRUD Operation on employees', () => {

    beforeEach(function () {
        login.navigateToAppURL()
    });

    it('Create -> Search -> Delete -> VerifyPostDelte of a new employee', () => {

        //Accessing cred via global object
        let qa = Cypress.env('qa')

        //enter username
        login.getUsername().type(qa.username)

        //enter password
        login.getPassword().type(qa.password)

        //click on submit button
        login.getSubmitBtn().click()

        //Assert for successfull authentication
        cy.url().as('homePagePath').then(function (homePagePath) {
            home.verifyLoginPass(homePagePath)
        })

        //Navigate to PIM module screen
        home.getPinModule().click()

        //Click on Add employee menu
        addEmpPage.getAddEmpBtn().click({ force: true })

        // //Assert of Add employee menu/screen
        cy.url().as('appURL').then(function (url) {
            addEmpPage.verifyIfUserIsOnAddEmpScreen(url)
        })

        //Enter the firstname, middlename, last name & click on save button
        //TODO: File upload should be explored 

        //Print fn, mn & ln -> Added for verification purpose
        console.log(`Before :: ` + `User created with FN: ` + empDetails.getfN() + ", " + " MN : " + empDetails.getmN() + ", " + empDetails.getlN());

        addEmpPage.getFirstName().type(empDetails.getfN())
        addEmpPage.getMiddleName().type(empDetails.getmN())
        addEmpPage.getLastName().type(empDetails.getlN())

        /**Create an alias which actually means like creating global variable and then use it with line 69 code or anyhere within it block
        */
        addEmpPage.getEmpID().invoke('val').as('empIDinAddEmpScreen')
        addEmpPage.getSaveBTn().click()

        /**TODO: Important concept of using alias/global variable is using aliasing @prefixed with name given for the alias
        */
        cy.get("@empIDinAddEmpScreen").then(function (txt) {

            personDetails.getEmpID().invoke('val').then(function (value) {
                expect(txt).to.be.eq(value)
            })
        })

        //Print fn, mn & ln -> Added for verification purpose
        console.log(`After :: ` + `User created with FN: ` + empDetails.getfN() + ", " + " MN : " + empDetails.getmN() + ", " + empDetails.getlN());

    });

});