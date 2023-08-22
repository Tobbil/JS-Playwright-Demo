import { Navigation } from "../page-objects/Navigation";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.navigation = new Navigation(page);
    this.productTable = page.locator(".table-responsive");
    this.products = this.productTable.getByRole("row");
  }

  productByName(productName) {
    return this.products.filter({ hasText: productName });
  }
}
