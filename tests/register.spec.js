import { expect, test } from '@playwright/test';
import { emptyFields, validUser } from '../data/dataUsers.js';
import { registerLocators } from '../pages/registration/registerLocators.js';
import { RegisterPage } from '../pages/registration/registerPage.js';

let registerPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/register');
  registerPage = new RegisterPage(page);
});

test('valid registration', async ({ page }) => {
  await registerPage.fillForm(validUser);
  await registerPage.checkCheckbox(true);
  await registerPage.submitForm();

  await expect(page.locator('h1')).toHaveText('Verify Your Email');
});

test('empty fields submit', async ({ page }) => {
  await registerPage.fillForm(emptyFields);
  await registerPage.checkCheckbox(false);
  await registerPage.submitForm();

  await expect(page.locator(registerLocators.errorUsername)).toHaveText('Please enter Username.');
});


