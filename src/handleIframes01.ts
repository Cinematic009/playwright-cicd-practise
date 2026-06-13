import {Page, Locator, Browser, chromium, FrameLocator} from '@playwright/test'

(async()=>{

    let browser : Browser=await chromium.launch({headless:false, channel:'chrome'})
    let page: Page = await browser.newPage();
    await page.goto('https://selectorshub.com/iframe-scenario/');

    let frame01 : FrameLocator =page.frameLocator(`(//iframe[@id='pact1'])[1]`);
    let frame02 : FrameLocator = frame01.frameLocator(`(//iframe[@id='pact2'])[1]`);
    let frame03 : FrameLocator = frame02.frameLocator(`(//iframe[@id='pact3'])[1]`);

    await frame01.locator(`input[id='inp_val']`).fill('Sunil');
    await frame02.locator(`input[id='jex']`).fill('Anil');
    await frame03.locator(`input[id='glaf']`).fill('Mauli');

})();