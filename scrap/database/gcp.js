const gcpD = async (page17) => {
  const constantC = 0.0413; //per vCPU
  const constantR = 0.007; //per GB

  // postgres database
  const postgres = [
    {
      type: "Postgres 1GB",
      size: "1",
      price: (1 * constantR).toFixed(5),
    },
    {
      type: "Postgres 2GB",
      size: "2",
      price: (2 * constantR).toFixed(5),
    },
    {
      type: "Postgres 4GB",
      size: "4",
      price: (4 * constantR).toFixed(5),
    },
    {
      type: "Postgres 8GB",
      size: "8",
      price: (8 * constantR).toFixed(5),
    },
    {
      type: "Postgres 16GB",
      size: "16",
      price: (16 * constantR).toFixed(5),
    },
    {
      type: "Postgres 32GB",
      size: "32",
      price: (32 * constantR).toFixed(5),
    },
    {
      type: "Postgres 64GB",
      size: "64",
      price: (64 * constantR).toFixed(5),
    },
  ];

  // MySql database
  const mysql = [
    {
      type: "MySql 1GB",
      size: "1",
      price: (1 * constantR).toFixed(5),
    },
    {
      type: "MySql 2GB",
      size: "2",
      price: (2 * constantR).toFixed(5),
    },
    {
      type: "MySql 4GB",
      size: "4",
      price: (4 * constantR).toFixed(5),
    },
    {
      type: "MySql 8GB",
      size: "8",
      price: (8 * constantR).toFixed(5),
    },
    {
      type: "MySql 16GB",
      size: "16",
      price: (16 * constantR).toFixed(5),
    },
    {
      type: "MySql 32GB",
      size: "32",
      price: (32 * constantR).toFixed(5),
    },
    {
      type: "MySql 64GB",
      size: "64",
      price: (64 * constantR).toFixed(5),
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
      type: item.querySelector("tr td:nth-child(1)").innerText,
      size: item.querySelector("tr td:nth-child(3)").innerText,
      price: item.querySelector("tr td:nth-child(5)").innerText,
    }))
  );

  console.log(postgres, mysql, mongo);
};

exports.gcpD = gcpD;
