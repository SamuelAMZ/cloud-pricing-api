const { gcpArr } = require("../data.js");

const gcpD = async (page17) => {
  const constantC = 0.0413; //per vCPU
  const constantR = 0.007; //per GB

  // postgres database
  const postgres = [
    {
      title: "Postgres 1GB",
      ram: "1",
      cpu: "N/A",
      pricePerHour: (1 * constantR).toFixed(5),
    },
    {
      title: "Postgres 2GB",
      ram: "2",
      cpu: "N/A",
      pricePerHour: (2 * constantR).toFixed(5),
    },
    {
      title: "Postgres 4GB",
      ram: "4",
      cpu: "N/A",
      pricePerHour: (4 * constantR).toFixed(5),
    },
    {
      title: "Postgres 8GB",
      ram: "8",
      cpu: "N/A",
      pricePerHour: (8 * constantR).toFixed(5),
    },
    {
      title: "Postgres 16GB",
      ram: "16",
      cpu: "N/A",
      pricePerHour: (16 * constantR).toFixed(5),
    },
    {
      title: "Postgres 32GB",
      ram: "32",
      cpu: "N/A",
      pricePerHour: (32 * constantR).toFixed(5),
    },
    {
      title: "Postgres 64GB",
      ram: "64",
      cpu: "N/A",
      pricePerHour: (64 * constantR).toFixed(5),
    },
  ];

  // MySql database
  const mysql = [
    {
      title: "MySql 1GB",
      ram: "1",
      cpu: "N/A",
      pricePerHour: (1 * constantR).toFixed(5),
    },
    {
      title: "MySql 2GB",
      ram: "2",
      cpu: "N/A",
      pricePerHour: (2 * constantR).toFixed(5),
    },
    {
      title: "MySql 4GB",
      ram: "4",
      cpu: "N/A",
      pricePerHour: (4 * constantR).toFixed(5),
    },
    {
      title: "MySql 8GB",
      ram: "8",
      cpu: "N/A",
      pricePerHour: (8 * constantR).toFixed(5),
    },
    {
      title: "MySql 16GB",
      ram: "16",
      cpu: "N/A",
      pricePerHour: (16 * constantR).toFixed(5),
    },
    {
      title: "MySql 32GB",
      ram: "32",
      cpu: "N/A",
      pricePerHour: (32 * constantR).toFixed(5),
    },
    {
      title: "MySql 64GB",
      ram: "64",
      cpu: "N/A",
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
    cpu: "",
  });
  mysql.push({
    type: "mysql",
    currency: "$",
    ram: "GB",
    cpu: "",
  });
  mongo.push({
    type: "mongoDB",
    currency: "$",
    ram: "GB",
    cpu: "",
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
