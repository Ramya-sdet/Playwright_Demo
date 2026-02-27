import { test, expect, Locator } from '@playwright/test';

test('Verify locators', async ({ page }) => {

    await page.goto('https://demo.nopcommerce.com/');
  
    //1.page.getByAltText()-identifies images based on alt attribute
    //use this locator when element supports alt text such as img and Area elements
  
    const logo:Locator=page.getByAltText("nopcommerce demo store");
    await expect(logo).toBeVisible();

     //2.page.getByText()-locates elements based on their text content Match substring or exact text,locate 
    //visible text ,used to find
    //  non interactive element like div,span,p i
     
    const text:Locator=page.getByText("Welcome to ur strore");
    //await expect(text).toBeVisible();
    await expect(page.getByText("Welcome to our store")).toBeVisible();

    //3.page.getByRole()-locates elements based on their ARIA role and accessible name
    //locates buutons,links,headings,checkboxes,radio buttons,comboboxes ,tables follows w3c for 
    // implicit and explicit roles 

    await page.getByRole('link', { name: /Register/i }).click();
    //await expect(page.getByRole('link', { name: /Register/i })).toBeVisible()
      await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F")

    //4.page.getByLabel()-locates form elements based on their associated label text 
    // ideal for locating form fields  that have associated label elements

    await page.getByLabel('First name').fill('John');
    await page.getByLabel('Last name').fill('Doe');
    await page.getByLabel('Email').fill('john.doe@example.com');

    //5.page.getByPlaceholder()-locates input elements based on their placeholder text
    await page.getByPlaceholder('Search store').fill('Apple Mac');

    //6.page.getByTitle()-locates elements based on their title attribute
    //await page.goto("https://playwright.dev/docs/locators");
    
    //await expect(page.getByTitle("Locator API")).toBeVisible();
    
     //7.page.getByTestId()-locates elements based on their data-testid attribute
     
     //await expect(page.getByTestId("profile-email")).toHaveText("john.doe@example.com");
     await page.waitForTimeout(5000);
});

