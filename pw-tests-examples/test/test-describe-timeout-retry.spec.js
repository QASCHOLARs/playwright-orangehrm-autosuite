//importing test, expect PlayWright Test library package
import { test, expect } from '@playwright/test';

//Below step is to set timeout and retry for all test cases inside this describe block
// 20 seconds per describe block, 1 retry
// If any test case inside this describe block exceeds 20 seconds, it will be marked as failed
// If any test case inside this describe block fails, it will be retried 1 time

test.describe.configure({ timeout: 20000, retries: 1 }); // 20 seconds per describe block, 1 retry

test.describe('Test Suite 1', () => {
  test('Case 1', async ({ page }) => {
    await new Promise((resolve) => setTimeout(resolve, 25000)); // 25s operation
    console.log('Executing test case 1');
  });

  test('Case 2', async ({ page }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1s operation
    console.log('Executing test case 2');
  });
});
