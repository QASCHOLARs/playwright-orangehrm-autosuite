//importing test, expect PlayWright Test library package
import { test, expect } from '@playwright/test';

//This test suite deminstrates the use of test.describe.only to mark the entire suite as needing attention.
//This is useful when you want to run only a specific suite and ignore others.
//this suite will be executed
test.describe.only('Test Suite 1', () => {
  test('Case 1', async ({ page }) => {
    console.log('Executing test case 1');
  });

  test('Case 2', async ({ page }) => {
    console.log('Executing test case 2');
  });
});

//this suite will not be executed
test.describe('Test Suite 2', () => {
  test('Case 3', async ({ page }) => {
    console.log('Executing test case 3');
  });
});

//how to run only a specific test case in a suite
//npx playwright test pw-tests-examples/test/test-describe-only.spec.js
//npx playwright test pw-tests-examples/test/test-describe-only.spec.js --forbid-only
