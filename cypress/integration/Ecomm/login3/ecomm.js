import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


Given('Visit Practice Automation site for login', () => {
    cy.log('given')
    cy.visit('https://practice.automationtesting.in/my-account/')
})

When('Enter the Username and Password', (dataTable) => {
    dataTable.hashes().forEach(element => {
        cy.log('when')
        cy.get('#username').type(element.Username)
        cy.get('#password').type(element.Password)
    })
})

Then('Click on Submit button', () => {
    cy.log('then')
    cy.get('[name="login"]').click()
})

And('Validate the Dashborad Text', () => {
    cy.log('and')
    cy.get('.is-active> a').should('have.text', "Dashboard")

})


When('Enter the {string} and {string}', (Username, Password) => {
        cy.log('when')
        cy.get('#username').type(Username)
        cy.get('#password').type(Password)
 
})

