describe('Main Site Navigation Test', () => {
    beforeEach(() => {
      cy.viewport(375, 667);  // Seab väikese ekraani suuruse (mobiili jaoks)
      cy.visit('/');
      cy.scrollTo(0, 0, { duration: 500 });  // Kerib ülesse järk-järgult (500 ms)
      cy.wait(1000);  // 
      cy.get('label.sc-dsQDmV.dkGym.af-header-mobile-menu-trigger').should('be.visible').click();
      cy.wait(1000); // Ootame, et menüü avaneks
    });
  
    describe('Menu items display', () => {
      it('should display the correct menu items', () => {
        cy.contains('Home').should('be.visible');
        cy.contains('Casino').should('be.visible');
        cy.contains('Live Casino').should('be.visible');
        cy.contains('Promotions').should('be.visible');
        cy.contains('Customer Support').should('be.visible');
      });
    });
  
    describe('Navigation to Customer Support page', () => {
      it('should navigate to the Customer Support page', () => {
        cy.contains('Customer Support').click();
        cy.url().should('include', '/customer-support');
      });
    });
  
    describe('Casino categories navigation', () => {
      it('should open and verify all Casino categories', () => {
        cy.contains('Casino').click();
        
        // Kontrollib iga mängukategooria olemasolu
        const categories1 = [
          'Popular', ' New', 'Slots', 'Jackpots', 'Buy Feature', 'Hot Slots', 
          'Table Games'
        ];
  
        const categories2 = [
          'Cash Drop', 'Drops & Wins', 'Arcade', 'Cluster Games', 
          'Latest Provider', 'Exclusives'
        ];
        
        categories1.forEach(category => {
          cy.contains(category).should('be.visible');
        });
        categories2.forEach(category => {
          cy.contains('Buy Feature').scrollIntoView();
          cy.contains(category).should('be.visible');
        });
      });
    });
  
    describe('Navigation to specific Casino category pages', () => {
      it('should navigate to Popular page', () => {
        cy.contains('Casino').click();
        cy.contains('Popular').click();
        cy.url().should('include', '/popular-games');
      });
  
      it('should navigate to Slots page', () => {
        cy.contains('Casino').click();
        cy.contains('Slots').click();
        cy.url().should('include', '/slots');
      });
  
      it('should navigate to Jackpots page', () => {
        cy.contains('Casino').click();
        cy.contains('Jackpots').click();
        cy.url().should('include', '/jackpot-games');
      });
  
      it('should navigate to Buy Feature page', () => {
        cy.contains('Casino').click();
        cy.contains('Buy Feature').click();
        cy.url().should('include', '/buy-feature');
      });
  
      it('should navigate to Hot Slots page', () => {
        cy.contains('Casino').click();
        cy.contains('Buy Feature').scrollIntoView();
        cy.contains('Hot Slots').click();
        cy.url().should('include', '/hot-slots');
      });
  
      it('should navigate to Table Games page', () => {
        cy.contains('Casino').click();
        cy.contains('Buy Feature').scrollIntoView();
        cy.contains('Table Games').click();
        cy.url().should('include', '/casino-games');
      });
  
      it('should navigate to Drops & Wins page', () => {
        cy.contains('Casino').click();
        cy.contains('Buy Feature').scrollIntoView();
        cy.contains('Drops & Wins').click();
        cy.url().should('include', '/drops-and-wins');
      });
  
      it('should navigate to Cash Drop page', () => {
        cy.contains('Casino').click();
        cy.contains('Buy Feature').scrollIntoView();
        cy.contains('Cash Drop').click();
        cy.url().should('include', '/cash-drop');
      });
  
      it('should navigate to Arcade page', () => {
        cy.contains('Casino').click();
        cy.contains('Buy Feature').scrollIntoView();
        cy.contains('Arcade').click();
        cy.url().should('include', '/arcade-games');
      });
  
      it('should navigate to Cluster Games page', () => {
        cy.contains('Casino').click();
        cy.contains('Buy Feature').scrollIntoView();
        cy.contains('Cluster Games').click();
        cy.url().should('include', '/cluster-games');
      });
  
      it('should navigate to Latest Provider page', () => {
        cy.contains('Casino').click();
        cy.contains('Buy Feature').scrollIntoView();
        cy.contains('Latest Provider').click();
        cy.url().should('include', '/latest-provider');
      });
  
      it('should navigate to Exclusives page', () => {
        cy.contains('Casino').click();
        cy.contains('Buy Feature').scrollIntoView();
        cy.contains('Exclusives').click();
        cy.url().should('include', '/exclusives');
      });
    });
  
    describe('Live Casino categories navigation', () => {
      it('should open and verify all Casino categories', () => {
        cy.contains('Live Casino').click();
        
        // Kontrollib iga mängukategooria olemasolu
        const categories = [
          'Popular', 'Game Shows', 'Roulette', 'Blackjack', 'Baccarat', 'Poker'
        ];
  
        categories.forEach(category => {
          cy.contains(category).should('be.visible');
        });
      });
    });
  
    describe('Navigation to specific Live Casino category pages', () => {
      it('should navigate to Popular page', () => {
        cy.contains('Live Casino').click();
        cy.contains('Popular').click();
        cy.url().should('include', '/live-casino');
      });
  
      it('should navigate to Game Shows page', () => {
        cy.contains('Live Casino').click();
        cy.contains('Game Shows').click();
        cy.url().should('include', '/live-casino/game-shows');
      });
  
      it('should navigate to Roulette page', () => {
        cy.contains('Live Casino').click();
        cy.contains('Roulette').click();
        cy.url().should('include', '/live-casino/roulette');
      });
  
      it('should navigate to Blackjack page', () => {
        cy.contains('Live Casino').click();
        cy.contains('Blackjack').click();
        cy.url().should('include', '/live-casino/blackjack');
      });
  
      it('should navigate to Baccarat page', () => {
        cy.contains('Live Casino').click();
        cy.contains('Baccarat').click();
        cy.url().should('include', '/live-casino/baccarat');
      });
  
      it('should navigate to Poker page', () => {
        cy.contains('Live Casino').click();
        cy.contains('Poker').click();
        cy.url().should('include', '/live-casino/poker');
      });
    });
  
    describe('Promotions categories navigation', () => {
      it('should open and verify all Promotions categories', () => {
        cy.contains('Promotions').click();
        
        // Kontrollib iga mängukategooria olemasolu
        const categories = [
          'Welcome Bonus', 'Boost XP', 'Casino Promotions', 'Live Casino Promotions', 'All Promotions'
        ];
  
        categories.forEach(category => {
          cy.contains(category).should('be.visible');
        });
      });
    });
  
    describe('Navigation to specific Promotions category pages', () => {
      it('should navigate to Welcome Bonus page', () => {
        cy.contains('Promotions').click();
        cy.contains('Welcome Bonus').click();
        cy.url().should('include', '/bonus');
      });
  
      it('should navigate to Boost XP page', () => {
        cy.contains('Promotions').click();
        cy.contains('Boost XP').click();
        cy.url().should('include', '/boostxp');
      });
  
      it('should navigate to Casino Promotions page', () => {
        cy.contains('Promotions').click();
        cy.contains('Casino Promotions').click();
        cy.url().should('include', '/promotions/casino');
      });
  
      it('should navigate to Live Casino Promotions page', () => {
        cy.contains('Promotions').click();
        cy.contains('Live Casino Promotions').click();
        cy.url().should('include', '/promotions/live-casino');
      });
  
      it('should navigate to All Promotions page', () => {
        cy.contains('Promotions').click();
        cy.contains('All Promotions').click();
        cy.url().should('include', '/promotions');
      });
    });
  });
  