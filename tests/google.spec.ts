// 1. with test block
import { test, expect } from '@playwright/test';

test('check page title', async ({page})=>{
   await  page.goto('https://www.google.com');
   let title : string =await page.title();
   console.log('page title is '  + title);
   expect(title).toBe('Google');
})
