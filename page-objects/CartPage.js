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
    let deleteButton;
    for (let item of await this.products.all()) {
      const text = await item.innerText();
      if (text.includes(itemName)) {
        deleteButton = await item.getByText("Delete");
      }
    }
    await deleteButton.click();
  }
}
