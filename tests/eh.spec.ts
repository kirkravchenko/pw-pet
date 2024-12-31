import { test, expect } from '@playwright/test';
import path from 'path';

test('has logo', { tag: ['@eh', '@regression'] }, async ({ page }) => {
    await page.goto('https://www.everydayhealth.com/');

    const logo = await page.locator('.header__logo a').screenshot();

    test.info().attach('screenshot', {
        body: logo,
        contentType: 'image/png',
    });

    // await expect(page).toHaveScreenshot({ 
    //     maxDiffPixelRatio: 0.01,
    //     stylePath: path.join(__dirname, 'screenshot.css')
    // });
});