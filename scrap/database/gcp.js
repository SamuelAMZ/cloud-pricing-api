const { gcpArr } = require("../data.js");

const gcpD = async (page17) => {
  const constantC = 0.0413; //per vCPU
  const constantR = 0.007; //per GB

  // postgres database
  const postgres = [
    {
      title: "Postgres 1GB",
      size: "1",
      pricePerHour: (1 * constantR).toFixed(5),
    },
    {
      title: "Postgres 2GB",
      size: "2",
      pricePerHour: (2 * constantR).toFixed(5),
    },
    {
      title: "Postgres 4GB",
      size: "4",
      pricePerHour: (4 * constantR).toFixed(5),
    },
    {
      title: "Postgres 8GB",
      size: "8",
      pricePerHour: (8 * constantR).toFixed(5),
    },
    {
      title: "Postgres 16GB",
      size: "16",
      pricePerHour: (16 * constantR).toFixed(5),
    },
    {
      title: "Postgres 32GB",
      size: "32",
      pricePerHour: (32 * constantR).toFixed(5),
    },
    {
      title: "Postgres 64GB",
      size: "64",
      pricePerHour: (64 * constantR).toFixed(5),
    },
  ];

  // MySql database
  const mysql = [
    {
      title: "MySql 1GB",
      size: "1",
      pricePerHour: (1 * constantR).toFixed(5),
    },
    {
      title: "MySql 2GB",
      size: "2",
      pricePerHour: (2 * constantR).toFixed(5),
    },
    {
      title: "MySql 4GB",
      size: "4",
      pricePerHour: (4 * constantR).toFixed(5),
    },
    {
      title: "MySql 8GB",
      size: "8",
      pricePerHour: (8 * constantR).toFixed(5),
    },
    {
      title: "MySql 16GB",
      size: "16",
      pricePerHour: (16 * constantR).toFixed(5),
    },
    {
      title: "MySql 32GB",
      size: "32",
      pricePerHour: (32 * constantR).toFixed(5),
    },
    {
      title: "MySql 64GB",
      size: "64",
      pricePerHour: (64 * constantR).toFixed(5),
    },
  ];

  // mongo database
  // click on the dedicate pricing plan "view pricing"
  await page17.click(
    "body > div.react-root > div > div > div:nth-child(4) > div > div.PricingCards__CardsContainer-sc-1ez6m5s-1.iCPZrv.w-full.w-max-1200.m-auto.fl.fl-wrap > div.pricing-card__Card-sc-1rrr1xw-1.hwtfpR > div > div.pricing-card__FeaturesContainer-sc-1rrr1xw-3.kCoSEj > a"
  );
  // wait 1sec
  await page17.waitForTimeout(1000);
  // click on gcp tab
  await page17.click(
    "#modal > div > div > div.GenericTabs__ButtonWrapper-sc-1fb0yzj-1.cXiEPr.p-h-20.w-full.fl.fl-center > button:nth-child(3)"
  );
  // wait 1sec
  await page17.waitForTimeout(500);

  const mongo = await page17.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#modal > div > div > div.p-v-50 > div > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: item.querySelector("tr td:nth-child(1)").innerText,
      size: item
        .querySelector("tr td:nth-child(3)")
        .innerText.replace("GB", "")
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
    size: "GB",
  });
  mysql.push({
    type: "mysql",
    currency: "$",
    size: "GB",
  });
  mongo.push({
    type: "mongoDB",
    currency: "$",
    size: "GB",
  });

  // console.log(postgres, mysql, mongo);

  const data = {
    database: {
      postgres: postgres,
      mysql: mysql,
      mongo: mongo,
    },
  };

  gcpArr(data);
};

exports.gcpD = gcpD;
