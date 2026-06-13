import { Page, test, expect , Locator} from '@playwright/test';


test.describe.serial('serial run', ()=>{
// These flour cases will run in sequential (due to serail) while fullyparallal = true in playwright.config.ts

// test.beforeAll(async ()=>{
//     console.log('before all... server is up and running');
// })

test('home page test', async ()=>{

    console.log(' home page testing')
})

test('search product test', async ()=>{

    console.log('search product test')
})

test('Add to cart test', async ()=>{

    console.log('Add to cart test')
})

test('checkout the order', async ()=>{

    console.log('checkout the order');
})



// test.afterAll(async()=>{

//     console.log('close the browser');
// })

})

// These two cases will run in parallal while fullyparallal = true in playwright.config.ts

test('check notification', async ()=>{

    console.log('recieved notification');
})

test('check wallet', async ()=>{

    console.log('wallet updated');
})