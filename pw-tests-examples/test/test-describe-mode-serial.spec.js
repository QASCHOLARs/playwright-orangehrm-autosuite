//This code demonstrates test.describe mode "serial" in Playwright
// tests will run in the order they are defined within the describe block
// useful when tests have dependencies on each other
// however, it's generally recommended to keep tests independent for reliability
// if one test fails, subsequent tests may be affected. i.e never execute remaining tests if one fails.

const { test, expect } = require('@playwright/test');
test.describe.configure({ mode: 'serial', timeout: 60000 });

test.describe('Serial Test Suite', () => {
  test('Case 1 - Google Search', async ({ page }) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
    await page.click('text=About');
    /*await expect(page).toHaveTitle(/Google - About/);
    await page.goBack();
    await expect(page).toHaveTitle(/Google/);
    await page.click('text=Store');
    await expect(page).toHaveTitle(/Google Store/); */
  });
  test('Case 2 - GitHub Search', async ({ page }) => {
    await page.goto('https://www.github.com');
    await expect(page).toHaveTitle(/GitHub/);
  });
  test('Case 3 - Wikipedia Search', async ({ page }) => {
    await page.goto('https://www.wikipedia.org');
    await expect(page).toHaveTitle(/Wikipedia/);
  });
});

// To run this test, use the command:
// npx playwright test test-describe-mode-serial.spec.js
