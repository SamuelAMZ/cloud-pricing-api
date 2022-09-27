const { azureArr } = require("../data.js");

const azureD = async (page20) => {
  //  scrap postgres
  const postgres = await page20.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#general-purpose > div > div:nth-child(1) > div:nth-child(4) > div > div.data-table-base.data-table--pricing > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title:
        "Azure " +
        item
          .querySelector("tr > td:nth-child(2)")
          .innerText.replace("GiB", "")
          .trim(),
      ram: item
        .querySelector("tr > td:nth-child(2)")
        .innerText.replace("GiB", "")
        .trim(),
      cpu: item.querySelector("tr > td:nth-child(1)").innerText.trim(),
      pricePerHour: item
        .querySelector("tr > td:nth-child(3)")
        .innerText.replace("/hour", "")
        .replace("$", "")
        .trim(),
    }))
  );
  // mysql azure
  await page20.goto(process.env.LINK_AZURE_MYSQL);
  //  scrap mysql
  const mysql = await page20.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#main > section:nth-child(8) > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(4) > div > div.data-table-base.data-table--pricing > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title:
        "Azure " +
        item
          .querySelector("tr > td:nth-child(2)")
          .innerText.replace("GiB", "")
          .trim(),
      ram: item
        .querySelector("tr > td:nth-child(2)")
        .innerText.replace("GiB", "")
        .trim(),
      cpu: item.querySelector("tr > td:nth-child(1)").innerText.trim(),
      pricePerHour: item
        .querySelector("tr > td:nth-child(3)")
        .innerText.replace("/hour", "")
        .replace("$", "")
        .trim(),
    }))
  );

  // azure mongo
  await page20.goto(process.env.LINK_MONGO);
  await page20.click(
    "body > div.react-root > div > div > div:nth-child(4) > div > div.PricingCards__CardsContainer-sc-1ez6m5s-1.iCPZrv.w-full.w-max-1200.m-auto.fl.fl-wrap > div.pricing-card__Card-sc-1rrr1xw-1.hwtfpR > div > div.pricing-card__FeaturesContainer-sc-1rrr1xw-3.kCoSEj > a"
  );
  // wait 1sec
  await page20.waitForTimeout(1000);
  // click on gcp tab
  await page20.click(
    "#modal > div > div > div.GenericTabs__ButtonWrapper-sc-1fb0yzj-1.cXiEPr.p-h-20.w-full.fl.fl-center > button:nth-child(2)"
  );
  // wait 1sec
  await page20.waitForTimeout(500);

  const mongo = await page20.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#modal > div > div > div.p-v-50 > div > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: item.querySelector("tr td:nth-child(1)").innerText,
      ram: item
        .querySelector("tr td:nth-child(3)")
        .innerText.replace("GB", "")
        .trim(),
      cpu: item
        .querySelector("tr td:nth-child(4)")
        .innerText.replace("vCPU", "")
        .replace("s", "")
        .trim(),
      pricePerHour: item
        .querySelector("tr td:nth-child(5)")
        .innerText.replace("$", "")
        .replace("/hr", "")
        .trim(),
    }))
  );

  postgres.push({
    type: "postgres",
    currency: "$",
    ram: "GB",
    cpu: "vCPUs",
  });
  mysql.push({
    type: "mysql",
    currency: "$",
    ram: "GB",
    cpu: "vCPUs",
  });
  mongo.push({
    type: "mongoDB",
    currency: "$",
    ram: "GB",
    cpu: "vCPUs",
  });

  // console.log(postgres, mysql, mongo);

  const data = {
    database: {
      postgres: postgres,
      mysql: mysql,
      mongo: mongo,
    },
  };

  azureArr(data);
};
exports.azureD = azureD;
