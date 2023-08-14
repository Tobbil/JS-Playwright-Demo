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
    await this.emailField.fill(data.email);
    await this.nameField.fill(data.name);
    await this.messageField.fill(data.message);
  }

  async submitForm() {
    this.page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Thanks for the message");
      await dialog.accept();
    });
    await this.submitButton.click();
  }
}
