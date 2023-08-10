import { expect } from "@playwright/test";

export class Navigation {
  constructor(page) {
    this.page = page;
    this.homeLink = this.page.getByRole("link", { name: "Home" });
    this.contactLink = this.page.getByRole("link", { name: "Contact" });
    this.aboutUsLink = this.page.getByRole("link", { name: "About us" });
    this.cartLink = this.page.getByRole("link", { name: "Cart" });
    this.logInLink = this.page.getByRole("link", { name: "Log in" });
    this.signUpLink = this.page.getByRole("link", { name: "Sign up" });
  }

  async goToContactForm() {
    await this.contactLink.click()
  }
}