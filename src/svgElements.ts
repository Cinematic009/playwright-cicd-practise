import {Page, Locator, Browser, chromium, FrameLocator} from '@playwright/test'

(async () =>{

    let browser : Browser = await chromium.launch({headless:false, channel:'chrome'})
    let page : Page = await browser.newPage({viewport: null})

   // page.goto('https://www.flipkart.com/');
    // page.locator(`input[name='q']`).fill('macbook');
    // page.getByTitle(`button[title='Search for Products, Brands and More']`).click();

    ////*[name()='svg' and @fill='none']
    ////*[local-name()='svg' and @fill='none']  out of these two any xpath can be used
    // For Iframes we can not use xpaths we have to use always css

    await page.goto('https://petdiseasealerts.org/forecast-map#/', {waitUntil:'load'});
    await page.waitForTimeout(1500);
    let frameEle : FrameLocator =  page.frameLocator(`iframe[id*='map-instance']`);
    let allRegions: Locator[] =await frameEle.locator(`//*[local-name()='svg']//*[local-name()='g' and @id='regions']/*[local-name()='g']`).all();
    console.log('all regions are : ' +allRegions.length);

    for (let r of allRegions)
    {
        let box  = await r.boundingBox();
        if(box)
        {
            page.mouse.move(box.x + box.width/2, box.y + box.height/2);
            await page.waitForTimeout(300);
        }
       // await r.hover();
        let statenames =await r.getAttribute('id');
        console.log(statenames);
         await page.waitForTimeout(200);
    }
})();