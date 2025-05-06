import { expect, test } from '@playwright/test';
import { registerMessages } from '../data/constants.js';
import {
  emptyFields,
  invalidNotMatchAndSpecialUsername,
  invalidShortAndSpecialEmail,
  validMaxLenghtUsernamePass,
  validUser
} from '../data/dataUsers.js';
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

    await expect(page.locator(registerLocators.verifySubmitEmail)).toHaveText(registerMessages.verifyEmail);
  });


  test('TS02 - Username of exactly 30 and Password of exactly 75 characters', async ({ page }) => {
    await registerPage.fillForm(validMaxLenghtUsernamePass);
    await registerPage.checkCheckbox(true);
    await registerPage.submitForm();

    await expect(page.locator(registerLocators.verifySubmitEmail)).toHaveText(registerMessages.verifyEmail);
  });
});

test.describe('@negative', () => {

  test('TS03 - All fields are empty ', async ({ page }) => {
    await registerPage.fillForm(emptyFields);
    await registerPage.checkCheckbox(false);
    await registerPage.submitForm();

    await expect(page.locator(registerLocators.errorUsername)).toHaveText(registerMessages.errorUsernameEmpty);
  });


  test('TS04 - Email invalid format', async ({ page }) => {
    await registerPage.fillEmail(invalidShortAndSpecialEmail.email);

    await expect(page.locator(registerLocators.errorEmail)).toHaveText(registerMessages.errorEmailInvalid);

  });


  test('TS05 - Email and Confirm Email do not match', async ({ page }) => {
    await registerPage.fillEmail(invalidNotMatchAndSpecialUsername.email);
    await registerPage.fillConfirmEmail(invalidNotMatchAndSpecialUsername.confirmEmail);

    await expect(page.locator(registerLocators.errorConfrimEmail)).toContainText(registerMessages.errorEmailNotMatch);
  });

  test('TS06 - Password and Confirm Password do not match', async ({ page }) => {
    await registerPage.fillPassword(invalidNotMatchAndSpecialUsername.password);
    await registerPage.fillConfirmPassword(invalidNotMatchAndSpecialUsername.confirmPassword);

    await expect(page.locator(registerLocators.errorConfrimPassword)).toContainText(registerMessages.errorPasswordNotMatch);
  });

  test('TS07 - Password is too short (less than 8 characters)', async ({ page }) => {
    await registerPage.fillPassword(invalidShortAndSpecialEmail.password);

    await expect(page.locator(registerLocators.errorPassword)).toContainText(registerMessages.errorPasswordTooShort);
  });

  test('TS08 - Username is too short (less than 5 characters)', async ({ page }) => {
    await registerPage.fillUsername(invalidShortAndSpecialEmail.username);

    await expect(page.locator(registerLocators.errorUsername)).toContainText(registerMessages.errorUsernameTooShort);
  });

  test('TS09 - Username must contain only alphanumeric characters', async ({ page }) => {
    await registerPage.fillUsername(invalidNotMatchAndSpecialUsername.username);

    await expect(page.locator(registerLocators.errorUsername)).toContainText(registerMessages.errorUsernameNotAlphanumeric);
  });

  test('TS10 - Terms and Conditions checkbox is not selected  ', async ({ page }) => {
    await registerPage.checkCheckbox(true);
    await registerPage.checkCheckbox(false);
    await registerPage.submitForm();

    await expect(page.locator(registerLocators.errorTermsCheckBox)).toContainText(registerMessages.errorTermsNotAccepted);

  });

  test.skip('TS11 - Username is already taken ', async ({ page }) => {
    //TODO: implement this when CAPTCHA bypass is available

  });


});
