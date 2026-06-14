import {test, expect} from '@playwright/test'
import { faker, Faker } from '@faker-js/faker'


function generateUser ()
{
    return {

      firstName : faker.person.firstName(),
      lastName : faker.person.lastName(),
      email : faker.internet.email({firstName: 'sunil', allowSpecialCharacters:true}),
      telephoneNo : faker.phone.number({style: 'national'}),
      password : faker.internet.password({length:12,memorable:true, pattern:/[A-Z]/})
    };
}
     

let userCount =3;

for (let i=0; i<=userCount; i++)
{
 test.skip (`Registration teeest for new user account ${i}`, async({page})=>{

    // without using object generate user
    //  const firstName = faker.person.firstName();
    //  const lastName = faker.person.lastName();
    //  const email = faker.internet.email({firstName: 'sunil', allowSpecialCharacters:true});
    //  const telephoneNo = faker.phone.number({style: 'national'});
    //  const password = faker.internet.password({length:12,memorable:true, pattern:/[A-Z]/});


    let user = generateUser();
        await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
        await page.getByRole('textbox', { name: 'First Name' }).fill(user.firstName);
        await page.getByRole('textbox', { name: 'Last Name' }).fill(user.lastName);
        await page.getByRole('textbox', { name: 'E-Mail' }).fill('sunil' + emailDomain[i]);
        await page.getByRole('textbox', { name: 'Telephone' }).fill(user.telephoneNo);
        await page.getByRole('textbox', { name: 'Password' }).first().fill(user.password);
        await page.getByRole('textbox', { name: 'Password Confirm' }).fill(user.password);

        await page.getByRole('radio', { name: 'Yes', checked: false }).click();
        
        await page.locator('[name="agree"]').click();
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page.locator(`//h1[normalize-space()='Your Account Has Been Created!']`)).toHaveText('Your Account Has Been Created!');
    });
}
    

let totaluserCount = 4;
let emailDomain = ['@gmail.com', '@yahoo.com', '@email.com', '@pay.com']

function randomEmail() : string {

   let randomValue = Math.random().toString(36).substring(2,8);
   return `auto_${randomValue}@gmail.com`
}
