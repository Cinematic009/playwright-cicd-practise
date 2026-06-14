import { test, expect } from '@playwright/test';

// to make retry work changes need to be done in playwright.config.ts 
// retries: process.env.CI ? 2 : 3, --- here 2 is for CI/CD and 3 for local retry run
    test.skip('header visible test', async ({page,browserName}) =>{
    console.log(`Started ${browserName} at ${new Date().toLocaleTimeString()}`)
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
    await expect(page.getByRole('heading', { name: 'Register Account' })).toHaveText('Register Account1');
});