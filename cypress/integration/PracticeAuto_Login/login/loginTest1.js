import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


Given('Visit Practice Automation site', ()=>{
    cy.log('given')
    cy.visit('https://practicetestautomation.com/practice-test-login/')
})

When('Enter the Valid Username', ()=>{
    cy.log('when')
    cy.get('#username').type('student')
})

And('Enter the Valid Password', ()=>{
    cy.log('and')
    cy.get('#password').type('Password123')
})

Then('Click on Login button', ()=>{
    cy.log('then')
    cy.get('#submit').click()
})

And('Validate the Dashborad', ()=>{
    cy.log('and')
    cy.get('.post-title').should('have.text', "Logged In Successfully")
    cy.get('.has-text-align-center> strong').should('have.text', "Congratulations student. You successfully logged in!")
})



// Invalid


When('Enter the Invalid Username', ()=>{
    cy.log('when')
    cy.get('#username').type('student23')
})

And('Enter the Invalid Password', ()=>{
    cy.log('and')
    cy.get('#password').type('Password')
    
})

And('Validate the Error', ()=>{
    cy.get('#error').should('have.text', "Your username is invalid!")
})
