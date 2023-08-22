import { test, expect } from "./fixtures";
import { ContactForm } from "../page-objects/ContactForm";

test.describe("tests for the contact form", () => {
  test("contact form with correct input", async ({ mainPage, page }) => {
    const contactForm = new ContactForm(page);
    await mainPage.navigation.goToContactForm();
    const data = {
      email: "test@test.com",
      name: "Tobiasz",
      message: "Message",
    };
    await contactForm.fillForm(data);
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Thanks for the message");
      await dialog.accept();
    });
    await contactForm.submitForm();
  });
});
