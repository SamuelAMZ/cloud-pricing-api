const { awsArr } = require("../data.js");

const awsD = async (page18) => {
  //  scrap mysql
  const mysql = await page18.evaluate(() =>
    Array.from(
      Array.from(document.querySelectorAll("#data > tbody"))[0].children
    ).map((item) => ({
      title: item.querySelector("td.apiname").innerText,
      ram: item.querySelector("td.memory").innerText.replace("GiB", "").trim(),
      cpu: item.querySelector("td.vcpus").innerText.replace("vCPUs", "").trim(),
      pricePerMo: item
        .querySelector("td.cost-ondemand-2")
        .innerText.replace("$", "")
        .replace("hourly", "")
        .replace("monthly", "")
        .trim(),
    }))
  );

  //  scrap postgres  #db\.t2\.small > td.cost-ondemand.cost-ondemand-14
  const postgres = await page18.evaluate(() =>
    Array.from(
      Array.from(document.querySelectorAll("#data > tbody"))[0].children
    ).map((item) => ({
      title: item.querySelector("td.apiname").innerText,
      ram: item.querySelector("td.memory").innerText.replace("GiB", "").trim(),
      cpu: item.querySelector("td.vcpus").innerText.replace("vCPUs", "").trim(),
      pricePerMo: item
        .querySelector("td.cost-ondemand-2")
        .innerText.replace("$", "")
        .replace("hourly", "")
        .replace("monthly", "")
        .trim(),
    }))
  );

  // scrap mongo
  await page18.setViewport({
    width: 1440,
    height: 980,
    deviceScaleFactor: 1,
  });
  await page18.goto(process.env.LINK_MONGO);
  // click on the dedicate pricing plan "view pricing"
  await page18.click(
    "body > div.react-root > div > div > div:nth-child(4) > div > div.PricingCards__CardsContainer-sc-1ez6m5s-1.iCPZrv.w-full.w-max-1200.m-auto.fl.fl-wrap > div.pricing-card__Card-sc-1rrr1xw-1.hwtfpR > div > div.pricing-card__FeaturesContainer-sc-1rrr1xw-3.kCoSEj > a"
  );
  // wait 1sec
  await page18.waitForTimeout(1000);
  // click on gcp tab
  await page18.click(
    "#modal > div > div > div.GenericTabs__ButtonWrapper-sc-1fb0yzj-1.cXiEPr.p-h-20.w-full.fl.fl-center > button:nth-child(1)"
  );
  // wait 1sec
  await page18.waitForTimeout(500);

  const mongo = await page18.evaluate(() =>
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
      pricePerMo: String(
        (
          Number(
            item
              .querySelector("tr td:nth-child(5)")
              .innerText.replace("$", "")
              .replace("/hr", "")
              .trim()
          ) * 720
        ).toFixed(5)
      ),
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

  awsArr(data);
};

exports.awsD = awsD;
