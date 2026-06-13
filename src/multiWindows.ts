import { test, expect , Browser, Page, chromium, Locator} from '@playwright/test';

// To Open new tabs you will have to use new browser context

(async () => {

    let browser : Browser = await chromium.launch({headless: false, channel:'chrome'})
    let brsrConxt = await browser.newContext();
    let page = await brsrConxt.newPage();

    page.on('framenavigated', async()=>{
        page.setDefaultTimeout(10000);
        let cokkies :  Locator = page.locator(`button[id='CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll']`);
        if (await cokkies.isVisible())
        {
            await cokkies.click();
        }
    })

    
    await page.goto('https://orangehrm.com/contact-sales');
    await page.waitForTimeout(1500);
    await page.locator(`img[alt='facebook']`).click();
    await page.locator(`img[alt='linkedin']`).first().click();
    await page.locator(`img[alt='youtube']`).click();

    await page.waitForTimeout(1500);
    let allPages : Page [] = brsrConxt.pages();
    console.log('total number of pages are : ' + allPages.length)

    let count = 0;
    for (let tabs of allPages){

        await page.waitForTimeout(200);
        let tabNames = tabs.title();
        console.log(await tabNames + ' : ' +  count);
        count ++;
        if(await tabNames!=='Contact Sales | Get in Touch | HR Software | HRMS | OrangeHRM')
        {
               await  tabs.close();
        }
    }

    await page.bringToFront();
    console.log(await page.title() + ' : ' + 'this is parent page title ');
    await page.locator(`input[name='FullName']`).fill('Sunil');




})();