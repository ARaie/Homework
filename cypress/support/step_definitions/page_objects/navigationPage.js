class NavigationPage {
    visit() {
      cy.viewport(375, 667);  // Creates small screen for mobile testing
      cy.visit('https://www.boostcasino.com/');
      cy.scrollTo(0, 0, { duration: 500 });  
      cy.wait(1000);  
    }
  
    openHamburgerMenu() {
      cy.scrollTo(0, 0, { duration: 500 });  
      cy.get('label.sc-dsQDmV.dkGym.af-header-mobile-menu-trigger').should('be.visible').click();
    }

    containsItems(item){
      cy.contains(item).should('be.visible');
    }

    containsItemsScroll(item){
      cy.contains('Buy Feature').scrollIntoView();
      cy.contains(item).should('be.visible');
    }
  
    navigateTo(page) {
      cy.contains(page).click();
    }

    redirectTo(redirect) {
      cy.url().should('include', redirect);
    }
  }
  
  export default new NavigationPage();