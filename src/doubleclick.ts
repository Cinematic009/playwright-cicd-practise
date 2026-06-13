import{Page, Locator, Browser, chromium, expect} from '@playwright/test'

(async()=>{

    let browser: Browser = await chromium.launch({headless:true, channel:'chrome'});
    let page : Page = await browser.newPage();

    page.goto('https://cps-check.com/double-click-test');
  //  page.locator('#clicker').dblclick();
    page.locator('#clicker').click({clickCount:2});


})();