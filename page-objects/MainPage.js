import { expect } from "@playwright/test";
import { randomNum } from "../helpers.js";

export class MainPage {
  constructor(page) {
    this.page = page;
    this.productCard = page.locator(".card-block");
  }

  async addRandomProductToBasket() {
    await this.productCard.last().waitFor();
    const productCount = await this.productCard.count();
    const randomProductIndex = randomNum(0, productCount);
    const productLink = this.productCard
      .nth(randomProductIndex)
      .locator(".card-title")
      .locator(".hrefch");
    await productLink.waitFor();
    await productLink.click();
    await this.page.pause();
  }
}
