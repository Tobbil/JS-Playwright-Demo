import { test as base, expect as exp } from "@playwright/test";
import { MainPage } from "../page-objects/MainPage";

export const expect = exp;
export const test = base.extend({
  mainPage: async ({ page }, use) => {
    await page.goto("/");
    const mainPage = new MainPage(page);
    await use(mainPage);
  },
});
