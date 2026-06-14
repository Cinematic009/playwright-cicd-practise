import { Page, test, Expect, Locator, chromium, Browser, BrowserContext, expect } from '@playwright/test';

test.skip('assertions tests', async ({ }) => {

    // expect have its own auto wait which 5 seconds
    expect(1 + 1).toBe(2);
    expect('Playwright').toEqual('Playwright')
    expect('Playwright').toContain('Play')
    expect([1, 2, 4]).toEqual([1, 2, 4])
    expect(true).toBeTruthy()
    expect(false).toBeFalsy()
    expect([]).toBeTruthy()
    expect(0).toBeFalsy()
    expect(null).toBeNull();
    expect(50).toBeGreaterThan(10);
    expect({ name: 'Sunil' }).toEqual({ name: 'Sunil' });

})


test.skip('locator bases assertions', async ({ page }) => {

    await page.waitForTimeout(1500);
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    let deskToptext = page.getByText('Desktops', { exact: true });
    await expect(deskToptext).toBeVisible();
    await expect(deskToptext).toHaveText('Desktops', { timeout: 3000 })

    let nameAttr = page.locator('#input-firstname');
    await expect(nameAttr).toHaveAttribute('id', 'input-firstname')

    let footerLinks = page.locator(`//footer//a`);
    expect(footerLinks).toHaveCount(16);
})

