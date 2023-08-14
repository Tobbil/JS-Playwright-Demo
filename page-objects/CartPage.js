import { expect } from "@playwright/test";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.productTable = page.locator(".table-responsive");
    this.productNames = this.productTable.locator("#tbodyid").locator("td");
  }

  async checkIfProductNameInCart(productName) {
    await expect(this.productNames).not.toHaveCount(0);
    const productNameInTable = await this.productNames.nth(1).innerText();
    expect(productNameInTable).toBe(productName);
  }
}
