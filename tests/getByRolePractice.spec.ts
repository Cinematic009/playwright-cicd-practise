import {test, Browser, Page, chromium} from '@playwright/test'

(async()=>{

    let browser: Browser = await chromium.launch({headless:true, channel:'chrome'});
    let page: Page = await browser.newPage();
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByRole('textbox', {name:'First Name'}).fill('Sunil');
    await page.getByRole('textbox', {name: 'Last Name'}).fill('Ghatul');
    // await page.getByRole('radio', {name: 'yes'}).click();
    // await page.locator('//input[@name="agree"]').click();

  //  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
  //  await page.getByRole('link', {name : 'Forgotten Password'}).click();

    // headers h1 to h6 
    let header: string | null =await page.getByRole('heading', {name : 'Register Account'}).innerText();
    console.log(header);
})();