//importing test, expect PlayWright Test library package
import { test, expect } from '@playwright/test';

//This test suite deminstrates the use of test.describe.fixme to mark the entire suite as needing attention.
//This is useful when you want to indicate that a suite is not working as expected.
//this suite will be marked as needing attention
//and will be skipped during the test run
test.describe.fixme('Test Suite 1', () => {
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
