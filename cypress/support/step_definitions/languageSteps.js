import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I visit the BoostCasino website to change language', () => {
  cy.visit('https://www.boostcasino.com/');
  //cy.scrollTo(0, 0, { duration: 500 });  // Kerib ülesse järk-järgult (500 ms)
  //cy.wait(1000);
});

When('I click on the language dropdown', () => {
  cy.get('div.sc-hhFzXm').should('be.visible').click();
});

When('I select the language {string}', (language) => {
  cy.contains(language).click();
});

Then('the page should be in the {string} language', (language) => {
  cy.url().should('include', `/${language.toLowerCase()}`);
  cy.get('div.sc-hhFzXm').should('be.visible').click();
});