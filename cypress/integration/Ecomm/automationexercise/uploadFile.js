import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

let fileUpt = "MedicalChatBot.pptx"

Given('Visit Automation Exercise site for login', () => {
    cy.visit('https://www.automationexercise.com/login')
})

When('Enter the Username and Password', () => {
    cy.get('[name="email"]').first().type("gauri@gmail.com")
    cy.get('[name="password"]').type('Gauri99')
})


Then('Click on login btn', () => {
    cy.get('[data-qa="login-button"]').click()
})

And('Validate the Dashborad message', () => {
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible')
})


Given('Open the contact page', () => {
    cy.get('[href="/contact_us"]').click()
})

When('Add your details', () => {
    cy.get('[name="name"]').type("Gauri")
    cy.get('[name="email"]').type("gauri@gmail.com")
    cy.get('[name="subject"]').type('Inquiry')
    cy.get('#message').type("Just want know more about  your site")
    cy.get('[name="upload_file"]').attachFile(fileUpt)
    cy.get('[name="submit"]').click()
})


Then('Validate the file upload msg', () => {
  cy.get(".status.alert.alert-success").should('have.text', "Success! Your details have been submitted successfully.")
})