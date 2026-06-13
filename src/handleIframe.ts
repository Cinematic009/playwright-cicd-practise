import {Page, Locator, Browser, chromium, FrameLocator} from '@playwright/test'

(async()=>{

    let browser : Browser = await chromium.launch({headless:false, channel:'chrome'});
       let page: Page=await browser.newPage();

       await page.goto('https://www.londonfreelance.org/courses/frames/index.html');
    //   await page.goto('https://www.formsite.com/templates/registration-from-templates/vehicle-registration-form/');
    //    await page.getByTitle('Vehicle-Registration-Forms-and-Examples').click();
    //   // Frame will be loaded 

    //   let frameEle : FrameLocator =  page.frameLocator(`iframe[id*='frame-one']`)
    //   frameEle.locator(`input[id='RESULT_TextField-1']`).fill('Sunil');

    //   let h3Text : string = await page.locator(`h3.details__form-preview-title`).innerText();
    //   console.log(h3Text);

    let allLinks : Locator [] = await page.locator(`//frame`).all();
    console.log(allLinks.length);

})();