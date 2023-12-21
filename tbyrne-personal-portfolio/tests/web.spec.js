const { test, expect } = require('@playwright/test');

const websiteURL = 'http://localhost:3000';

// // Expected constants.
const expectedLogoText = 'Tom Byrne Portfolio';


test.beforeEach(async ({ page }) => {
    await page.goto(websiteURL);
});

test('Check logo', async ({ page }) => {
    const logoText = await page.locator('[data-tag="logo"]').textContent();
    expect(logoText).toBe(expectedLogoText);
});