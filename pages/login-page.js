const { test, expect, context, defineConfig } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'Username' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.profileIcon = page.locator('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon');
    this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
    
  }

async navigateURL(appURL) {
   console.log("Web Application is being lauched with URL: " + appURL);
  //await this.page.waitForTimeout(1000);
  await this.page.goto(appURL);
 
}

async login(username, password) {
  await this.usernameInput.fill(username);
  await this.passwordInput.fill(password);
  await this.loginButton.click();
}

async logout() {
  await this.profileIcon.click();
  await this.logoutButton.click();
}

async verifyDashboard() {
  await expect.soft(this.page).toHaveTitle("Dashboard");
}

}



module.exports = {LoginPage};
