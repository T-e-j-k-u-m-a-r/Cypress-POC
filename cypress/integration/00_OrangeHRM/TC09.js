describe('File upload & File donwload', () => {

    it('File upload', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('input#file-upload').attachFile('file2.png')
        cy.get('input#file-submit').click()

        //Assert
        cy.get('div#uploaded-files').should('contain.text', 'file2.png')

    });

    it('File download - type 1: Where the href link is absolute', () => {

        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt', 'cypress/downloads', 'sample-text-file.txt')

        //Assert 
        cy.verifyDownload('sample-text-file.txt')

    });


    it.only('TODO: File download - type 2: Where the href link is relative', () => {

        const path = "/cypress/downloads/some-file.txt";

        cy.visit('https://the-internet.herokuapp.com/download')
        cy.get('a[href$="some-file.txt"]').click()


    });

});