/**
 * iFrames Demo
 */

describe('Iframes', () => {

    it.skip('web frames - single frame', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').clear().as('txtBox')
        cy.get('@txtBox').type('Im in FRAME now...')

    });


    it.skip('nested frames - multiple frame', () => {

        cy.visit('https://www.w3schools.com/html/tryit.asp?filename=tryhtml_iframe_height_width_css')

        //click on run button
        cy.get('#runbtn').click()

        cy.getIframe(`iframe[title='Iframe Example']`).then(function (text) {
            console.log(text);
        })

    });

});