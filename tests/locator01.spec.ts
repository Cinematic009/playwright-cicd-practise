import {test, Browser, Page, chromium} from '@playwright/test'

// IIFE
(async()=>{

    let browser : Browser = await chromium.launch({headless:true, channel : 'chrome'});
    let page : Page =await browser.newPage();
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // await page.locator('#input-email').fill('sunil@gmail.com');
    // await page.locator('#input-password').fill('Sunil@123');
    // await page.locator(`//input[@value='Login']`).click();

    // let header : string | null = await page.getByText('My Account').nth(2).textContent();
    // console.log(header);

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    await page.getByPlaceholder('first name').fill('anil@gmail.com');
  //  await page.getByPlaceholder('last name').fill('Anil@123');
    await page.locator('#input-lastname').pressSequentially('Automation', {delay:200});


   await page.close();

})();