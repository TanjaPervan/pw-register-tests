const { test, expect } = require('@playwright/test');

test('register page', async({page})=>{
  await page.goto('/register');
  await expect(page).toHaveURL('register');
});
