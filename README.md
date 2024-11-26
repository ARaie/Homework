# Front-end Test Automation Engineer - Code Challenge
Author: Annika Raie 

## Overview
Tested website is [Boost Casino](https://www.boostcasino.com/). The framework include **feature files** and **step definition classes**. The test automation framework for testing the website is using **Cypress**, with a **Behaviour-Driven Development (BDD)** approach, scripts are written in **JavaScript**.

## Technologies Used

- **Cypress** for end-to-end testing
- **JavaScript** for test scripting
- **Cucumber** for implementing **Behavior Driven Development (BDD)**
- **Gherkin** for writing readable feature files (test scenarios)
- **Page Object Model** for structuring page interactions
- **Node.js** for package management

## Installation and Setup

### Prerequisites

- Node.js (latest version)
- npm (latest version)

### Steps to Run the Tests

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ARaie/Homework.git
   cd Homework
   
2. Install the required dependencies

   ```bash
   npm install
   npm install --save-dev @badeball/cypress-cucumber-preprocessor@20.1.0
   npm install --save-dev gherkin
   
3. Run the tests

   ```bash
   npx cypress run
   
## Structure of the Project

- **cypress/integration/features** - Feature files for BDD.
- **cypress/support/step_definitions** - Corresponding test steps.
- **package.json** - Node project dependencies.
- **README.md** - This documentation.

## Difficulties Encountered

During the development of the test automation framework, I encountered the following challenges:
- Integrating Cypress with BDD (Cucumber) for feature files and step definitions.
- Handling dynamic content on the website, which required custom waits and retry-ability.

  
