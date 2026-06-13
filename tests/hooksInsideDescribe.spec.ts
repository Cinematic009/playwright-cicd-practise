import{test, expect} from '@playwright/test'

test.describe('setup the system', ()=>{

    test.beforeAll(async () => {
    console.log('--- beforeAll: setup the system ---');
})

test.afterAll(async () => {
    console.log('--- afterAll: tear down the system ---');
})

test.beforeEach(async () => {
    console.log('--- beforeEach: open the url ---');
})

test.afterEach(async () => {
    console.log('--- afterEach: close the url ---');
})

test('check the system', async () => {
    console.log('TEST: checking the system');
})

test('verify the teardown flow', async () => {  // ← renamed
    console.log('TEST: verifying teardown');
})
    
});


