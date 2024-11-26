Feature: Language Switching

  Scenario Outline: Switch language from the menu
    Given I visit the BoostCasino website to change language
    When I click on the language dropdown
    And I select the language "<language>"
    Then the page should be in the "<language>" language

    Examples:
      | language |
      | FI       |
      | EE       |
      | RU       |