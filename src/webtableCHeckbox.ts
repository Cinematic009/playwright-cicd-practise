import {Page, Browser, Locator, chromium} from '@playwright/test'

(async()=>{
let launchBrowser: Browser = await chromium.launch({headless:true, channel:'chrome'})

       let page : Page = await launchBrowser.newPage();
       await page.goto('https://naveenautomationlabs.com/opencart/ui/webtable.html');
     //let userData:string []  = await page.locator(`//tbody//tr[4]//td[1]//input[@type='checkbox']`).allInnerTexts();

     //page.locator(`//table[@id='resultTable']//input[@id='ohrmList_chkSelectAll']/ancestor::table//tbody//tr[4]//td[1]//input[@type='checkbox']`).click();
    let userData:string [] = await page.locator(`tr:has(td:text('Joe.Root'))`).locator('td').allInnerTexts();
    console.log(userData);

    // selectUserWithCss(page, 'Kevin.Mathews');
    

})();

async function selectUserWithCss(page:Page, username:string) : Promise<void>{

    await page.locator(`tr:has(td:text('${username}'))`).locator('td').first().click();
}