
import {test, expect} from '@playwright/test'
import { parse } from 'csv-parse/sync'; // Note: Use the sync version for readFileSync
import fs from 'fs'

type regData = {

    firstName : string,
    lastName : string,
    email : string,
    telephoneNo : string,
    password : string,
    subscribeNewsletter : string

}

    let fileContent  = fs.readFileSync(`./data/register.csv`, 'utf-8');
    let registrationData : regData [] = parse(fileContent, {
        columns: true,
        skip_empty_lines : true
    });
       

for ( let user of registrationData)
{
    test (`Registration teeest for new user ${user.firstName} and ${user.lastName}`, async({page})=>{

        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill( randomEmail());
        await page.getByRole('textbox', { name: 'Telephone' }).fill(user.telephoneNo);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
        await page.getByRole('textbox', { name: 'Password Confirm' }).fill(user.password);
        
        if (user.subscribeNewsletter==='Yes'){

            await page.getByRole('radio', { name: 'Yes', checked: false }).click();
        }

        else 
        {
            await page.getByRole('radio', { name: 'No', checked: true }).click();
        }
        await page.locator('[name="agree"]').click();
        await page.getByRole('button', { name: 'Continue' }).click();
        expect(page.locator(`//h1[normalize-space()='Your Account Has Been Created!']`)).toHaveText('Your Account Has Been Created!');
    })
    
}

function randomEmail() : string {

   let randomValue = Math.random().toString(36).substring(2,8);
   return `auto_${randomValue}@gmail.com`
}


