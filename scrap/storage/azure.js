const azureS = async (page12) => {
  //  scrap premium storage
  const AzureP = await page12.evaluate(() => {
    const singleSS = Number(
      document.querySelector(
        "div.row.row-size1.offer-row.column.cost.no-divider > div > div > input"
      ).value
    );
    const singleSP = Number(
      document
        .querySelector(
          "div.row.row-size1.column.cost.module-total > div:nth-child(2) > span.numeric > span"
        )
        .innerText.replace("$", "")
    );
    const perOne = (singleSP / singleSS).toFixed(5);

    return [
      {
        type: "premium",
        storage: 100,
        price: (100 * perOne).toFixed(3),
      },
      {
        type: "premium",
        storage: 500,
        price: (500 * perOne).toFixed(3),
      },
      {
        type: "premium",
        storage: 1000,
        price: (1000 * perOne).toFixed(3),
      },
    ];
  });

  await page12.select(
    "div.row.row-size1.detail > div:nth-child(3) > div > select",
    "standard"
  );
  await page12.waitForTimeout(1000);

  //  scrap standard storage
  const AzureS = await page12.evaluate(() => {
    const singleSS = Number(
      document.querySelector(
        "div.row.row-size1.offer-row.column.cost.no-divider > div > div > input"
      ).value
    );
    const singleSP = Number(
      document
        .querySelector(
          "div.row.row-size1.column.cost.module-total > div:nth-child(2) > span.numeric > span"
        )
        .innerText.replace("$", "")
    );
    const perOne = (singleSP / singleSS).toFixed(5);

    return [
      {
        type: "standard",
        storage: 100,
        price: (100 * perOne).toFixed(3),
      },
      {
        type: "standard",
        storage: 500,
        price: (500 * perOne).toFixed(3),
      },
      {
        type: "standard",
        storage: 1000,
        price: (1000 * perOne).toFixed(3),
      },
    ];
  });

  console.log(AzureP, AzureS);
};

exports.azureS = azureS;
