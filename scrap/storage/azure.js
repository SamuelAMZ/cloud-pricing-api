const azureS = async (page12) => {
  //  scrap premium storage
  const AzureP = await page12.evaluate(() => [
    {
      type: "premium",
      storage: document.querySelector(
        "div.row.row-size1.offer-row.column.cost.no-divider > div > div > input"
      ).value,
      price: document.querySelector(
        "div.row.row-size1.column.cost.module-total > div:nth-child(2) > span.numeric > span"
      ).innerText,
    },
  ]);

  await page12.select(
    "div.row.row-size1.detail > div:nth-child(3) > div > select",
    "standard"
  );
  await page12.waitForTimeout(1000);

  //  scrap standard storage
  const AzureS = await page12.evaluate(() => [
    {
      type: "standard",
      storage: document.querySelector(
        "div.row.row-size1.offer-row.column.cost.no-divider > div > div > input"
      ).value,
      price: document.querySelector(
        "div.row.row-size1.column.cost.module-total > div:nth-child(2) > span.numeric > span"
      ).innerText,
    },
  ]);

  console.log(AzureP, AzureS);
};

exports.azureS = azureS;
