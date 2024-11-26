import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import NavigationPage from './page_objects/navigationPage';

Given('I visit the BoostCasino website on mobile', () => {
  NavigationPage.visit();
});

When('I click on the hamburger menu', () => {
  NavigationPage.openHamburgerMenu();
});

Then('I should see Home, Casino, Live Casino, Promotions, and Customer Support', () => {
  NavigationPage.containsItems('Home');
  NavigationPage.containsItems('Casino');
  NavigationPage.containsItems('Live Casino');
  NavigationPage.containsItems('Promotions');
  NavigationPage.containsItems('Customer Support');
});

When('I click on Customer Support', () => {
  NavigationPage.navigateTo('Customer Support');
});

Then('I should be redirected to the customer-support page', () => {
  NavigationPage.redirectTo('/customer-support');
});

When('I click on Casino', () => {
  NavigationPage.openHamburgerMenu();
  NavigationPage.navigateTo('Casino');
});

Then('I should see game categories like Popular, New, Slots, Jackpots, Buy Feature, Hot slots, Table Games, Drops & Wins, Cash Drop, Arcade, Cluster Games, Latest Provider, Exclusives', () => {
  NavigationPage.containsItems('Popular');
  NavigationPage.containsItems(' New');
  NavigationPage.containsItems('Slots');
  NavigationPage.containsItems('Jackpots');
  NavigationPage.containsItems('Buy Feature');
  NavigationPage.containsItems('Hot Slots');
  NavigationPage.containsItems('Table Games');
  NavigationPage.containsItemsScroll('Drops & Wins');
  NavigationPage.containsItemsScroll('Cash Drop');
  NavigationPage.containsItemsScroll('Arcade');
  NavigationPage.containsItemsScroll('Cluster Games');
  NavigationPage.containsItemsScroll('Latest Provider');
  NavigationPage.containsItemsScroll('Exclusives');
});

When('I click on Live Casino', () => {
  NavigationPage.openHamburgerMenu();
  NavigationPage.navigateTo('Live Casino');
});

Then('I should see game categories like Popular, Game shows, Roulette, Blackjack, Baccarat, Poker', () => {
  NavigationPage.containsItems('Popular');
  NavigationPage.containsItems('Game Shows');
  NavigationPage.containsItems('Roulette');
  NavigationPage.containsItems('Blackjack');
  NavigationPage.containsItems('Baccarat');
  NavigationPage.containsItems('Poker');
});

When('I click on Promotions', () => {
  NavigationPage.openHamburgerMenu();
  NavigationPage.navigateTo('Promotions');
});

Then('I should see categories like Welcome bonus, Boost XP, Casino Promotions, Live Casino Promotions, All Promotions', () => {
  NavigationPage.containsItems('Welcome Bonus');
  NavigationPage.containsItems('Boost XP');
  NavigationPage.containsItems('Casino Promotions');
  NavigationPage.containsItems('Live Casino Promotions');
  NavigationPage.containsItems('All Promotions');
});

Given('Navigate using the Casino menu', () => {
  NavigationPage.visit();
});

When('I click on Casino menu items {string}', (casinomenu) => {
  NavigationPage.visit();
  NavigationPage.openHamburgerMenu();
  NavigationPage.navigateTo('Casino');
  cy.contains(casinomenu).click();
});

Then('I should be redirected to the {string} casino page', (casinopages) => {
  cy.url().should('include', `/${casinopages}`);
});

Given('Navigate using the Live Casino menu', () => {
  NavigationPage.visit();
});

When('I click on Live Casino menu items {string}', (livecasinomenu) => {
  NavigationPage.visit();
  NavigationPage.openHamburgerMenu();
  NavigationPage.navigateTo('Live Casino');
  cy.contains(livecasinomenu).click();
});

Then('I should be redirected to the {string} Live Casino page', (livecasinopages) => {
  cy.url().should('include', `/${livecasinopages}`);
});

Given('Navigate using the Promotions menu', () => {
  NavigationPage.visit();
});

When('I click on Promotions menu items {string}', (promotionsmenu) => {
  NavigationPage.visit();
  NavigationPage.openHamburgerMenu();
  NavigationPage.navigateTo('Promotions');
  cy.contains(promotionsmenu).click();
});

Then('I should be redirected to the {string} page', (promotionspages) => {
  cy.url().should('include', `/${promotionspages}`);
});
