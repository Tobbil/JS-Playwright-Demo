import { test, expect } from "@playwright/test";
import { Navigation } from "../page-objects/Navigation";
import { ContactForm } from "../page-objects/ContactForm";

test.describe("tests for the contact form", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("contact form with correct input", async ({ page }) => {
    const navigation = new Navigation(page);
    const contactForm = new ContactForm(page);
    await navigation.goToContactForm();
    const data = { email: "test@test.com", name: "Tobiasz", message: "Message" };
    await contactForm.fillForm(data);
    await contactForm.submitForm();
  });
});

