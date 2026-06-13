import {Page, Locator, Browser, chromium} from '@playwright/test'

(async () => {


    // psuedo classes
    // :: before & :: after
    // it has no html tag no attributes
        let browser : Browser = await chromium.launch({headless:false, channel:'chrome'})
        let page : Page = await browser.newPage({viewport: null})
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register', {waitUntil:'load'});
      //`window.getComputedStyle(document.querySelector(`label[for='input-firstname']`), '::before').getPropertyValue('content')`

     let contentValue =  await page.evaluate(()=>{

       return window.getComputedStyle(
            document.querySelector(`label[for='input-firstname']`)!,
             '::before' ).getPropertyValue('content')

      })
      console.log(contentValue);

      let colorValue =  await page.evaluate(()=>{

       return window.getComputedStyle(
            document.querySelector(`label[for='input-firstname']`)!,
             '::before' ).getPropertyValue('color')

      })

       console.log(colorValue);


})();