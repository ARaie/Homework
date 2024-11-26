describe('Language Switching Test', () => {
    it('should allow a logged out user to switch language', () => {
      cy.visit('/');
      cy.scrollTo(0, 0, { duration: 500 });  // Kerib ülesse järk-järgult (500 ms)
      cy.wait(1000);  // 
      
      // Kontrollib, et keelenupp on nähtav
      cy.get('div.sc-hhFzXm').should('be.visible');
      
      // Avab keelemenüü
      cy.get('div.sc-hhFzXm').should('be.visible').click();
      
      // Valib FI ja kontrollib, et keel muutub
      cy.contains('FI').click();
      cy.get('html').should('have.attr', 'lang', 'fi');
      
      // Valib EE ja kontrollib, et keel muutub
      cy.scrollTo(0, 0, { duration: 500 });  // Kerib ülesse järk-järgult (500 ms)
      cy.wait(1000);  //
      cy.get('div.sc-hhFzXm').should('be.visible').click();
      cy.contains('EE').click();
      cy.get('html').should('have.attr', 'lang', 'et');
      
      // Valib RU ja kontrollib, et keel muutub
      cy.scrollTo(0, 0, { duration: 500 });  // Kerib ülesse järk-järgult (500 ms)
      cy.wait(1000);  //
      cy.get('div.sc-hhFzXm').should('be.visible').click();
      cy.contains('RU').click();
      cy.get('html').should('have.attr', 'lang', 'ru');
    });
  });