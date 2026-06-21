import { th } from '@faker-js/faker';
import {Page, Locator} from '@playwright/test'
import { url } from 'node:inspector';
import { flushCompileCache } from 'node:module';
import { text } from 'node:stream/consumers';


type flexibleLocator = string | Locator;
export class Elementutil {

    private page : Page;
    private defaultTimeout :number = 30000;

    

    constructor (page:Page, timeOut:number =30000)
    {
        this.page = page ;
        this.defaultTimeout = timeOut;
    }

    /**
     * this method to convert string to locator else it will return symmentic based locator
     * @param locator 
     * @returns 
     */
    public  getLocator (locator : flexibleLocator, index?:number) : Locator {
      
        if(typeof locator === 'string')
        {
            if(index){
                return  this.page.locator(locator).nth(index);
            }

            else{

               return  this.page.locator(locator).first();
            }
        }

        else{
            if(index)
            {
                return locator.nth(index);
            }
            else{

                return locator.first();
            }
        }
        
      
    }

    /**
     * click on the element
     * @param locator 
     */
    async click (locator : flexibleLocator) :Promise<void>
{
    await this.getLocator(locator).click();
}

/**
 * double click on the element
 * @param locator 
 */
    async DoubleClick (locator : flexibleLocator) :Promise<void>
{
    await this.getLocator(locator).dblclick();
}

/**
 * fill the text in element
 * @param locator 
 * @param text 
 */
    async fill (locator : flexibleLocator, text:string) :Promise<void>
{
    await this.getLocator(locator).fill(text);
    console.log(`filling the text in element : ${locator}`);
}

async pressSequentially (locator:flexibleLocator, text:string, delay:number=500) : Promise<void>
{
    await this.getLocator(locator).pressSequentially(text, {delay, timeout:this.defaultTimeout});
    console.log(`typed text into an ${locator} with ${text}`);
}

async getText (locator:flexibleLocator) : Promise<string | null>

{
    const text = await this.getLocator(locator).textContent({timeout :this.defaultTimeout});
    // Clean log handling if locator is an object
    const locatorLog = typeof locator === 'string' ? locator : 'Locator Object';
    console.log(`This is "${text}" for the ${locatorLog}`);
    return text;
}


/**
 * get inner text  
 * @param locator 
 * @returns 
 */
async getInnerText (locator:flexibleLocator) : Promise<string | null>

{
    const innertext = await this.getLocator(locator).innerText({timeout :this.defaultTimeout});
    console.log(`This is inner text : ${innertext}`)
    return innertext.trim();
}

// Changed the dot to a comma, and added 'await'
async getAttributeValueofElement(locator: flexibleLocator, attributeName: string): Promise<string | null> {
    return await this.getLocator(locator).getAttribute(attributeName);
}

async getInputValue(locator: flexibleLocator): Promise<string | null> {
    console.log(`This is input value`)
    return await this.getLocator(locator).inputValue({timeout:this.defaultTimeout});
}

/**
     * get all inner text
     * @param locator 
     * @returns 
     */
    async getAllInnerText (locator : flexibleLocator) : Promise<string[]>
    {
        const allText  : string []= await this.getLocator(locator).allInnerTexts();
        console.log(`This is Allinner text :` ,  allText)
        return allText;
    }


//======================== Element Visibility & state check==========================================

/**
 * check if element is visible
 * @param locator 
 * @param timeout 
 * @returns 
 */
async WaitForElementisVisible (locator:flexibleLocator, timeout:number = 5000) : Promise<boolean> {
    try{
     await this.getLocator(locator).waitFor({state: 'visible', timeout});
     return true;
    }
    catch{
        return false;
    }

}

/**
 * check if element is hidden
 * @param locator 
 * @returns 
 */
 async isHidden (locator:flexibleLocator) : Promise<boolean> {
        return await this.getLocator(locator).isHidden();
    }

    /**
 * check if element is enabled
 * @param locator 
 * @returns 
 */
    async isEnabled (locator:flexibleLocator) : Promise<boolean> {
        console.log(`This element is Enabled ${locator}`)
        return await this.getLocator(locator).isEnabled();
    }

    /**
 * check if element is disabled
 * @param locator 
 * @returns 
 */
     async isDisabled (locator:flexibleLocator) : Promise<boolean> {
        return await this.getLocator(locator).isDisabled();
    }


    /**
     * wait for element is attached to the DOM
     * @param locator 
     * @param timeout 
     * @returns 
     */
    async isElementAttached(locator:flexibleLocator, timeout:number = 5000) : Promise<boolean> {
        try {
         await this.getLocator(locator).waitFor({state:'attached', timeout});
         console.log(`Element is attached `)
         return true;
        }
        catch{
            return false;
        }
    }

    async waitFOr (timeout:number): Promise<void>
    {
        await this.page.waitForTimeout(timeout);
        console.log(`waited for ${timeout} ms`)
    }

    /**
     * wait for specific timeout
     * @param timeout 
     */
    async sleep (timeout : number ) : Promise<void> {
        this.page.waitForTimeout(timeout);
        console.log(`waited for ${timeout}`)
    }

    // ========================== Dropdown Utils==================

    async selectByLabel (locator:flexibleLocator, text:string) : Promise<void>{

        await this.getLocator(locator).selectOption({label: text}, {timeout:this.defaultTimeout});
        console.log(`selected option ${text} from the dropdown ${locator}`)
    }

     async selectByValue (locator:flexibleLocator, value:string) : Promise<void>{

        await this.getLocator(locator).selectOption({value: value}, {timeout:this.defaultTimeout});
        console.log(`selected option ${value} from the dropdown ${locator}`)
    }

    async selectByIndex (locator:flexibleLocator, index:number) : Promise<void>{

        await this.getLocator(locator).selectOption({index: index}, {timeout:this.defaultTimeout});
        console.log(`selected option ${index} from the dropdown ${locator}`)
    }

    //=========== getTitle, getUrl====================

    async getTitle(): Promise<string> {
    const title = await this.page.title();
    console.log(`Current Page title is: ${title}`);
    return title;
}

async getUrl(): Promise<string> {
    const url = this.page.url(); // page.url() is synchronous in Playwright
    console.log(`Current Page url is: ${url}`);
    return url;
}








}




