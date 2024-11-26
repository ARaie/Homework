Feature: Game Search

  Scenario: Search for a game and play it
    Given I visit the BoostCasino website for game search
    When I search for "book of dead"
    Then I should see games matching "book of dead"
    When I click the "Play" button on the game
    Then the game should start loading