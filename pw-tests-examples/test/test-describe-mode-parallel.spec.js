//This code demonstrates test.describe mode "parallel" in Playwright
// tests will run in parallel, potentially improving performance
// however, tests should be independent and not rely on shared state

const { test, expect } = require('@playwright/test');
test.describe.configure({ mode: 'parallel', timeout: 60000 });

test.describe('Parallel Test Suite', () => {
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
// npx playwright test test-describe-mode-parallel.spec.js --headed

//This code runs tests in parallel mode against the chromium browser since chromium is the default browser in Playwright
// You can specify other browsers like firefox or webkit using the --project option
// Example: npx playwright test test-describe-mode-parallel.spec.js --project=firefox --headed

//if we are running the tests from a single file, we can use the --workers option to control the number of parallel workers
// Example: npx playwright test test-describe-mode-parallel.spec.js --workers=3 --headed

//if we are running the tests from a single file, test runner will automatically decide the number of workers based on the number of tests in the file
// Example: npx playwright test test-describe-mode-parallel.spec.js --headed

//if we are running the tests from a single file, test runner will ignore projects defined in the playwright.config.js file and run tests only in the default browser (chromium)
// Example: npx playwright test test-describe-mode-parallel.spec.js --headed
//still you can override the default browser using the --project option
// Example: npx playwright test test-describe-mode-parallel.spec.js --project=firefox --headed
// Example: npx playwright test test-describe-mode-parallel.spec.js --project=webkit --headed
// Example: npx playwright test test-describe-mode-parallel.spec.js --project="Google Chrome" --headed

// Note: Running tests in parallel can lead to issues if they share state or resources.
// Ensure tests are independent to avoid flaky results.

// For more details, refer to the Playwright documentation on test.describe mode:
// https://playwright.dev/docs/test-describe#parallel
