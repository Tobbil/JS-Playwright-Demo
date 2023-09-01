import { Navigation } from "../page-objects/Navigation";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.navigation = new Navigation(page);
    this.productTable = page.locator(".table-responsive");
    this.products = page.locator("#tbodyid tr");
  }

  productByName(productName) {
    return this.products.filter({ hasText: productName });
  }

  async deleteItem(itemName) {
    const product = this.productByName(itemName);
    await product.getByText("Delete").click();
  }
}
