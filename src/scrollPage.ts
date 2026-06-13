import { Page, Locator, Browser, chromium} from '@playwright/test'

(async()=>{

    let browser : Browser = await chromium.launch({headless:true, channel:'chrome'})
    let page : Page = await browser.newPage({viewport : null})

    await page.goto('https://orangehrm.com/contact-sales');

    // scroll into view if needed

    page.locator(`button[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']`).click();
    // page.locator(`a[href="https://orangehrm.com/company/careers"]`).scrollIntoViewIfNeeded();
    // page.locator(`a[href="https://orangehrm.com/company/careers"]`).click();
    

    // scroll down with 1000 pixels
    // await page.evaluate(()=> window.scrollBy(0,1000));
    // await page.waitForTimeout(1500);
    // await page.evaluate(()=> window.scrollBy(0,1000));
    
    // scrolldown to the bottom of page
    await page.evaluate(()=> window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(1500);

    // scroll to the top of page
    await page.evaluate(()=> window.scrollTo(document.body.scrollHeight, 0));
    await page.waitForTimeout(1500);

})();