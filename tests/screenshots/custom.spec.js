import { test, expect } from '@playwright/test';

// Тест 1: Скріншот окремого UI-блоку (картки форми)
test('Скриншот картки форми зворотного зв’язку', async ({ page }) => {
  await page.goto('http://localhost:3000/contact.html');
  const card = page.locator('#contactCard');
  await expect(card).toHaveScreenshot('screenshots/custom/contact-card.png');
});

// Тест 2: Скріншот усієї сторінки контактів
test('Скриншот усієї сторінки контактів', async ({ page }) => {
  await page.goto('http://localhost:3000/contact.html');
  await expect(page).toHaveScreenshot('screenshots/custom/contact-page.png');
});