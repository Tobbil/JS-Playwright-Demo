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
    await expect(cartPage.productByName(addedProduct)).toBeVisible();
    await page.waitForURL(/\/cart/);
    await page.pause();
  });
});
