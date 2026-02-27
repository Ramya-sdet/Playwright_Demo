    import { test, expect, Locator } from '@playwright/test';

test('Verify XPath locators', async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");


    //1.Using absolute XPath
    const absolutelogo : Locator = page.locator("/html[1]/body[1]/div[4]/div[1]/div[1]/div[1]/a[1]/img[1]");
    //await expect(absolutelogo).toBeVisible();

    //2.Using relative XPath
    const relativeLogo : Locator = page.locator('//img[@alt="Tricentis Demo Web Shop"]');
    await expect(relativeLogo).toBeVisible();

    //3.Using contains
    const products = page.locator("//h2/a[contains(@href,'computer')]");
    const productscount:number = await products.count();
    console.log("no of computer products :",productscount);

    expect(productscount).toBeGreaterThan(0);
    console.log("first product :",await products.first().textContent());
    console.log("last product :",await products.last().textContent());
    console.log("nth product :",await products.nth(2).textContent());

    let producttitle:string[]=await products.allTextContents();
    for(let pdt of producttitle){
        console.log(pdt);

    //4.Using Start-with()
    const buildingproducts:Locator = page.locator("//h2/a[starts-with(@href,'/build-your-own')]");
    const buildingproductscount:number = await buildingproducts.count();
    console.log("no of build your own products :",buildingproductscount);
    expect(buildingproductscount).toBeGreaterThan(0);   

    //5.Using text()
    const reglinks:Locator= page.locator("//a[text()='Register']");
    await expect(reglinks).toBeVisible();
    
    //6.Using last()
    const lastproduct:Locator= page.locator("//div[@class='column follow-us']//li[last()]");
    await expect(lastproduct).toBeVisible();
    console.log("last product :",await lastproduct.textContent());

    //7.Using position()
    const Thirdproduct:Locator= page.locator("//div[@class='column follow-us']//li[position()=3]");
    await expect(Thirdproduct).toBeVisible();
    console.log("Third product :",await Thirdproduct.textContent());
    }
       await page.waitForTimeout(5000);
    });


