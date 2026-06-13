
// import {Page, test, Locator, Browser, chromium, expect, BrowserContext} from '@playwright/test'

// let browser: Browser;
// let page: Page;
// let browserContext : BrowserContext;

// test('test1', async({page})=>{

//     browser = await chromium.launch({headless: false, channel:'chrome'})
//     browserContext = await browser.newContext({
//         recordVideo :{

//             dir : './vedios/testVedio',
//             size : {width:800, height:700}
//         }
//     })

    

//     page = await browserContext.newPage();
//     await page.goto('https://orangehrm.com/contact-sales');
//     let logo : Locator =  page.locator(`img[alt='OrangeHRM Logo']`).first();
//     expect(logo).toBeVisible();
// })

import { Page, test, Locator, chromium, Browser, BrowserContext, expect } from '@playwright/test';

let browser: Browser;
let page: Page;
let browserContext: BrowserContext;

test.afterAll(async () => {
  // ✅ FIX 3: Always close the context and browser to avoid leaking processes
  await browserContext?.close();
  await browser?.close();
});

test('test1', async () => {
  // ✅ FIX 1: Removed the built-in `{page}` fixture — it conflicts with the
  //           manually launched browser. We manage our own page below.
  browser = await chromium.launch({ headless: true, channel: 'chrome' });

  browserContext = await browser.newContext({
    recordVideo: {
      dir: './videos/testVideo',
      size: { width: 800, height: 700 },
    },
  });

  page = await browserContext.newPage();

  await page.goto('https://orangehrm.com/contact-sales');

  const logo: Locator = page.locator(`img[alt='OrangeHRM Logo']`).first();

  // ✅ FIX 2: Added `await` — Playwright's toBeVisible() is async and MUST be awaited
  await expect(logo).toBeVisible();
});