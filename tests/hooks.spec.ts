import { Page, test, expect , Locator} from '@playwright/test';

test.beforeAll(async ()=>{
    console.log('before all... server is up and running');
    console.log('before all ...browser opens')
})

test.beforeEach(async()=>{
    console.log('before each .... user is logged in')
})

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

    console.log(' home page testing');
})

test.afterEach(async()=>{

    console.log('logout the page');
})

test.afterAll(async()=>{

    console.log('close the browser');
})