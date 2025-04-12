import { generateCustomerData } from "../support/utils";

describe('Test Case 16 - Place Order: Login before Checkout', () => {
  beforeEach(() => {
    cy.clearAllCookies()
    cy.clearLocalStorage()
    cy.visit('https://automationexercise.com');
  });

  it.skip ('should follow these steps', () => {
    const customer = generateCustomerData()
    cy.register(customer)
    cy.enterAccountInfo(customer) 
    cy.contains('Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    cy.verifyName(customer)
  });


});
