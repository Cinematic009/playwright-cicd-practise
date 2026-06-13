import {Page, Browser, Locator, chromium} from '@playwright/test'

(async()=>{

    let browser : Browser = await chromium.launch({headless:false, channel:'chrome'});

   // let page :Page=await browser.newPage({viewport : null});

    let newContext =await browser.newContext({
        httpCredentials:{
            username : 'admin',
            password : 'admin'
        }
    })


    // page.on('dialog' , async dialog=>{

    //     console.log(dialog.message());
    //     await dialog.accept('Playwright Testing');  // accept the alert
    //     console.log(dialog.type());
    //     console.log('-----------------')
    // })

    //  page.goto('https://testpages.eviltester.com/pages/basics/alerts-javascript/');
    //  await page.waitForTimeout(3000);
    //  await page.locator(`//button[@id='alertexamples']`).click();
    //  await page.locator(`//button[@id='confirmexample']`).click();
    //  await page.locator(`//button[@id='promptexample']`).click();

    let page :Page=await newContext.newPage();

    await page.goto('https://the-internet.herokuapp.com/basic_auth');


})();