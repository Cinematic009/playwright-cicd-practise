import { Page, test, expect , Locator} from '@playwright/test';
import { toASCII } from 'node:punycode';


// test pagination with next button
test.skip ('test pagination' , async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/');

    while(true)
    {
        let hongkongEle  = await page.locator(`//td[normalize-space()='Hong Kong']`).isVisible();
        if(hongkongEle)
        {
            console.log('hong kong element is found');
            await page.locator(`//td[normalize-space()='Hong Kong']/preceding-sibling::td//input[@type='checkbox']`).check();
            break;
        }

        await page.locator(`button[class='dt-paging-button next']`).click();
    }

})

//test pagination with till end if no element is no present
test.skip ('test pagination with till end if no element is no present' , async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/');
    await page.waitForTimeout(1500);

    while(true)
    {
        let hongkongEle  = await page.locator(`//td[normalize-space()='Sunil']`).isVisible();
        if(hongkongEle)
        {
            console.log('targeted element is found');
            await page.locator(`//td[normalize-space()='Sunil']/preceding-sibling::td//input[@type='checkbox']`).check();
            break;
        }

        let nextBtn =  page.locator(`button[class='dt-paging-button next']`);
        await nextBtn.click();
        if( await nextBtn.isDisabled({timeout:4000}))
        {
           console.log('next button is disabled... No country found')
           break;
        }
    }

})

// select the check box for country india till 10th page 
test.skip ('test pagination with multiple checkboxes' , async({page})=>{

    await page.goto('https://selectorshub.com/xpath-practice-page/');

    await page.waitForTimeout(1500);
    while(true)
    {
      
       let allEleIndia = await page.locator(`//td[text()='India']/preceding-sibling::td//input[@type='checkbox']`).all();
        
       if(allEleIndia.length>0){

        
        let Totalcount = 0;
        for(let ele of allEleIndia)
        {
            await ele.click();
            Totalcount++;
        }
        console.log(Totalcount + ' Total counts on Page number ' + allEleIndia.length)

        
       }
       
    

       let nextBtn =  page.locator(`button[class='dt-paging-button next']`);
        if( await nextBtn.isDisabled({timeout:4000}))
        {
           console.log('next button is disabled... No country found')
           break;
        }
        await nextBtn.click();
        let pageNumb =0;
        console.log(pageNumb++);
    }

    page.pause();

})

//