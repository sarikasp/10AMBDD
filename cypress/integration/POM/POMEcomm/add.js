import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../HomePage"

let selector = new HomePage

Given('Visit the Ecomm Sites', () => {
    selector.vistUrl()
})

When('Searchs the product which startes from {string}', (title) => {
    selector.enterText(title)
    selector.clickBtn()

})

And('Add {string} in the carts', (veggies) => {
    // selector.searchProduct(veggies)
    selector.searchProduct(selector.selector.productLst, veggies, selector.selector.addCart)
})

Then('Place order and selects country and check condition', () => {
    selector.placeorder()
})

And('Validate the Thank you messages', () => {
    cy.contains("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!").should('be.visible')

})
