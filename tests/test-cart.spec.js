import { test, expect } from "@playwright/test";
import { MainPage } from "../page-objects/MainPage";

test.describe("tests for the cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("product is correctly added to cart", async ({ page }) => {
    const mainPage = new MainPage(page);
    await mainPage.addRandomProductToBasket();
  });
});
