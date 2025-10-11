//importing test, expect PlayWright Test library package
import { test, expect } from '@playwright/test';


//this step sets timeout for all test cases inside this describe block
// 20 seconds per describe block i.e 20 secnds for each test
//if it exceeds this time, the test will be marked as failed

//Notes:
//if you set timeout here, it will override the global timeout set in playwright.config.js
// if you set timeout here, it will override the timeout set in individual test cases
// if you set timeout here, it will override the timeout set in beforeEach and afterEach hooks
// if you set timeout here, it will override the timeout set in beforeAll and afterAll hooks
//if you set timeout here, it will override the timeout set in fixtures

test.describe.configure({ timeout: 20000 }); 

test.describe('Test Suite 1', () => {
  //test.describe.configure({ timeout: 20000 }); // 20 seconds per describe block

  test('Case 1', async ({ page }) => {
    await new Promise((resolve) => setTimeout(resolve, 25000)); // 25s operation
    console.log('Executing test case 1');
  });

  test('Case 2', async ({ page }) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1s operation
    console.log('Executing test case 2');
  });
});
