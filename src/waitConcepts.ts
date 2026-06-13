import {Browser, Locator, Page, chromium, expect} from '@playwright/test'

(async()=>{


    let browser:Browser= await chromium.launch(
    
            {headless:true, channel:'chrome'}
        );
        let page : Page = await browser.newPage({viewport : null});

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

        // Unless we perform any action on element there will not be any error
        // Auto wait will be applied only when any action is being performed 
        // actions like, click(), fill()  etc.

        // if we dont set any wait before any action it will wait bi-default 30 seconds to find an element

        // If we set default timeout or wait it will override bidefault wait and consider the set default time here in our case 8000
        // page.setDefaultTimeout(8000);

         let firstName : Locator = page.locator(`input[name='firstname']`);
        // firstName.click();

        // state visible
        // here it will check the state of element whether its visible through wait for method
        // because DOM will come first and then page will come

        // here playwright will follow below sequence
        //1. DOM is loaded
        // 2. Page loaded
        // 3. visible on the page
        //4. stable on the page
        //5. enable
        // click
        firstName.waitFor({state: 'visible', timeout:5000}) ;  // explicit wait/ Dynamic wait
        firstName.fill('Sunil');

        // here in any case if we have given timeout of 5000 or 10000 and if element is found in 2 seconds then rest 3 seconds it will discards
       // for assertions also default auto wait can be applied
       expect(page.locator(`#successmsg`)).toBeVisible();

       // Check whether page is loaded or not ... These are for only pages
       page.waitForLoadState('load') // page is fully loaded
       page.waitForLoadState('domcontentloaded') // DOM is fully loaded 
       page.waitForLoadState(`networkidle`) // after fetching and loading all network api


       // Dialogue, Pop up events
    page.waitForEvent('close');

    // wait for url 
    page.waitForURL('url');


    


})();