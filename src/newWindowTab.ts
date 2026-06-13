import {Page, Locator, Browser, chromium} from '@playwright/test'

(async () => {

    let browser : Browser = await chromium.launch({headless: true, channel:'chrome'})
    let page : Page = await browser.newPage({viewport: null})


    // create event listener for accept cookies button
    // background event listener

    page.on('framenavigated' , async ()=>{
     
       let acceptCookiesButton : Locator=  page.locator(`button[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']`)
       if (await acceptCookiesButton.isVisible())
       {
          await acceptCookiesButton.click();
       }
        
    })

    // target = _blank for new Window tab
    await page.goto('https://orangehrm.com/contact-sales');
  //  page.locator(`button[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']`).click();

    let   [newTab] = await Promise.all([
         page.waitForEvent('popup'),
         page.getByAltText('linkedin').last().click()   // Open new Tab or window
    ]);

    console.log('new tab title is : ' + await newTab.title());
    console.log(newTab.url());

    // close the child window
    page.waitForTimeout(2000);
    newTab.close();
    page.waitForTimeout(2000);
    console.log('page titile is : ' + await page.title());

})();