// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('register', (customerData) => {
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type(customerData.firstName)
    cy.get('[data-qa="signup-email"]').type(`${customerData.firstName}@gmail.com`)
    cy.get('[data-qa="signup-button"]').click()
})

Cypress.Commands.add('enterAccountInfo', (customerData) => {
    cy.get('#id_gender1').click()
    cy.get('[data-qa="password"]').type(customerData.password)
    cy.get('[data-qa="days"]').select('2')
    cy.get('[data-qa="months"]').select('January')
    cy.get('[data-qa="years"]').select('2000')
    cy.get('[data-qa="first_name"]').type(customerData.firstName)
    cy.get('[data-qa="last_name"]').type(customerData.lastName)
    cy.get('[data-qa="company"]').type(customerData.company)
    cy.get('[data-qa="address"]').type(customerData.address)
    cy.get('[data-qa="state"]').type(customerData.state)
    cy.get('[data-qa="city"]').type(customerData.city)
    cy.get('[data-qa="zipcode"]').type(customerData.zipCode)
    cy.get('[data-qa="mobile_number"]').type(customerData.phoneNumber)
    cy.get('[data-qa="create-account"]').click()
})

Cypress.Commands.add('verifyName', (customerData) => {
    cy.contains(`Logged in as ${customerData.firstName}`)
})