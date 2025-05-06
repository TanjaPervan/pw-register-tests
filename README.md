# Playwright - REGISTRATION - Test

This project uses [Playwright](https://playwright.dev/) to perform end-to-end browser testing.
> **Note** CAPTCHA is intentionally ignored, as instructed in the task requirements.

## Installation

Clone the repository and run the following commands in your terminal:

```bash
        npm init -y                      # Initialize the project (creates package.json)
        npm i -D @playwright/test        # Install Playwright test library
        npx playwright install   ```     # Download browsers 
``` 
## Running Tests
```bash
        npx playwright test              #Run all tests (NOTE: in headless mode due to CAPTCHA)
        npx playwright test --ui         #Run tests in UI mode (NOTE: in headless mode due to CAPTCHA)
        npx playwright test --headed     #Run tests in headed mode
``` 
## Running Tests via npm 
   ### You can also run tests using npm scripts:
```bash
        npm test                         #Run all tests (NOTE: in headless mode due to CAPTCHA)
        npm run test:ui                  #Run tests in UI mode (NOTE: in headless mode due to CAPTCHA)
        npm run test:headed              #Run tests in headed mode
``` 
## Running Test Grouping and Tagging
Tests are grouped using `describe()` and marked with tags (`@positive`, `@negative`) for easier filtering.

```bash
        npx playwright test --grep @positive --headed # run @positive tagged tests
        npx playwright test --grep @negative --headed # run @negative tagged tests
``` 

## Positive Test Scenarios for Registration Form

| ID   | Scenario Description                                            |
|------|-----------------------------------------------------------------|
| TC01  | All fields have correct inputs                                  |
| TC02  | Username of exactly 30 and Password of exactly 75 characters   |

## Negative Test Scenarios for Registration Form

| ID  | Scenario Description                                             |
|-----|------------------------------------------------------------------|
| TC03 | All fields are empty                                             |
| TC04 | Email invalid format                                            |
| TC05 | Email and Confirm Email do not match                             |
| TC06 | Password and Confirm Password do not match                       |
| TC07 | Password is too short (less than 8 characters)                  |
| TC08 | Username is too short (less than 5 characters)                  |
| TC09 | Username must contain only alphanumeric characters              |
| TC10 | Terms and Conditions checkbox is not selected                   |
| TC11 | Username is already taken  - skipped                                      |

## Skipped Tests

One test TC11 is skipped using `test.skip()` with a `TODO` note:

```js
 test.skip('TS11 - Username is already taken ', async ({ page }) => {
  //TODO: implement this when CAPTCHA bypass is available

  });
```

## Utilities

### `randomDelay(min, max)`

A helper function used to introduce randomized delays between test actions.  
This simulates human-like interaction and helps avoid flakiness or UI rendering issues when running Playwright tests too quickly.

