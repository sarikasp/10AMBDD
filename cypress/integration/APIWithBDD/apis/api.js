import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

let id
Given('User sent GET request to retrive multiple users', () => {
    cy.request({
        method: "GET",
        url: "https://reqres.in/api/users?page=2"
    }).as('getUsers')
})

Then('Users list should be displayed', () => {
    cy.get('@getUsers').then((response) => {
        cy.log(response)
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq("OK")
        expect(response.body.page).to.eq(2)
    })
})

Given('User sent POST request to create multiple user with {string} and {string}', (name, job) => {
    cy.request({
        method: "POST",
        url: "https://reqres.in/api/users",
        body: {
            "name": name,
            "job": job
        }
    }).as('createUsers')
})

Then('Users should be created with {string} and {string}', (name, job) => {
    cy.get('@createUsers').then((response) => {
        cy.log(response)
        expect(response.status).to.eq(201)
        expect(response.statusText).to.eq("Created")
        expect(response.body.name).to.eq(name)
        expect(response.body.job).to.eq(job)
        id = response.body.id
        cy.log(id)
    })
})


Given('User sent PUT request to update multiple user with {string} and {string}', (name, job) => {
    cy.log(id)
    cy.request({
        method: "PUT",
        url: `https://reqres.in/api/users/${id}`,
        body: {
            "name": name,
            "job": job
        }
    }).as('updateUsers')
})

Then('Users should be updated with {string} and {string}', (name, job) => {
    cy.get('@updateUsers').then((response) => {
        cy.log(response)
        expect(response.status).to.eq(200)
        expect(response.statusText).to.eq("OK")
        expect(response.body.name).to.eq(name)
        expect(response.body.job).to.eq(job)
    })
})