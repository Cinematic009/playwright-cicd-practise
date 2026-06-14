import { test, expect } from '@playwright/test';

test.skip('check the navigation', async({page})=>{

    await page.goto('https://www.google.com');
    console.log(page.title());
    await page.goto('https://www.flipkart.com');
    console.log(page.title());

    await page.goBack();
    await page.goForward();
    
    await page.waitForTimeout(3000);
    await page.reload();
    await page.close();
})