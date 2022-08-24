const { azureArr } = require("../data.js");

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
        storage: "100",
        pricePerMo: (100 * perOne).toFixed(3),
      },
      {
        storage: "500",
        pricePerMo: (500 * perOne).toFixed(3),
      },
      {
        storage: "1000",
        pricePerMo: (1000 * perOne).toFixed(3),
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
        storage: "100",
        pricePerMo: (100 * perOne).toFixed(3),
      },
      {
        storage: "500",
        pricePerMo: (500 * perOne).toFixed(3),
      },
      {
        storage: "1000",
        pricePerMo: (1000 * perOne).toFixed(3),
      },
    ];
  });

  AzureP.push({
    type: "premium",
    currency: "$",
    size: "GB",
  });
  AzureS.push({
    type: "standard",
    currency: "$",
    size: "GB",
  });

  console.log(AzureP, AzureS);

  const data = {
    storage: {
      premium: AzureP,
      standard: AzureS,
    },
  };

  azureArr(data);
};

exports.azureS = azureS;
