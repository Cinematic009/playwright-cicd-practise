import{Page, Browser, chromium, Locator} from '@playwright/test'

(async()=>{

    let launchBrowser : Browser = await chromium.launch({headless:true, channel:'chrome'});

    let page: Page =await launchBrowser.newPage();
    await page.goto('https://uat.pay10.asia/#/auth/login');

     await page.waitForTimeout(3000);
    let username: Locator = page.locator(`input[id='username']`);
     await username.waitFor({state:'visible'});
     await username.fill('ghatulsunil135@gmail.com');
     page.locator(`input[id='password']`).fill('Admin@12345');
     page.locator(`button[type='submit']`).click();
     page.locator(`//small[normalize-space()='Wallet Reports']`).click();


})();