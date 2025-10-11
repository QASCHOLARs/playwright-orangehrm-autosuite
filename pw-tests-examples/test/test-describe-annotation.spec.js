//importing test, expect PlayWright Test library package
import { test, expect } from '@playwright/test';
import { clear } from 'console';

//adding custom annotation to describe block
test.describe(
  'Test Suite 1',
  {
    tag: ['@smoke', '@registration'],
    annotation: {
      name: 'Custom Annotation',
      description: 'https://github.com/microsoft/playwright/issues/23180',
      type: 'bug',
    },
  },

  () => {
    test('Case 1', { tags: ['@create user'] }, async ({ page }) => {
      console.clear();
      console.log('Executing test case 1');
    });
    test('Case 2', { tags: ['@login user'] }, async ({ page }) => {
      console.clear();
      console.log('Executing test case 2');
    });
  }
);

//how to run the test:
//npx playwright test test-describe-annotation.spec.js --grep "@smoke" --reporter=html
