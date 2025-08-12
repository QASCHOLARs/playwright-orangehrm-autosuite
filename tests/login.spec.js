const { test, expect, defineConfig, context } = require('@playwright/test');
const { LoginPage } = require('../pages/login-page');

const { loadConfig } = require('../utils/set-environment-loader');
const env = process.env.ENV || 'qa'; // Default to 'dev'
console.log('Environment: ' + env);
const config = loadConfig(env);
console.log('Recieved: ' + config.baseURL);

test.describe('Login Feature', () => {
  test('TCO1-login to OrangeHRM with valid credentials @smoke', async ({
    page,
    context,
  }) => {
    const loginPage = new LoginPage(page);
    console.log('Base URL: ' + config.baseURL);
    await test.step(
      'Open Browser and Navigate to OrangeHRM :' + config.baseURL,
      async () => {
        await loginPage.navigateURL(config.baseURL);
      }
    );
    await test.step('Login to the OrangeHRM with valid credentials', async () => {
      await loginPage.login(
        config.credentials.username,
        config.credentials.password
      );
    });
    await test.step('Verify the Dashboard page', async () => {
      //await loginPage.verifyDashboard();
    });
    await test.step('Logout from the OrangeHRM', async () => {
      await loginPage.logout();
    });
  });
});
