import{Page, Locator, Browser, chromium, expect} from '@playwright/test'

(async()=>{

    // hover property
// let browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
// let page : Page = await browser.newPage();
//    page.goto('https://www.spicejet.com');
//    page.getByText('Add-ons', {exact:true}).hover();
//    page.getByTestId('test-id-SpiceMax').click();


// Drag and Drop
//   let browser: Browser = await chromium.launch({headless:false, channel:'chrome'});
//   let page : Page = await browser.newPage();
//    page.goto('https://testautomationcentral.com/demo/drag_and_drop.html');
//   let sourcedrag = page.locator(`//div[@id='draggable']`);
//   let targetdrop = page.locator(`//div[@id='droppable']`);
//   await sourcedrag.dragTo(targetdrop);
//   let droppedSuccessmsg : string = await page.locator(`//p[@id='drop-message']`).innerText();
//   console.log(droppedSuccessmsg);
//   expect (droppedSuccessmsg).toBe('Dropped successfully!');

// Right Click (Simple Context Menu )

let browser: Browser = await chromium.launch({headless:true, channel:'chrome'});
let page : Page = await browser.newPage();
page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
await page.locator(`span.context-menu-one`).click({button : 'right'});
let rightclickOptions : string []= await page.locator(`ul.context-menu-list span`).allInnerTexts();
console.log(rightclickOptions);

await page.getByText('Copy', {exact:true}).click();
await page.waitForTimeout(3000);

  

  
  


})();
