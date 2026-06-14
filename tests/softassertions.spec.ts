import { Page, test, Expect, Locator, chromium, Browser, BrowserContext, expect } from '@playwright/test';

test.skip('locator bases assertions', async ({ page }) => {

    await page.waitForTimeout(1500);
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    let deskToptext = page.getByText('Desktsops', { exact: true });
    await expect.soft(deskToptext).toBeVisible();
    await expect.soft(deskToptext).toHaveText('Desktsops', { timeout: 3000 })

    let nameAttr = page.locator('#input-firstname');
    await expect(nameAttr).toHaveAttribute('id', 'input-firstname')
    await nameAttr.fill('Sunil');

    let footerLinks = page.locator(`//footer//a`);
    expect(footerLinks).toHaveCount(16);
})


// Not to be/contain/toEqual etc

test.skip('not to be assertions', async ({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    let deskToptext = page.getByText('error', { exact: true });
    await expect.soft(deskToptext).not.toBeVisible();
})

// test with validating url and title with expect directly
test.skip('url and title', async ({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    
    await expect(page).toHaveTitle('Register Account')
    await expect(page).toHaveURL(/.*account\/register.*/)

    let pageUrl = page.url();
    expect (pageUrl).toContain(`account/register`);
})