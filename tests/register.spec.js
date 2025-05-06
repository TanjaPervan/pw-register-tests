import { expect, test } from '@playwright/test';
import { emptyFields, validUser } from '../data/dataUsers.js';
import { registerLocators } from '../pages/registration/registerLocators.js';
import { RegisterPage } from '../pages/registration/registerPage.js';

let registerPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/register');
  registerPage = new RegisterPage(page);
});
test.describe('@positive', () => {

  test('TS01 - valid registration', async ({ page }) => {
    await registerPage.fillForm(validUser);
    await registerPage.checkCheckbox(true);
    await registerPage.submitForm();

    await expect(page.locator('h1')).toHaveText('Verify Your Email');
  });


  test('TS02 - Username of exactly 30 characters  ', async ({ page }) => {

  });
});

test.describe('@negative', () => {

  test('TS03 - All fields are empty ', async ({ page }) => {
    await registerPage.fillForm(emptyFields);
    await registerPage.checkCheckbox(false);
    await registerPage.submitForm();

    await expect(page.locator(registerLocators.errorUsername)).toHaveText('Please enter Username.');
  });


  test('TS04 - Email invalid format', async ({ page }) => {

  });


  test('TS05 - Email and Confirm Email do not match', async ({ page }) => {

  });

  test('TS06 - Password and Confirm Password do not match', async ({ page }) => {

  });

  test('TS07 - Password is too short (less than 8 characters)', async ({ page }) => {

  });

  test('TS08 - Username is too short (less than 5 characters)', async ({ page }) => {

  });

  test('TS09 - Username must contain only alphanumeric characters', async ({ page }) => {

  });

  test('TS10 - Terms and Conditions checkbox is not selected  ', async ({ page }) => {

  });

  test('TS11 - Username is already taken ', async ({ page }) => {

  });


});
