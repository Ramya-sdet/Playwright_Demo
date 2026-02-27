import{test,expect,Locator} from "@playwright/test";
test("Verify CSS locators", async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.waitForTimeout(3000);
    //1.Using tag name
    const searchBox:Locator=page.locator('#small-searchterms');
    await expect(searchBox).toBeVisible();
    await searchBox.fill("T-shirts");

    //2.Using class name
    await page.locator('.search-box-text').fill("T-shirts");

    //3.Using tag[attribute=value]
    await page.locator('input[name="q"]').fill("T-shirts");



})