const {test,expect} = require('@playwright/test');

//test('First playWright test ', async function() 


// Another way of writing the test function
 test('@Browser Context-Validating Error login',async ({browser}) => 
{
const context =await  browser.newContext();
const page = await context.newPage();
const email = page.locator('#userEmail');
         const password = page.locator('#userPassword');
         const login = page.locator("#login");
        await page.goto('https://rahulshettyacademy.com/client/');
        await email.fill("kksingh11013@gmail.com");
        await password.fill("Kksingh@123");
        await login.click();
        console.log(await page.title());
        console.log(await page.locator("div[class='left mt-1'] p").textContent());
        await page.waitForLoadState('networkidle');
        //await page.waitForLoadState('domcontentloaded');
        const cardTitles = await page.locator('.card-body b').allTextContents();
        console.log(cardTitles);
});

test('@Login page and dropdown and radio button validation ',async ({page}) =>
{
  try {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const email = page.locator('#username');     
    const password = page.locator('#password');
    const login = page.locator("#signInBtn");
    const documentLink  = page.locator("[href*='documents-request']");
    await email.fill("rahulshettyacademy");
    await password.fill("learning");
    
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption('Teacher');
    
    await page.locator(".radiotextsty").last().click();
    await page.locator("#okayBtn").click();
    
    await email.fill("rahulshettyacademy");
    await password.fill("learning");
    await login.click();
    await expect(documentLink).toHaveAttribute('class', 'blinkingText');
 
  } catch (error) {
    console.error('Test failed with error:', error);
    throw error;
  }
  //await page.pause();



});


test.only('@child windows handler',async({browser}) =>
{

    const context =await  browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
const documentLink  = page.locator("[href*='documents-request']");
documentLink.click();
await page.waitForTimeout(5000);

const [newPage] = await Promise.all(
    [context.waitForEvent('page'),documentLink.click()])//listen for new page pending ,rejected, fullfilled
    const text = await newPage.locator(".red").textContent();
    console.log(text);
    const arrayText = text.split("@");// splitting string with @
    const domain = arrayText[1].split(" ")[0];
    console.log(domain);

    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").textContent());
   



});


