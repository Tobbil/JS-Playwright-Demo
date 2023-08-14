import { test, expect } from "@playwright/test";
import { MainPage } from "../page-objects/MainPage";
import { Navigation } from "../page-objects/Navigation";
import { CartPage } from "../page-objects/CartPage";

test.describe("tests for the cart", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });
  test("product is correctly added to cart", async ({ page }) => {
    const mainPage = new MainPage(page);
    const navigation = new Navigation(page);
    const cartPage = new CartPage(page);
    const addedProduct = await mainPage.addRandomProductToCart();
    await navigation.goToCart();
    await cartPage.checkIfProductNameInCart(addedProduct);
  });
});
