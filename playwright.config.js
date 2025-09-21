// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,

  reporter: [
    ['junit', { outputFile: 'test-results/results.xml' }],
    ['html', { outputDir: 'playwright-report', open: 'never' }],
    ['list'],
    ['allure-playwright'],
    ['blob'],
  ],

  /* Shared settings for all projects */
  use: {
    trace: 'on',
    screenshot: 'on',
    video: 'retain-on-failure',
    headless: process.env.CI ? true : false, // headless in CI, headed locally
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },

  outputDir: './test-results',

  /* Define projects */
  projects: [
    {
      name: 'chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        headless: process.env.CI ? true : false,
      },
    },
    /*
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: process.env.CI ? true : false,
      },
    },
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        headless: process.env.CI ? true : false,
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        headless: process.env.CI ? true : false,
      },
    },*/
  ],
});
