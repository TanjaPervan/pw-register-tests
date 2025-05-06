import { actions, randomDelay } from "../../utils/helper.js";
import { registerLocators } from "./registerLocators";



export class RegisterPage {
  /**
  * @param {import('@playwright/test').Page} page
  */
  constructor(page) {
    this.page = page;
  }

  async fillForm(user) {
    const { username, email, confirmEmail, password, confirmPassword } = user;
    await actions.fillField(this.page, registerLocators.username, username);
    await this.page.waitForTimeout(randomDelay());

    await actions.fillField(this.page, registerLocators.email, email);
    await this.page.waitForTimeout(randomDelay());
    await actions.fillField(this.page, registerLocators.confirmEmail, confirmEmail);
    await this.page.waitForTimeout(randomDelay());

    await actions.fillField(this.page, registerLocators.password, password);
    await this.page.waitForTimeout(randomDelay());
    await actions.fillField(this.page, registerLocators.confirmPassword, confirmPassword);
    await this.page.waitForTimeout(randomDelay());

  }

  async checkCheckbox(terms) {
    if (terms) {
      await this.page.waitForTimeout(randomDelay());
      await actions.checkCheckbox(this.page, registerLocators.termsCheckBox);
    }
    else {
      await this.page.waitForTimeout(randomDelay());
      await this.page.uncheck(registerLocators.termsCheckBox);
    }
  }

  async submitForm() {
    await actions.clickButton(this.page, registerLocators.submitButton);
  }
}
