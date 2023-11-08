// @ts-check
const { test, expect } = require("@playwright/test");

test.skip("orangeHRM_", async ({ page, context }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  // css selector

  await page.locator('input[placeholder="Username"]').fill("Admin");

  // xpath
  await page.locator("//input[@placeholder='Password']").fill("admin123");

  await page.getByRole("button", { name: "Login" }).click();

  await page.getByRole("link", { name: "Leave" }).click();
  await page.waitForTimeout(3000);

  await page.getByAltText("profile picture").click();

  await page.getByText("Logout").click();

  await page.waitForTimeout(3000);
});

test.skip("orangeHRM_filter", async ({ page, context }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await context.tracing.start({ screenshots: true, snapshots: true });

  await page.locator('input[placeholder="Username"]').fill("Admin");

  // xpath
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.getByRole("button", { name: "Login" }).click();

  //filter by text

  // await page.getByRole("listitem").filter({hasText:"Leave"}).click()

  // filter by child
  await page
    .getByRole("listitem")
    .filter({ has: page.getByRole("link", { name: "Leave" }) })
    .click();

  await context.tracing.stop({ path: "tracing662.zip" });

  /* --trace on 

    download the file or 
    trace.playwright.dev
    */
  await page.waitForTimeout(5000);
});

test.skip("Radion_checkbox", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form");
  await page.locator("//label[normalize-space()='Male']").click();
  await page.waitForTimeout(1000);

  await page.locator("//label[normalize-space()='Female']").click();
  await page.locator("//label[normalize-space()='Music']").check();

  await page.waitForTimeout(8000);
});

test.skip("dropdown", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
  await page.locator("//input[@id='user-name']").fill("standard_user");

  await page.locator("//input[@id='password']").fill("secret_sauce");
  await page.locator("//input[@id='login-button']").click();

  await page
    .locator("//select[@class='product_sort_container']")
    .selectOption("lohi");
  await page.waitForTimeout(3000);

  await page
    .locator("//select[@class='product_sort_container']")
    .selectOption({ index: 0 });
  await page.waitForTimeout(3000);

  await page
    .locator("//select[@class='product_sort_container']")
    .selectOption({ label: "Name (Z to A)" });

  await page.waitForTimeout(3000);
});

test.skip("multiplevalue", async ({ page }) => {
  await page.goto(
    "https://chercher.tech/practice/practice-dropdowns-selenium-webdriver"
  );

  await page
    .locator("//select[@id='second']")
    .selectOption([{ label: "Pizza" }]);
  await page
    .locator("//select[@id='second']")
    .selectOption([{ index: 0 }, { index: 1 }]);

  await page.waitForTimeout(3000);
});

test.skip("autocomplete", async ({ page }) => {
  await page.goto("https://demoqa.com/auto-complete");

  await page.locator("#autoCompleteMultipleInput").fill("g")

  await page.waitForTimeout(3000);

  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(3000);

  // await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await page.locator("#autoCompleteMultipleInput").fill("r")
  await page.waitForTimeout(3000);

  await page.keyboard.press("ArrowDown");
  await page.waitForTimeout(3000);

  // await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(13000);
});

test.skip("alert", async ({ page }) => {
  await page.goto('https://demoqa.com/alerts');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });

  await page.locator('#alertButton').click();

  await page.waitForTimeout(13000);
});

test.skip("uploadFile", async ({ page }) => {
  await page.goto('https://www.foundit.in/seeker/registration');

  // Use the 'xpath' attribute to locate the input element.
  const fileInput = await page.locator('//input[@type="file"]');
  
  // Use setInputFiles to upload the file.
  await fileInput.setInputFiles('C:/Users/User/OneDrive/Desktop/project/test.pdf');

  await page.waitForTimeout(10000)
});

test("Maximize Window", async ({ page }) => {
  await page.goto('https://www.google.com'); 
  await page.setViewportSize({ width: 1420, height: 1080 });

  await page.waitForTimeout(10000)


});


