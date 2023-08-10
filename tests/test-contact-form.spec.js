import { test, expect } from "@playwright/test";
import { Navigation } from "../page-objects/Navigation";
import { ContactForm } from "../page-objects/ContactForm";

test("Contact form with correct input", async ({ page }) => {
  await page.goto("/");
  const navigation = new Navigation(page);
  await navigation.goToContactForm();
  const contactForm = new ContactForm(page);
  const data = { email: "test@test.com", name: "Tobiasz", message: "Blabla!" };
  await contactForm.fillForm(data);
  await contactForm.submitForm();
  await page.pause();
});
