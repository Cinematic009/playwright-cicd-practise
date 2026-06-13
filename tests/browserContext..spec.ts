import {test,  chromium, Browser, BrowserContext, Page } from "@playwright/test"
import { channel } from "node:diagnostics_channel"


    test ('check browser context', async ()=>{

        let browser : Browser =await chromium.launch({headless:false, channel: 'chrome'});
        let browserContext1 :BrowserContext= await browser.newContext();
        let browserContext2 : BrowserContext = await browser.newContext();

        let page1:Page =await browserContext1.newPage();
        let page2:Page =await browserContext2.newPage();

        await page1.goto('https://uat.pay10.asia/#/auth/login');
        await page1.waitForTimeout(2000);
        page1.locator('#username').click();
        page1.locator(`//input[@id='username']`).fill('ghatulsunil135@gmail.com');
        page1.locator('#password').fill('Admin@12345');
        page1.locator(`//button[@type='submit']`).click();

        let title1:string = await page1.title();
        console.log('page1 title is ' + title1);

        await page2.goto('https://uat.pay10.asia/#/auth/login');
        await page1.waitForTimeout(2000);
        page1.locator('#username').click();
        page1.locator(`//input[@id='username']`).fill('apoorva.pal@pay10.com');
        page1.locator('#password').fill('Admin@12345');
        page1.locator(`//button[@type='submit']`).click();

         let title2:string = await page2.title();
        console.log('pag1 title is ' + title2);

        await browserContext1.close();
        await browserContext2.close();
    })

