import {Page, Locator, Browser, chromium} from '@playwright/test'

(async()=>{
    
    let browser:Browser= await chromium.launch(

        {headless:false, channel:'chrome', args : ['--start-maximized']}
    );
    let page : Page = await browser.newPage({viewport : null});
    page.goto('https://classic.freecrm.com/');
    // page.waitForTimeout(2000);
    await page.locator(`//input[@name='username']`).fill('apiautomation');
    await page.locator(`//input[@name='password']`).fill('Selenium@12345');
    await page.locator(`//input[@type='submit']`).click();

    // await page.waitForTimeout(5000);
    await page.getByTitle('Contacts').hover();
    await page.getByTitle('New Contact').click();

    let title : Locator = page.getByTitle('title');
    title.selectOption('Mr.');

    page.locator(`input[name='first_name']`).fill('Playwright');
    page.locator(`input[name='middle_initial']`).fill('Typescript');
    page.locator(`input[name='surname']`).fill('Automation');
    let suffix : Locator = page.locator(`select[name='suffix']`);
    suffix.selectOption('Jr.');

    let addressType : Locator = page.locator(`//table[@class='addressFormTable']/tbody/tr[2]/td[2]/select[@name='type']`);
    addressType.selectOption({label: 'Shipping Address'});

})();

async function name(page:Page, dropdownValue:string, value : string) : Promise<void> {


    
}