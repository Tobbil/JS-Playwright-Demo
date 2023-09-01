import { test, expect } from "./fixtures";
import { ContactForm } from "../page-objects/ContactForm";
import { testData } from "../test-data/contactForm";

test.describe("tests for the contact form", () => {
  test("contact form with correct input", async ({ mainPage, page }) => {
    const contactForm = new ContactForm(page);
    await mainPage.navigation.goToContactForm();
    await contactForm.fillForm(testData);
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).toContain("Thanks for the message");
      await dialog.accept();
    });
    await contactForm.submitForm();
  });

  test.only("contact form with empty name field", async ({
    mainPage,
    page,
  }) => {
    const contactForm = new ContactForm(page);
    await mainPage.navigation.goToContactForm();
    delete testData.name;
    await contactForm.fillForm(testData);
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toContain("alert");
      expect(dialog.message()).not.toContain("Thanks for the message");
      await dialog.accept();
    });
    await contactForm.submitForm();
    await page.pause();
  });
});
