Feature: Main Site Navigation

  Scenario: Navigate using the hamburger menu
    Given I visit the BoostCasino website on mobile
    When I click on the hamburger menu
    Then I should see Home, Casino, Live Casino, Promotions, and Customer Support
    When I click on Customer Support
    Then I should be redirected to the customer-support page
  Scenario: Navigate to Casino using the hamburger menu
    Given I visit the BoostCasino website on mobile
    When I click on Casino
    Then I should see game categories like Popular, New, Slots, Jackpots, Buy Feature, Hot slots, Table Games, Drops & Wins, Cash Drop, Arcade, Cluster Games, Latest Provider, Exclusives
  Scenario: Navigate to Live Casino using the hamburger menu  
    Given I visit the BoostCasino website on mobile
    When I click on Live Casino
    Then I should see game categories like Popular, Game shows, Roulette, Blackjack, Baccarat, Poker 
  Scenario: Navigate to Promotions using the hamburger menu  
    Given I visit the BoostCasino website on mobile
    When I click on Promotions
    Then I should see categories like Welcome bonus, Boost XP, Casino Promotions, Live Casino Promotions, All Promotions

  Scenario: Navigate using the Casino menu
    When I click on Casino menu items "<casinomenu>"
    Then I should be redirected to the "<casinopages>" casino page

    Examples:
      | casinomenu              | casinopages     |
      | Popular                 | popular-games   |
      | Slots                   | slots           |
      | Jackpots                | jackpot-games   |
      | Buy Feature             | buy-feature     |
      | Hot Slots               | hot-slots       |
      | Table Games             | casino-games    |
      | Drops & Wins            | drops-and-wins  |
      | Cash Drop               | cash-drop       |
      | Arcade                  | arcade-games    |
      | Cluster Games           | cluster-games   |
      | Latest Provider         | latest-provider |
      | Exclusives              | exclusives      |
    
  Scenario: Navigate using the Live Casino men
    When I click on Live Casino menu items "<livecasinomenu>"
    Then I should be redirected to the "<livecasinopages>" Live Casino page

    Examples:
      | livecasinomenu | livecasinopages        |
      | Popular        | live-casino            |
      | Game Shows     | live-casino/game-shows |
      | Roulette       | live-casino/roulette   |
      | Blackjack      | live-casino/blackjack  |
      | Baccarat       | live-casino/baccarat   |
      | Poker          | live-casino/poker      |

  Scenario: Navigate using the Promotions menu
    When I click on Promotions menu items "<promotionsmenu>"
    Then I should be redirected to the "<promotionspages>" page

    Examples:
      | promotionsmenu         | promotionspages        |
      | Welcome Bonus          | bonus                  |
      | Boost XP               | boostxp                |
      | Casino Promotions      | promotions/casino      |
      | Live Casino Promotions | promotions/live-casino |
      | All Promotions         | promotions             |
    