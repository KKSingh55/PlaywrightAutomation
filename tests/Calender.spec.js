import { test, expect } from '@playwright/test';

test("@Calender validation ",async ( {page} ) =>
{
    
    const MonthNumber = "6";
    const date = "15";
    const year = "2022";
    const expectedList = [MonthNumber,date,year];
   await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
   await page.locator(".react-date-picker__calendar-button__icon").click();
   await page.locator(".react-calendar__navigation__label__labelText").click();
   await page.locator(".react-calendar__navigation__label__labelText").click();
   await page.getByText(year).click();

   await page.locator(".react-calendar__tile").nth(Number(MonthNumber)-1).click();
   await page.locator("//abbr[text()= "+date+"]").click();
   const actualList = await page.locator (".react-date-picker__inputGroup input");
   for(let index = 0 ; index < actualList.length ; index++)
   {
     const value = actualList[index].getAttribute("value");
     expect(value).toEqual(expectedList[index]);
   }
   
 });

 test.only("@Calender  validation Automation ",async ( {page} )  =>
 {
    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
    await page.locator('button').nth(2).click();
   await page.getByRole('button', { name: 'March 2025' }).click();
   await page.getByRole('button', { name: '2025', exact: true }).click();
   await page.getByRole('button', { name: '2022' }).click();
   await page.getByRole('button', { name: 'November' }).click();
   await page.getByRole('button', { name: 'November 28,' }).click();
   
 });
