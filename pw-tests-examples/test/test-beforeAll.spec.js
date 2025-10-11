//This code demonstrates playwright test.beforeAll hook.

const { test, expect } = require('@playwright/test'); 

test.beforeAll(async ({ browser }) => {
  // This will run once before all tests
  console.log('This block will be executed before all tests');
}); 

test('example test 1', async ({ page }) => {
console.log('Executing test 1');
});

test('example test 2', async ({ page }) => {
  console.log('Executing test 2');
});

