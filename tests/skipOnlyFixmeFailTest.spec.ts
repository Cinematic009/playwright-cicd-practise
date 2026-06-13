import {test, Locator, expect, Page} from '@playwright/test'


test('title test', async ({page, browserName}) =>{

    console.log(`Started ${browserName} at ${new Date().toLocaleTimeString()}`)
    //test.skip(browserName==='firefox', 'this test does not support firefox')
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await expect(page).toHaveTitle('Register Account', {timeout: 3000});
})

test('url test', async ({page, browserName}) =>{

    console.log(`Started ${browserName} at ${new Date().toLocaleTimeString()}`)
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await expect(page).toHaveURL(/.*account\/register.*/);
})

test('header visible test', async ({page,browserName}) =>{
//test('header visible test', async ({page}) =>{
  //  test.slow(browserName === 'firefox', 'This feature is slow in Safari');
    console.log(`Started ${browserName} at ${new Date().toLocaleTimeString()}`)
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await expect(page.getByRole('heading', { name: 'Register Account' })).toHaveText('Register Account');
})

test.fixme('firstName test', async ({page, browserName}) =>{

    console.log(`Started ${browserName} at ${new Date().toLocaleTimeString()}`)
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await expect(page.locator('#input-firstname')).toBeVisible();
})

test('LastName test', async ({page, browserName}) =>{

    test.fail();
    console.log(`Started ${browserName} at ${new Date().toLocaleTimeString()}`)
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await expect(page.locator('#input-lastname1')).toBeVisible();
})

