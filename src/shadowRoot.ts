import {Page, Locator, Browser, chromium, FrameLocator} from '@playwright/test'

(async () =>{

    let browser : Browser = await chromium.launch({headless:false, channel:'chrome'})
    let page : Page = await browser.newPage({viewport: null})
    await page.goto('https://selectorshub.com/iframe-in-shadow-dom/')
    page.locator(`#pizza`).fill('veg pizza');

    // For Shadow Root DOM only css will work , Xpath will not work

    let iframeDestinty :  FrameLocator = page.frameLocator(`#pact3`);
    await iframeDestinty.locator(`#glaf`).fill('Anil');

})();