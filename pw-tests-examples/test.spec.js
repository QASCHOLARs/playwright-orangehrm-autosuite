// Examples of different ways to define a test method in Playwright Using the following signatures:

//test(title, body)
//test(title, details, body)

const { test, expect, defineConfig, context } = require('@playwright/test');

test.describe('Test Method Signatures', () => {
  
  // Using test(title, body)
  test('using title and body', async ({ page }) => {  
    await page.goto('https://example.com');
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  // Using test(title, details, body)
  test('with details', { tag: '@smoke', timeout: 30000 }, async ({ page }) => {
    await page.goto('https://example.com');
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Example Domain');
  });

  // Another example with different details
  test('Another test with details',
    { retries: 2, timeout: 20000 },
    async ({ page }) => {
      await page.goto('https://example.com');
      const link = page.locator('a');
      await expect(link).toHaveAttribute(
        'href',
        'https://www.iana.org/domains/example'
      );
    }
  );

  //another with annotations
  test(
    'with annotations',
    { tags: ['@regression', '@ui'], timeout: 25000 },
    async ({ page }) => {
      await page.goto('https://example.com');
      const paragraph = await page.locator('p').textContent();
      expect(paragraph).toContain('illustrative examples');
    }
  );

  test(
    'basic test',
    {
      annotation: {
        type: 'issue',
        description: 'https://github.com/microsoft/playwright/issues/23180',
      },
    },
    async ({ page }) => {
      await page.goto('https://playwright.dev/');
      // ...
    }
  );
});
