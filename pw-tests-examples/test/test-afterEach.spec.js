//This code demonstrates playwright test.beforeAll hook.

const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ browser }) => {
  // This will run once before each test
  console.log('This block will be executed before each test');
});

test('example test 1', async ({ page }) => {
  console.log('Executing test 1');
});

test('example test 2', async ({ page }) => {
  console.log('Executing test 2');
});

test.afterEach(async ({ browser }) => {
  // This will run once after each test
  console.log('This block will be executed after each test');
});
