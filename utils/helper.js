export const actions = {
  async fillField(page, selector, value) {
    try {
      const field = page.locator(selector);
      await field.waitFor({ state: 'visible', timeout: 5000 });
      await field.click();
      await field.type(value, { delay: 120 });
    } catch (e) {
      console.error(`fillField error for ${selector} msg: ${e.message}`);
      throw e;
    }
  },

  async checkCheckbox(page, selector) {
    try {
      const checkbox = page.locator(selector);
      if (!(await checkbox.isChecked())) {
        await checkbox.check();
      }
    } catch (e) {
      console.error(`checkCheckbox error for ${selector}, msg: ${e.message}`);
      throw e;
    }
  },

  async clickButton(page, selector) {
    try {
      const button = page.locator(selector);
      await button.waitFor({ state: 'visible', timeout: 30000 });
      await button.click();
    } catch (e) {
      console.error(`clickButton error for ${selector} msg: ${e.message}`);
      throw e;
    }
  }

};

export function randomDelay(min = 1000, max = 3000) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

