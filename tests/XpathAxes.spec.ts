import { test, expect, Locator } from '@playwright/test';
test('Verify XPath axes - self axis', async ({ page }) => {
// Navigate to W3Schools HTML Tables page
  await page.goto("https://www.w3schools.com/html/html_tables.asp");

  // 1.Self axis XPath to select td elements containing "germany"
  // self::td selects the current node if it is a td element
  const germanycell:Locator = page.locator("//td[contains(text(), 'Germany')]/self::td");
  await expect(germanycell).toContainText('Germany');


//2.parent axis -get parent <tr> of the cell containing "germany"
const parentrow:Locator = page.locator("//td[contains(text(), 'Germany')]/parent::tr");
await expect(parentrow).toContainText("Maria Anders");
console.log("parent row text :",await parentrow.textContent());

//child axis -get all child <td> of the children of second <tr> in table
const secondRowCells:Locator = page.locator("//table[@id='customers']/tbody/tr[2]/child::td");
await expect(secondRowCells).toHaveCount(3);

//ancestor axis -get all ancestor elements of the cell containing "germany"
const table:Locator = page.locator("//td[contains(text(), 'Germany')]/ancestor::table");
await expect(table).toHaveAttribute("id","customers");

//Descendant axis -get all descendant <td> of the table
const allTds:Locator = page.locator("//table[@id='customers']/descendant::td");
await expect(allTds).toHaveCount(18);

//following axis -get all <td> elements that follow the cell containing "germany"
const followingCells:Locator = page.locator("//td[contains(text(), 'Germany')]/following::td[1]");
await expect(followingCells).toHaveText("Centro comercial Moctezuma");

//following-sibling axis -get the next sibling <td> of the cell containing "germany"
const nextSibling:Locator = page.locator("//td[contains(text(), 'Germany')]/following-sibling::td");
await expect(nextSibling).toHaveCount(0);

//preceding axis -get all <td> elements that precede the cell containing "germany"
const precedingCells:Locator = page.locator("//td[contains(text(), 'Germany')]/preceding::td[1]");
await expect(precedingCells).toHaveText("Maria Anders");

//preceding-sibling axis -get the previous sibling <td> of the cell containing "germany"
const previousSibling:Locator = page.locator("//td[contains(text(), 'Germany')]/preceding-sibling::td");
await expect(previousSibling).toHaveCount(2);
});

