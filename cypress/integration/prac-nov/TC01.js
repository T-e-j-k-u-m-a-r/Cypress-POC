describe('Blur & Focus Demo', () => {

    it('TC01', () => {

        //focus & blur
        // cy.visit('https://opensource-demo.orangehrmlive.com/')
        // cy.get('div#divUsername input#txtUsername').focus().blur()
        // cy.get('div#divUsername input#txtUsername').type('Mac-Laptop')


        //Check box & radio button - check & uncheck
        // cy.visit('https://the-internet.herokuapp.com/checkboxes')
        // cy.get("form#checkboxes input[type='checkbox']:first-of-type").check()
        // cy.wait(2000)
        // cy.get("form#checkboxes input[type='checkbox']:first-of-type").uncheck()


        // //Assert
        // cy.get("form#checkboxes input[type='checkbox']:first-of-type").should("not.be.checked")


        //single slect & multi select
        // cy.visit('http://codenboxautomationlab.com/practice/#top')
        // cy.get("input[placeholder='Type to Select Countries']").scrollIntoView()

        // cy.get("#dropdown-class-example").select("option3")

        // //Assert
        // //TODO: 
        // //cy.get("#dropdown-class-example").find(":selected").contains('API')
        // //or below - both will work
        // cy.get("#dropdown-class-example").find("option:selected").contains('API')

        //Single select & multi select
        //TODO: Single select
        // cy.visit('https://trytestingthis.netlify.app/')
        // cy.get("label[for='option']").eq(0).scrollIntoView()

        // // cy.get("select#option").select("Option 3")

        // // cy.get("select#option").find("option:selected").contains('Option 3')

        // //Multi select  
        // cy.get("select#owc").select(["Option 1", "Option 3"])

        // //Assert: TODO: 
        // cy.get("select#owc").invoke('val').should('deep.equal', ["option 1", "option 3"])


        //Handling Sliders: TODO: 
        // cy.visit('https://trytestingthis.netlify.app/')
        // cy.get("input#favcolor").scrollIntoView()
        // cy.get("input#a").invoke('val', '100').trigger('change')

        // cy.get("input#a").should('have.value', '100')

        //FIXME:


        // TODO: FIXME: 
        //Cypress command walthrough 

        //cy.visit("https://opensource-demo.orangehrmlive.com/")
        // cy.get("#txtUsername").type('Admin')
        // cy.get("#txtPassword").type('admin123')
        // cy.get("#btnLogin").click()


        // //TODO: 1 - Implementation of invoke() method, Its used to invoke or call a function 
        // const f1 = function () {
        //     return "Tejkumar"
        // }

        // cy.wrap({ fn: f1 }).invoke('fn').then(function (fnValue) {
        //     console.log(fnValue);
        // })


        // //TODO: 2
        // cy.get("#txtUsername").invoke('attr', 'name').then(function (name) {
        //     console.log('name : ' + name)
        // })


        // cy.location().then(function (loc) {
        //     console.log(loc.host);
        //     console.log(loc.href);

        // })


        //TODO:  Select multiple value & deselect them
        // cy.visit("https://trytestingthis.netlify.app/")

        // cy.get("label[for='option']").eq(1).scrollIntoView()

        // cy.get('#owc').as('dropDown')

        // //select multiple values
        // cy.get('@dropDown').select(['Option 2', 'Option 3'])

        // //wait
        // cy.wait(2000)

        // //Assert
        // cy.get('@dropDown').invoke('val').should('deep.equal', ['option 2', 'option 3'])

        // //unselect all values
        // cy.get('@dropDown').select([])

        //TODO: How to play an audio in Cypress
        // cy.fixture('audio/track1.mp3', 'base64').then((mp3) => {
        //     const uri = 'data:audio/mp3;base64,' + mp3
        //     const audio = new Audio(uri)

        //     audio.play()
        // })


        //TODO:  

        // cy.visit("https://opensource-demo.orangehrmlive.com/")

        // // let userName = cy.get("input#txtUsername")
        // // userName.type('Automation')


        // //Function 
        // const getName = function () {
        //     return 'Tej'
        // }

        // // const val = getName()
        // // console.log(val);

        // cy.wrap({ name: getName }).invoke('name').should('eq', 'Tej')

        //TODO: How to work with reatJs apps where every component is embedded inside an iframe

        cy.visit("http://demo.automationtesting.in/Frames.html")

        cy.getIframe("#singleframe").within(function (frm) {

            cy.get("div.col-xs-6 input").type("Automation")

        })



    });

});