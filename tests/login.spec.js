
import { test, expect } from '@playwright/test';

const { loadConfig } = require('../utils/configLoader')
const env = process.env.ENV || 'dev'; // Default to 'dev'
const config = loadConfig(env);



test('TCO-login to OrangeHRM', async ({ page }) => {
  await page.goto(config.baseURL);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(config.credentials.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(config.credentials.password);
  await page.getByRole('button', { name: 'Login' }).click();
await page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});

test('TC1-login to OrangeHRM', async ({ page }) => {
  await page.goto(config.baseURL);
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(config.credentials.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(config.credentials.password);
  await page.getByRole('button', { name: 'Login' }).click();
// await page.getByRole('listitem').filter({ hasText: 'Miguel Cruz' }).locator('i').click();
await page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
await page.getByRole('menuitem', { name: 'Logout' }).click();
});

