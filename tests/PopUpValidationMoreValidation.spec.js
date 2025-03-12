import { test, expect } from '@playwright/test';


test('@PopUp Validation More Validation', async ({ page }) => {

    // Moving Backword and forward in the browser 
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.goto("https://google.com");
    await page.goBack();
    await page.goForward();
    await expect(page.locator(" ")).toBeVisible();
    await expect(page.locator(" ")).toBeHidden();
    //Working with popups
    await page.on("dialog",dialog => dialog.accept());       
    await page.locator("#confirmbtn").click();

    // dealing with mouse hover
    await page.locator("#mousehover").hover();

    // dealing with frames
    const framePage = page.frameLocator("#course-iframe");
    await framePage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck = await framePage.locator(".text h2").textContent();
    console.log(textCheck.split(" ")[1]);


});