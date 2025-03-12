const {test,expect} = require('@playwright/test');

//test('First playWright test ', async function() 


// Another way of writing the test function
 test('@First Playwright test',async ({browser}) => 
{
const context =await  browser.newContext();
const page = await context.newPage();
const username = page.locator('#username');
const password = page.locator("[type ='password']");
const signIn = page.locator('#signInBtn');
const errorMessage = page.locator("[style*='block']");

await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());
    await username.fill('rahulshetty');
    await password.fill('learning');
    await signIn.click();
    console.log(await errorMessage.textContent());
   // await expect(page.locator("[style*='block']").textContent()).resolves.toBe('Incorrect username/password.');
     expect(await errorMessage.textContent()).toBe('Incorrect username/password.');
});

test('@SecondWay Run Playwright test',async ({page}) => 
    {
   await page.goto('https://google.com');
   //GET TITLE OF THE PAGE
   console.log(await page.title());
   //ASSERTION
   //expect(await page.title()).toBe('Google');
    await expect(page).toHaveTitle('Google'); //--> This is another way of writing the assertion
    
    });

    test('@New Registration to the appliaction ',async ({page}) =>
    {
       const rigisterButton = page.locator('.btn1');
       const fisrtName = page.locator('#firstName');
       const lastName = page.locator('#lastName');
       const email = page.locator('#userEmail');
       const phoneNumber = page.locator('#userMobile');
       const password = page.locator('#userPassword');
       const confirmPassword = page.locator('#confirmPassword');
       const login = page.locator("#login");

       await page.goto('https://rahulshettyacademy.com/client/');
         await rigisterButton.click();
            await fisrtName.fill("Kanhaiya");
            await lastName.fill("Kumar");
            await email.fill("kksingh11013@gmail.com");
            await phoneNumber.fill("1234567890");
            
            await page.selectOption('.custom-select.ng-pristine', { index: 2 });
            await page.click("input[value='Male']"); // Replace with actual value
           // Verify selected radio button
    const isChecked = await page.$eval("input[value='Male']", el => el.checked);
    console.log('Radio Button Selected:', isChecked);
    await password.fill("Kksingh@123");
    await confirmPassword.fill("Kksingh@123");

    await page.click("input[type='checkbox']");
    await login.click();


    });

    test.only('@New Login to the appliaction ',async ({page}) =>
    {
        const email = page.locator('#userEmail');
         const password = page.locator('#userPassword');
         const login = page.locator("#login");
        await page.goto('https://rahulshettyacademy.com/client/');
        await email.fill("kksingh11013@gmail.com");
        await password.fill("Kksingh@123");
        await login.click();
        console.log(await page.title());
        await page.locator("div[class='left mt-1'] p").textContent();
        console.log(await page.locator("div[class='left mt-1'] p").textContent());

        
        
    
            
    });


