// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true, // Changed: Enable full parallelism for faster CI execution
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Optimize parallel tests for CI */
  workers: process.env.CI ? 4 : undefined, // Changed: Increased workers for CI to leverage Docker resources
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['junit', { outputFile: 'test-results/results.xml' }], // Added: JUnit reporter for Jenkins
    ['html', { outputDir: 'playwright-report', open: 'never' }], // Modified: HTML report for CI, no auto-open
    ['list'], // Kept: For console output during local runs
    ['allure-playwright'], // Kept: For Allure reporting if needed
  ],

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'on', // Kept: Enable tracing for debugging
    screenshot: 'on', // Kept: Capture screenshots for traces
    video: 'retain-on-failure', // Modified: Only keep videos on failure to save space in CI
    headless: true, // Added: Ensure headless mode for CI compatibility
    viewport: { width: 1280, height: 720 }, // Added: Consistent viewport for CI
    ignoreHTTPSErrors: true, // Added: Ignore HTTPS errors for flexibility
  },
  outputDir: './test-results', // Kept: Consistent output directory for traces, screenshots, videos

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Google Chrome',
      use: { browserName: 'chromium', channel: 'chrome', headless: true }, // Modified: Enforce headless mode
    },
    // Commented out other browsers to simplify CI; uncomment if needed
    /*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], headless: true },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], headless: true },
    },
    */
    /* Test against mobile viewports (optional for CI) */
    /*
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'], headless: true },
    },
    */
  ],

  /* Run your local dev server before starting the tests (optional) */
  /*
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
  */
});
