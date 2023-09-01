import { expect } from "@playwright/test";
import { Navigation } from "../page-objects/Navigation";
import { randomNum } from "../helpers";

export class MainPage {
  constructor(page) {
    this.page = page;
    this.navigation = new Navigation(page);
    this.productCard = page.locator(".card-block");
    this.categoriesMenu = page.locator(".col-lg-3").first()
  }

  async addRandomProductToCart() {
    await expect(this.productCard).not.toHaveCount(0);
    const productCount = await this.productCard.count();

    const randomProductIndex = randomNum(0, productCount);
    const productLink = this.productCard
      .nth(randomProductIndex)
      .locator(".card-title .hrefch");
    await productLink.click();

    const productName = this.page.locator(".name").innerText();
    const addToCartBtn = this.page.locator(".btn-success");

    await addToCartBtn.click();

    return productName;
  }
}
