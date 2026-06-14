
import{test, expect} from '@playwright/test'
import { ref } from 'node:process'

// test ('check the url', async ({page})=>{

//   await page.goto('https://www.flipkart.com', {waitUntil: 'commit'})

//   let titleis : string = await page.title();
//   console.log(titleis);

// })

test.skip ('check the url', async ({page})=>{

  await page.goto('https://www.flipkart.com', {referer: 'https://www.google.com'})

  let titleis : string = await page.title();
  console.log(titleis);

})