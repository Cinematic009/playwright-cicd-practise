import { test, expect, chromium , Browser, Page, Locator} from '@playwright/test';
// IIFE - Immediatetly invoked function expression

(async ()=>{
     

   
   let browser: Browser =await chromium.launch({headless:false});
   let page : Page = await browser.newPage();
   await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");
   let title : string = await page.title();
   console.log('title is ' + title);
   let url : string = page.url();
   console.log('url is  ' + url);
   let emailId : Locator = page.locator('#input-email');
   await emailId.fill('naveen@gmail.com');
   await page.close();

})();