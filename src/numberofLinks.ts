
import {Browser, Locator, Page, chromium} from "@playwright/test"

(async ()=>{

  let launchBrowser: Browser = await chromium.launch({headless:false, channel:'chrome'});
  let page : Page = await launchBrowser.newPage();

  await page.goto('https://www.flipkart.com/');
  let allLinks : string [] = await page.locator('//a[@href]').allInnerTexts();
  console.log(allLinks.length);

   let ImageLinks : Locator [] = await page.locator('//img[@alt]').all();
  console.log(ImageLinks.length);

  


  for (let e of ImageLinks)
  {
    console.log(await e.getAttribute('alt'));
  }


})();