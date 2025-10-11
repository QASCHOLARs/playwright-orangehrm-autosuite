//This code demonstrates test.describe mode "default" in Playwright
//In "default" mode, tests within the describe block run in parallel, but each test runs in its own isolated context.
//This is useful for grouping related tests while still benefiting from parallel execution.

const { test, expect } = require('@playwright/test');
test.describe.configure({ mode: 'default', timeout: 60000 });

test.describe('Default Test Suite', () => {
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
// npx playwright test test-describe-mode-default.spec.js
