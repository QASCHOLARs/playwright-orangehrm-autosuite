//importing test, expect PlayWright Test library package
import { test, expect } from '@playwright/test';
import { clear } from 'console';

//Grouping test cases inside test.describe block
test.describe('Test Suite 1', { tag: ['@smoke', '@registration'] }, () => {
  test('Case 1', { tags: ['@create user'] }, async ({ page }) => {
    console.log('Executing test case 1');
  });

  test('Case 2', { tags: ['@login user'] }, async ({ page }) => {
    console.log('Executing test case 2');
  });
});

test.describe('Test Suite 2', { tag: ['@regression', '@registration'] }, () => {
  test('Case 3', { tags: ['@create user'] }, async ({ page }) => {
    console.log('Executing test case 3');
  });

  test('Case 4', { tags: ['@login user'] }, async ({ page }) => {
    console.log('Executing test case 4');
  });
});

//Tips:
//npx playwright test --grep "@smoke" --list
//npx playwright test --grep "@regression" --list

//how to run tests with multiple tags
//npx playwright test --grep "@registration" --grep "@smoke"
//npx playwright test --grep "@registration" --grep "@regression"

//run smoke suite
//npx playwright test test-describe-tag-tags.spec.js  --grep "@smoke"

//run suite other than smoke
//npx playwright test test-describe-tag-tags.spec.js  --grep-invert "@smoke"
