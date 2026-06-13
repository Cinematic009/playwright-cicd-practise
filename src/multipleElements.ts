import {Browser, Locator, Page, chromium} from "@playwright/test"

(async ()=>{

  let launchBrowser: Browser = await chromium.launch({headless:true, channel:'chrome'});
  let page : Page = await launchBrowser.newPage();

  await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

  let myLinks : string []= await page.locator('a.list-group-item').allInnerTexts();
  console.log(myLinks);
  console.log(myLinks.length);


  for(let ele of myLinks)
  {
    console.log(ele);
    // if(ele==='My Account')
    // {
    //     await page.getByText(ele).first().click();
    //     break;
    // }
  }

  console.log('==========================');

  for (let i=0; i<myLinks.length-1; i++)
  {
    console.log(myLinks[i]);
  }

  console.log('=============================');

  // Capture all footer links

  let footerLinks : Locator [] = await page.locator('footer a').all();
  console.log(footerLinks);
  console.log(footerLinks.length);

  for (let e of footerLinks)
  {
    console.log(await e.allInnerTexts());
    console.log(await e.getAttribute('href'));
  }

})();