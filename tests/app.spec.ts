// import { test, expect} from '@playwright/test';

// // Page is not supported in before all and After All hooks
// // Page is supported in Before each and After Each hook

// test.describe.skip('Run the test', ()=>{

//     test.beforeAll(async()=>{
//         console.log('=== before all====')
//     })

//     test.beforeEach(async()=>{
//         console.log('two hooks will execute here');
//     })

// test.beforeEach(async({page})=>{

//     await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

// })

// test.afterEach(async()=>{

//     console.log('=====after each hook twice===');
// })

// test.afterEach(async({page})=>{

//     await page.close();
// })


// test.skip('check title', async({page})=>{

//     await expect(page).toHaveTitle('Register Account');
// })

// test.skip('header test', async({page})=>{

//     await expect(page.getByRole('heading', { name: 'Register Account' })).toBeVisible();
// })

// test.afterAll(()=>{
//         console.log('=== before all====')
//     })
// })