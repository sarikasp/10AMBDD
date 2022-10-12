import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


Given('Visit Orange HRM site', ()=>{
    cy.log('given')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

When('Enter the Orange HRM Valid Username', ()=>{
    cy.log('when')
    cy.get('[name="username"]').type('Admin')
})

And('Enter the Orange HRM Valid Password', ()=>{
    cy.log('and')
    cy.get('[name="password"]').type('admin123')
})

Then('Click on Orange HRM Login button', ()=>{
    cy.log('then')
    cy.get('[type="submit"]').click()
})

And('Validate the Orange HRM Dashborad', ()=>{
    cy.log('and')
   cy.contains('Admin').should('be.visible')
   cy.contains('Dashboard').click()
   cy.contains('Launching Soon').should('be.visible')
})
