import { test, expect } from '@playwright/test';

// Тест 1: Перевірка успішного відправлення форми зворотного зв'язку
test('Успішне відправлення форми зворотного зв’язку', async ({ page }) => {
  await page.goto('http://localhost:3000/contact.html');
  await page.fill('#email', 'student@example.com');
  await page.fill('#message', 'Тестове повідомлення');
  await page.click('#sendBtn');
  await expect(page.locator('#sendSuccess')).toBeVisible();
});

// Тест 2: Перевірка наявності текстового заголовка на сторінці контактів
test('Перевірка заголовка блоку контактів', async ({ page }) => {
  await page.goto('http://localhost:3000/contact.html');
  await expect(page.locator('h2')).toHaveText("Зворотний зв'язок");
});

// Тест 3: Тестування стороннього сайту (перевірка заголовка документації Node.js)
test('Перевірка стороннього сайту nodejs.org', async ({ page }) => {
  await page.goto('https://nodejs.org/en');
  await expect(page).toHaveTitle(/Node.js/);
});