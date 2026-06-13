import { test, expect } from '@playwright/test';

test('handle calender', async ({ page }) => {

    await page.goto('https://seleniumpractise.blogspot.com/2016/08/how-to-handle-calendar-in-selenium.html');
    await page.locator(`input[id='datepicker']`).click();
    
    let currentMonthYear = await page.locator(`div.ui-datepicker-title`).textContent();

    let expectedDate = 'June 2027'
    
    while (true) {
        if (currentMonthYear?.replace(/\s+/g, ' ') === expectedDate) {
            let expectedmonthYear = page.locator(`//a[normalize-space()='18']`);
            console.log(await expectedmonthYear.textContent());  // ✅ await added
            await expectedmonthYear.click(); 
            console.log(expectedDate);                    // ✅ await added
            break;
        }

        await page.locator(`//span[normalize-space()='Next']`).click();  // ✅ await added
        currentMonthYear = await page.locator(`div.ui-datepicker-title`).textContent(); // ✅ refresh value
    }
})