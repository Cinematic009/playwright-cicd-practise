import {Page, Locator, Browser, chromium} from '@playwright/test'

(async ()=>{

      let browser:Browser= await chromium.launch(

        {headless:false, channel:'chrome', args : ['--start-maximized']});
      let page : Page = await browser.newPage({viewport : null});

      await page.goto('https://orangehrm.com/contact-sales');

      // Take screenshot with path full as well as current size
    //   await page.screenshot({path : 'singlePage.png'});
    //   await page.screenshot({path : 'fuullpage.png', fullPage:true});
    //   await page.screenshot({path : './Screenshots/orangeHRMpic.png', fullPage:true});
    //   await page.screenshot(({path : './Screenshots/newPic.png',
    //     clip : {x:0, y:0, width:700, height : 500 }
    //   }))

    // Take screenshot of element
    let logo : Locator =   page.getByAltText(`OrangeHRM Logo`).nth(0);
    await logo.screenshot({path : './Screenshots/logoImage.png'});

    // Take screenshot with quality of page
    await logo.screenshot(
        {path : './Screenshots/logoImage03.jpg',
         type : 'jpeg',
         quality : 100
    });

    // Capture the screenshot and 

})();