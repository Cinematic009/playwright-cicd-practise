import {test, Browser, Page, chromium} from '@playwright/test'

// IIFE
(async()=>{

    let browser : Browser = await chromium.launch({headless:false, channel : 'chrome'});
    let page : Page =await browser.newPage();
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    // await page.getByAltText('naveenopencart').click();

    // await page.goto('https://naveenautomationlabs.com/opencart/ui/data-testid-page.html');
    // await page.getByTestId('username-input').fill('sunil');

    await  page.getByTitle('naveenopencart').click();

   // await page.close();

})();