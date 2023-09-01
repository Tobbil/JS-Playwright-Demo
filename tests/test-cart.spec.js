import { test, expect } from "./fixtures";
import { CartPage } from "../page-objects/CartPage";

test.describe("tests for the cart", () => {
  test("product is correctly added to cart", async ({ mainPage, page }) => {
    const cartPage = new CartPage(page);

    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    const addedProduct = await mainPage.addRandomProductToCart();
    await mainPage.navigation.goToCart();
    await page.waitForURL(/\/cart/);
    await expect(cartPage.productByName(addedProduct)).toBeVisible();
  });

  test("product is correctly deleted from cart", async ({
    mainPage,
    page,
  }) => {
    const cartPage = new CartPage(page);
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    const addedProduct = await mainPage.addRandomProductToCart();
    await mainPage.navigation.goToCart();
    await page.waitForURL(/\/cart/);
    await expect(cartPage.productByName(addedProduct)).toBeVisible();
    await expect(cartPage.products).toHaveCount(1);
    await cartPage.deleteItem(addedProduct);
    await expect(cartPage.products).toHaveCount(0);
  });
});
