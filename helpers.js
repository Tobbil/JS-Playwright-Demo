import { expect } from "@playwright/test";

export function randomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

