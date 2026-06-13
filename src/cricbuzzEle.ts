import{Page, Locator, Browser, chromium, expect} from '@playwright/test'

(async()=>{

    let browser: Browser = await chromium.launch({headless:true, channel:'chrome'});
    let page : Page = await browser.newPage();
    
    page.goto('https://www.cricbuzz.com/');
    page.locator(`//span[contains(text(), 'New Zealand won by an innings and 79 runs')]`).click();
    page.getByTitle(`Scorecard - IRE - NZ`).click();
    let allBatsMan: string =await page.locator(`(//div[contains(text(), 'Batter')])[1]`).innerText();
    console.log(allBatsMan);

    // let scorecardTable: string[] = await page.locator(`//div[@id='scard-team-13-innings-1']/div[@class='mb-2']/div[@class='text-xs']/div[contains(@class, 'grid scorecard-bat-grid')]`).allInnerTexts();
    // console.log(scorecardTable);
     let tableHeader : string [] = await page.locator(`//div[@id='scard-team-13-innings-1']/div[@class='mb-2']/div[@class='text-xs']/div[contains(@class,'bg-cbBorderGrey text-cbItmBkgDark')]/div[contains(@class, 'grid scorecard-bat-grid')]/div[contains(@class, 'font-bold flex justify-center')]`).allInnerTexts();
    console.log(tableHeader);

    let allrunStats : string [] = await page.locator(`//div[@id='scard-team-13-innings-1']/div[@class='mb-2']/div[@class='text-xs']/div[contains(@class, 'grid scorecard-bat-grid')]/div[contains(@class, 'flex justify-center items-center' )]`).allInnerTexts();
    console.log(allrunStats);

   
    ////div[@id='scard-team-13-innings-1']/div[@class='mb-2']/div[@class='text-xs']/div[contains(@class, 'grid scorecard-bat-grid')]
})();