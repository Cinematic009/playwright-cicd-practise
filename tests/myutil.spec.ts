import {test, expect} from '@playwright/test'
import {Elementutil} from '../utils/Elementutil.js'


test ('my test method' , async({page})=>{

    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
    let ele = new Elementutil(page, 5000);
    // await ele.getLocator('#input-firstname').fill('Sunil');
    // await ele.getLocator(page.getByPlaceholder('Last Name')).fill('Anil');
    // await ele.getLocator('.btn.btn-primary').click();

    await ele.getInputValue('#input-firstname');
    await ele.fill('#input-firstname', 'Sunil');
    await ele.getInputValue('#input-firstname');
    await ele.fill(page.getByPlaceholder('Last Name'), 'patil G');
    await ele.fill(page.getByLabel('E-Mail'), 'sgs1ed332@gmail.com');
    await ele.fill(page.getByLabel('Telephone'), '67578912');
    await ele.fill(page.getByLabel('Password').first(), 'sgsg@123');
    await ele.pressSequentially(page.getByLabel('Password Confirm'), 'sgsg@123', 500);
    await ele.click(page.getByLabel('Yes'));
    await ele.click(`[name="agree"]`);
    await ele.WaitForElementisVisible('.btn.btn-primary');
    await ele.click('.btn.btn-primary');
    await ele.getTitle();
    await ele.getUrl();
    await ele.isElementAttached(page.getByText('Desktops', { exact: true }), 1000)
    await ele.getLocator(page.getByText('Desktops', { exact: true })).hover();
    await ele.getAllInnerText(`//div[@class='dropdown-inner']//ul//li//a`);
    await ele.getText(page.getByText('Desktops', { exact: true }));
    await expect (page.getByText('Your Account Has Been Created!', { exact: true })).toHaveText('Your Account Has Been Created!');
    
})