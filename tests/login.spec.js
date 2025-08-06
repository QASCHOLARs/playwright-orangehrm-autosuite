import { test, expect } from '@playwright/test';

test('login to OrangeHRM', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  /*await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Akki' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();*/
});

test('login to GuardrailsAI', async ({ page }) => {
  await page.goto('https://hub.guardrailsai.com/');
  await page.waitForTimeout(5000);
  /*await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Akki' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();*/
});