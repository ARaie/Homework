import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given("I visit the BoostCasino website for game search", function () {
  cy.visit("https://www.boostcasino.com");  
});

When('I search for {string}', (gameName) => {
  cy.get('input[placeholder="Search"]').type(gameName);
});

Then('I should see games matching {string}', (gameName) => {
  cy.contains('Book of Dead').should('be.visible');
});

When('I click the {string} button on the game', () => {
  cy.wait(1500);
  cy.get('div.sc-dwLEzm').find('button.gtm-button').click({ force: true }); 
});

Then('the game should start loading', () => {
  cy.url().should('include', '/slots/book-of-dead');  // Verifing that correct url is opened
});