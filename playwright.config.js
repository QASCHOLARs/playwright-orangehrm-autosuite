// @ts-check
import { defineConfig, devices } from '@playwright/test';
import fs from 'fs';
const { RPconfig } = require('./report-portal.config.js');

const timestampLocal = new Date()
  .toLocaleString()
  .replace(/[ :,/]/g, '-')
  .replace(/-+/g, '-');

const resultsDir = `test-results/allure-results/${timestampLocal}`;
fs.mkdirSync(resultsDir, { recursive: true });

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI, //--forbid-only
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,
  timeout: 60000, // 60 seconds per test

  reporter: [
    ['list', { printSteps: true, verbose: true, open: 'never' }],
    ['dot', { verbosity: 'verbose', open: 'never' }],
    ['junit', { outputFile: `test-results/${timestampLocal}/results.xml` }],
    [
      'html',
      {
        outputFolder: `test-results/playwright-report/${timestampLocal}`,
        open: 'never',
      },
    ],
    ['allure-playwright', { outputFolder: resultsDir, open: 'never' }],
    ['blob', { outputFile: `test-results/${timestampLocal}/results.blob` }],
    ['json', { outputFile: `test-results/${timestampLocal}/results.json` }],
    ['line', { outputFile: `test-results/${timestampLocal}/results.line` }],
    ['github', { outputDir: 'github-results' }], // GitHub Actions
    [
      'monocart-reporter',
      {
        name: 'My Test Report',
        outputFile: `test-results/${timestampLocal}/monocart-report/index.html`,
      },
    ],
    // @ts-ignore
    ['@reportportal/agent-js-playwright', RPconfig],
  ],

  /* Shared settings for all projects */
  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/',
    trace: 'on',
    screenshot: 'on',
    video: 'retain-on-failure',
    headless: process.env.CI ? true : false, // headless in CI, headed locally
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    //timeout: 60000, // 60 seconds
    //actionTimeout: newLocal, // 30 seconds
  },

  outputDir: './test-results',

  /* Define projects */
  projects: [
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
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
    {
      name: 'Mobile Chrome',
      use: {
        ...devices['iPhone 12 Pro'],
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
});
