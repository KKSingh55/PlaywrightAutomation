const {test,expect} = require('@playwright/test');

//test('First playWright test ', async function() 
// Another way of writing the test function
 test.only('@New login user',async ({browser}) => 
{
const context =await  browser.newContext();
const page = await context.newPage();
const product = page.locator(".card-body");
 const email = page.locator('#userEmail');
 const emails = "kksingh11013@gmail.com";

         const password = page.locator('#userPassword');
         const login = page.locator("#login");
        await page.goto('https://rahulshettyacademy.com/client/');
        await email.fill("kksingh11013@gmail.com");
        await password.fill("Kksingh@123");
        await login.click();
        console.log(await page.title());
        const titles = await  page.locator(".card-body b").allTextContents();
        const productName = 'ADIDAS ORIGINAL';
        const products = page.locator(".card-body");
        await page.waitForLoadState('networkidle');
        await page.locator(".card-body b").first().waitFor();
        console.log(titles); 
        const count = await products.count();
        for (let i = 0; i < count; ++i) {
           if (await products.nth(i).locator("b").textContent() === productName) {
              //add to cart
              await products.nth(i).locator("text= Add To Cart").click();
              break;
           }
        }
        await page.locator("[routerlink*='cart']").click();
        //await page.pause();
     
        await page.locator("div li").first().waitFor();
        const bool = await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();
        expect(bool).toBeTruthy();

        await page.locator("text=Checkout").click();
        await page.locator("[placeholder*='Country']").pressSequentially("ind");
        await page.locator(".ta-results").waitFor();
        const dropdown = page.locator(".ta-results");
        await dropdown.waitFor();
        const optionCount = await dropdown.locator("button").count();
        for(let i =0 ; i<optionCount; ++i)
        {
             const text = await dropdown.locator("button").nth(i).textContent();
             if(text === " India")
             {
                 await dropdown.locator("button").nth(i).click();
                 break;
             }
        }
        //await page.pause();
        
        await page.locator("div .user__name label").first().waitFor();
        expect(page.locator("div .user__name label").first()).toHaveText(emails);
        await page.locator(".btnn").click();
        await page.waitForLoadState('networkidle');
        await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
        const orderId = await page.locator(" td label.ng-star-inserted").textContent();
        console.log(orderId);
        await page.locator("button[routerlink*='myorders']").click();   
        await page.locator("tbody").waitFor();  
        const rows = await page.locator("tbody tr");
        for (let i = 0; i < await rows.count(); ++i) {
           const rowOrderId = await rows.nth(i).locator("th").textContent();
           if (orderId.includes(rowOrderId)) {
              await rows.nth(i).locator("button").first().click();
              break;
           }
        }        
        await page.locator("div .col-text").waitFor();  
        const orderIdDetails = await page.locator("div .col-text").textContent();
        expect(orderId.includes(orderIdDetails)).toBeTruthy(); 
        console.log( page.locator(".tagline").textContent());
        await expect(page.locator(".tagline")).toHaveText(" Thank you for Shopping With Us ");
        await page.close();
        await context.close();


});