
//importing test, expect PlayWright Test library package
import { test, expect } from '@playwright/test';


test.describe('Test Suite 1', () => {
  test('Case 1', async ({ page }) => {
    console.log('Executing test case 1');
  });

  test('Case 2', async ({ page }) => {
    console.log('Executing test case 2');
  });
});
