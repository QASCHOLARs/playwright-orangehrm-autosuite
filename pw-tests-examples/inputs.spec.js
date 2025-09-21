
const { test, expect, defineConfig, context } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
  // This will run before each test
  console.log("Before each test - navigating to the base URL");
  await page.goto("https://letcode.in/");
  await page.locator("text=Work-Space").click();
  //await expect(page).toHaveURL(/.*letcode.in/test);
  await page.locator("text=Edit").click();
  //await expect(page).toHaveURL(/.*letcode.in/edit/);
}
);
test("interaction examples", async ({ page }) => {
  // Example of async/await
  //await page.goto("https://letcode.in/edit");
  //const title = await page.title();
  //console.log(`Page title is: ${title}`);
  //expect(title).toBe("Edit | LetCode");

  //examples of interacting with the input field
  
  //1 - most recommeded
  const inputField = await page.locator("#fullName");
  await inputField.type("Playwright User");//type character by character as a user would do
  await inputField.fill("Playwright User Updated");//clears the field and then enters the value
  await expect(inputField).toHaveValue("Playwright User Updated");
/*
  //2 - less recommeded
  await page.type("#fullName", " - Appended Text");//appends the text to the existing value
  await expect(inputField).toHaveValue("Playwright User Updated - Appended Text");

  //3 - no
  const inputElement = await page.$("#fullName"); 
  await inputElement?.type("More Text");

 */
  await page.pause();


});


