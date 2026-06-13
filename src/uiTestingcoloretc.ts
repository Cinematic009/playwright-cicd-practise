import {Page, Locator, Browser, chromium} from '@playwright/test'

(async () => {

        let browser : Browser = await chromium.launch({headless:false, channel:'chrome'})
        let page : Page = await browser.newPage({viewport: null})
        await page.goto('https://orangehrm.com/contact-sales', {waitUntil:'load'});
        let contactSales : Locator =  page.getByRole('button', {name :'Contact Sales'}).first();

        let bgcolor : string = await contactSales.evaluate(ele=> getComputedStyle(ele).backgroundColor);
        console.log('background color '  + bgcolor);

        let color : string = await contactSales.evaluate(ele=> getComputedStyle(ele).color);
        console.log('color '  + color);

})();