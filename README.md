# Playwright - REGISTRATION - Test

This project uses [Playwright](https://playwright.dev/) to perform end-to-end browser testing.

## Installation

Clone the repository and run the following commands in your terminal:

        ```bash
        npm init -y                      # Initialize the project (creates package.json)
        npm i -D @playwright/test        # Install Playwright test library
        npx playwright install           # Download browsers (Chromium, Firefox, WebKit)

## Running Tests
        ```bash
        npx playwright test              #Run all tests
        npx playwright test --ui         #Run tests in UI mode

## Running Tests via npm 
### You can also run tests using npm scripts:
        ```bash
        npm test                         #Run all tests
        npm run test:ui                  #Run tests in UI mode
        npm run test:headed              #Run tests in headed mode

## Running Positive Tests
        ```bash
        npx playwright test --grep @positive
## Running Negative Tests
        ```bash
        npx playwright test --grep @negative


## Positive Test Scenarios for Registration Form

| ID   | Scenario Description                             |
|------|--------------------------------------------------|
| TC01  | All fields have correct inputs                         |
| TC02  | Username of exactly 30 characters                |

## Negative Test Scenarios for Registration Form

| ID  | Scenario Description                                      |
|-----|-----------------------------------------------------------|
| TC03 | All fields are empty                                       |
| TC04 | Email invalid format                                      |
| TC05 | Email and Confirm Email do not match                       |
| TC06 | Password and Confirm Password do not match                 |
| TC07 | Password is too short (less than 8 characters)            |
| TC08 | Username is too short (less than 5 characters)            |
| TC09 | Username must contain only alphanumeric characters        |
| TC10 | Terms and Conditions checkbox is not selected             |
| TC11 | Username is already taken                                |
