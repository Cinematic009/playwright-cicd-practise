import{Page, Locator, Browser, chromium} from '@playwright/test'

(async()=>{

    let browser : Browser = await chromium.launch({headless:true, channel:'chrome'});
    let page: Page = await browser.newPage({viewport : null});


    //Single File Upload
    // await page.goto('https://practice.expandtesting.com/upload');
    // await page.locator(`//input[@id='fileInput']`).setInputFiles("D:\\Office data\\Jmeter Test Plans\\Load testing Stats 1stPay CollectPay.xlsx");
    // await page.locator(`//button[@id='fileSubmit']`).click();

    //Multiple File Upload
    // await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    // await page.locator(`//input[@id='filesToUpload']`).setInputFiles(
    //  ['C:\\Users\\Firsttech Technology\\Downloads\\Wps_Emp_OnBoarding_Template-V1 (3).xlsx',
    //   'C:\\Users\\Firsttech Technology\\Downloads\\Wps_Emp_OnBoarding_Template-V10990145.xlsx',
    //   'C:\\Users\\Firsttech Technology\\Downloads\\Wps_Emp_OnBoarding_Template-V10990147.xlsx'
    //  ]);


     // you can create dynammic files without having them in your workspace or in local machine
     //It is useful for test cases where you dont want to maintain the files

    //  await page.goto('https://practice.expandtesting.com/upload');
    //  await page.locator(`//input[@id='fileInput']`).setInputFiles([{

    //     name : 'resume.txt',
    //     mimeType : 'text/plain',
    //    // buffer : Buffer.from('sunil resume for test automation')
    //  }])



})();