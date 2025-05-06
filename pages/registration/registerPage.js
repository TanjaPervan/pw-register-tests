import { actions, randomDelay } from "../../utils/helper.js";
import { registerLocators } from "./registerLocators";



export class RegisterPage {
  /**
  * @param {import('@playwright/test').Page} page
  */
  constructor(page) {
    this.page = page;
  }

  async fillUsername(username) {
    await actions.fillField(this.page, registerLocators.username, username);
  }
  async fillEmail(email) {
    await actions.fillField(this.page, registerLocators.email, email);

  }
  async fillConfirmEmail(confirmEmail) {
    await actions.fillField(this.page, registerLocators.confirmEmail, confirmEmail);

  }
  async fillPassword(password) {
    await actions.fillField(this.page, registerLocators.password, password);

  }
  async fillConfirmPassword(confirmPassword) {
    await actions.fillField(this.page, registerLocators.confirmPassword, confirmPassword);

  }
  async fillForm(user) {
    const { username, email, confirmEmail, password, confirmPassword } = user;

    await this.fillUsername(username);
    await this.page.waitForTimeout(randomDelay());

    await this.fillEmail(email);
    await this.page.waitForTimeout(randomDelay());

    await this.fillConfirmEmail(confirmEmail);
    await this.page.waitForTimeout(randomDelay());

    await this.fillPassword(password);
    await this.page.waitForTimeout(randomDelay());

    await this.fillConfirmPassword(confirmPassword);
    await this.page.waitForTimeout(randomDelay());
  }

  async checkCheckbox(terms) {
    if (terms) {
      await actions.checkCheckbox(this.page, registerLocators.termsCheckBox);
      await this.page.waitForTimeout(randomDelay());
    }
    else {
      await this.page.uncheck(registerLocators.termsCheckBox);
      await this.page.waitForTimeout(randomDelay());
    }
  }

  async submitForm() {
    await actions.clickButton(this.page, registerLocators.submitButton);
  }
}
