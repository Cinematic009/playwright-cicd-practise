import{Page, Locator, Browser, chromium, expect} from '@playwright/test'

(async()=>{

    let browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
    let page : Page = await browser.newPage();

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.locator(`#input-firstname`).focus();
    await page.locator(`#input-firstname`).pressSequentially('Sunil', {delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('Ghatul', {delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('sg1@gmail.com', {delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('7890789090', {delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('sg@123', {delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.type('sg@123', {delay:200});
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Space');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');





})();