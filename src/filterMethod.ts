import {Browser, Locator, Page, chromium} from "@playwright/test"

(async ()=>{

  let launchBrowser: Browser = await chromium.launch({headless:false, channel:'chrome'});
  let page : Page = await launchBrowser.newPage();

//   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

//   let footerLinks : Locator = await page.locator('footer a');
//   footerLinks.filter({ hasText : 'Privacy Policy', visible:true}).click();

  await page.goto('https://www.google.com');
  await page.locator('[name=q]').fill('Selenium Testing');
  await page.locator(`//ul[@role='listbox']//li[@role='presentation']`).filter({hasText:'websites', visible:true}).click();
 

})();
