import { test, expect } from '@playwright/test';

test('has title', { tag: ['@example', '@regression'] }, async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);

  // attach text
  test.info().attach('failure reason', {
    body: 'The title of the page is incorrect',
    contentType: 'text/plain',
  });

  // attach screenshot
  const screenshot = await page.getByRole('link', { 
    name: 'Playwright logo Playwright' 
  }).screenshot();
  
  test.info().attach('screenshot', {
    body: screenshot,
    contentType: 'image/png',
  });
  
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.02,
  });
});

test('get started link', { tag: ['@example', '@regression'] }, async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
