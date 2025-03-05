const {test,expect} = require('@playwright/test');
const { clearScreenDown } = require('readline');
//test('First playWright test ', async function() 

// Another way of writing the test function
 test.only('First Playwright test',async ({browser}) => 
{
const context =await  browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());
await page.locator('#username').fill('rahulshetty');
    await page.locator("[type ='password']").fill('learning');
    await page.locator('#signInBtn').click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']").textContent()).resolves.toBe('Incorrect username/password.');

});

test('SecondWay Run Playwright test',async ({page}) => 
    {
   await page.goto('https://google.com');
   //GET TITLE OF THE PAGE
   console.log(await page.title());
   //ASSERTION
   //expect(await page.title()).toBe('Google');
    await expect(page).toHaveTitle('Google'); //--> This is another way of writing the assertion
    
    });


