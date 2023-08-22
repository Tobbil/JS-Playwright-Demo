import { test, expect } from "./fixtures";

test("navigation bar element screenshot", async ({ mainPage }) => {
  await expect(mainPage.navigation.navBar).toHaveScreenshot();
});

test("categories menu element screenshot", async ({ mainPage }) => {
  await expect(mainPage.categoriesMenu).toHaveScreenshot();
});
