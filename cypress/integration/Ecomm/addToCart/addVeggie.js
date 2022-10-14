import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


Given('Visit the Ecomm Site', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When('Search the product which startes from {string}', (title) => {
    cy.get('.search-keyword').type(title)
    cy.get('[class="search-button"]').click()

})

And('Add {string} in the cart', (veggies) => {
    cy.get('h4[class="product-name"]').each((el, i) => {
        cy.log(el.text())
        let vegitable = el.text().replace(' - 1 Kg', " ").trim()
        if (vegitable == veggies) {
            cy.get('[class="product-action"] button').eq(i).click()
        }
    })
})

Then('Place order and select country and check condition', () => {
    cy.get('img[alt="Cart"]').click()
    cy.get('[class="action-block"] button').first().click()
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('[class="chkAgree"]').click()
    cy.get('button').click()
})

And('Validate the Thank you message', () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')

})
