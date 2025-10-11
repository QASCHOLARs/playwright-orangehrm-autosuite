//importing test, expect PlayWright Test library package
import { test, expect } from '@playwright/test';

//This test suite deminstrates the use of test.describe.skip to skip the entire suite.
//This is useful when you want to skip a suite temporarily.
//this suite will be skipped
test.describe.skip('Test Suite 1', () => {
  test('Case 1', async ({ page }) => {
    console.log('Executing test case 1');
  });

  test('Case 2', async ({ page }) => {
    console.log('Executing test case 2');
  });
});

//this suite will be executed
test.describe('Test Suite 2', () => {
  test('Case 3', async ({ page }) => {
    console.log('Executing test case 3');
  });
});

//how to run only a specific test case in a suite
//npx playwright test pw-tests-examples/test/test-describe-skip.spec.js
