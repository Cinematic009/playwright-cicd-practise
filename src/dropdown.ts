import {Page, Locator, Browser, chromium} from '@playwright/test'

(async()=>{

    let browser : Browser = await chromium.launch({headless:true, channel:'chrome'});
       let page: Page=await browser.newPage();
       await page.goto('https://naveenautomationlabs.com/opencart/ui/dropdowns.html');

    //    await page.locator(`//div[@class='custom-select']//span[text()='Choose your preferred programming language']`).click();
    //    await page.getByText('Java', {exact:true}).click();

    //    await page.locator(`//div[@class='select-trigger']//span[text()='Choose your preferred web framework']`).click();
    //    await page.getByText('Angular', {exact:true}).click();

    //    await page.locator(`//div[@class='select-trigger']//span[text()='Select your database preference']`).click();
    //    await page.getByText('MongoDB', {exact:true}).click();

    await selectValuesfromDropdown(page, 'Choose your preferred programming language', 'Java');
    await selectValuesfromDropdown(page, 'Choose your preferred web framework', 'Angular');
    await selectValuesfromDropdown(page, 'Select your database preference', 'MongoDB');

})();

async function selectValuesfromDropdown(page: Page, dropdownLable:string, value:string) : Promise<void>{

       await page.locator(`//div[@class='select-trigger']//span[text()='${dropdownLable}']`).click();
       await page.getByText(`${value}`, {exact:true}).click();
}