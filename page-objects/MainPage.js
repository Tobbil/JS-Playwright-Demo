import { expect } from "@playwright/test";
import { randomNum } from "../helpers";
import { Navigation } from "../page-objects/Navigation";
export class MainPage {
  constructor(page) {
    this.page = page;
    this.productCard = page.locator(".card-block");
  }

  async addRandomProductToBasket() {
    const productCount = await this.productCard.count();
    await expect(this.productCard).not.toHaveCount(0);

    const randomProductIndex = randomNum(0, productCount);
    const productLink = this.productCard
      .nth(randomProductIndex)
      .locator(".card-title")
      .locator(".hrefch");
    await productLink.click();

    const productName = this.page.locator(".name").innerText();
    const addToCartBtn = this.page.locator(".btn-success");
    this.page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Product added");
      await dialog.accept();
    });
    
    await addToCartBtn.click();
    this.page.waitForURL(/\/cart/);

    return productName;
  }
}
