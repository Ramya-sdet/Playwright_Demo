import{test,expect} from '@playwright/test'

test('My first test',async ({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google')
})
test.only('Verify page title',async ({page})=>{
    await page.goto('https://www.automationpractice.pl/index.php');
    let title = await page.title();
    console.log("Title :",title);
    await expect(title).toBe('My Shop');
})