import{test, expect} from '@playwright/test'



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



test.describe('test suite no 2', ()=>{

    test.skip('header visible test', async ({page,browserName}) =>{
    console.log(`Started ${browserName} at ${new Date().toLocaleTimeString()}`)
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await expect(page.getByRole('heading', { name: 'Register Account' })).toHaveText('Register Account');
});

test('firstName test', async ({page, browserName}) =>{

    console.log(`Started ${browserName} at ${new Date().toLocaleTimeString()}`)
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await expect(page.locator('#input-firstname')).toBeVisible();
});

})