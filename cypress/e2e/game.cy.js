describe('Game Test - Book of Dead', () => {
    it('should allow a logged out user to find and open the game', () => {
      // Avab veebilehe
      cy.visit('https://www.boostcasino.com');
      
      // Ootab, et otsinguväli oleks nähtav, kasutades placeholder väärtust
      cy.get('input[placeholder="Search"]', { timeout: 10000 }).should('be.visible');
      
      // Otsib mängu "book of dead"
      cy.get('input[placeholder="Search"]').type('book of dead');
      
      // Kontrollib, et mängud, mis vastavad "book of dead" otsingule, kuvatakse
      cy.contains('Book of Dead').should('be.visible');
      
      // Klõpsame nuppu "Play" teksti alusel
      cy.wait(15000);
      

      cy.get('div.sc-dwLEzm').find('button.gtm-button').click({ force: true });

      // Kontrollige, et mäng avaneb või mängu laadimine algab
      cy.url().should('include', '/slots/book-of-dead');  // Kontrollige, et mängu URL avatakse
  
    });
  });