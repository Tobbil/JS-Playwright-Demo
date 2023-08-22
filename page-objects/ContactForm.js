import { expect } from "@playwright/test";

export class ContactForm {
  constructor(page) {
    this.page = page;
    this.emailField = page.locator("#recipient-email");
    this.nameField = page.locator("#recipient-name");
    this.messageField = page.locator("#message-text");
    this.submitButton = page.getByRole("button", { name: "Send message" });
    this.closeButtonHeader = page.getByLabel("New message").getByLabel("Close");
    this.closeButtonFooter = page.getByLabel("New message").getByText("Close");
  }

  async fillForm(data) {
    data.email && (await this.emailField.fill(data.email));
    data.name && (await this.nameField.fill(data.name));
    data.message && (await this.messageField.fill(data.message));
  }

  async submitForm() {
    await this.submitButton.click();
  }
}
