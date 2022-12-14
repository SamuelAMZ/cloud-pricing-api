const { digitalArr } = require("../data.js");

const digitalD = async (page15) => {
  //  scrap postgres
  const digitalPostgres = await page15.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#__next > section.SideNavStyles__StyledNavigableSection-sc-rkqag7-0.ifitKw > div:nth-child(2) > div:nth-child(4) > section > div > div.PricingDropletTemplateStyles__StyledTableContainer-sc-aynvxv-2.hsoRlz > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: "Postgres " + item.querySelector("tr td:nth-child(1)").innerText,
      ram: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
        .trim(),
      cpu: item
        .querySelector("tr td:nth-child(2)")
        .innerText.replace("vCPU", "")
        .replace("s", "")
        .trim(),
      pricePerMo: item
        .querySelector("tr td:nth-child(6)")
        .innerText.replace("$", "")
        .trim(),
    }))
  );

  //  scrap Mysql
  const digitalMysql = await page15.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#__next > section.SideNavStyles__StyledNavigableSection-sc-rkqag7-0.ifitKw > div:nth-child(2) > div:nth-child(3) > section > div > div.PricingDropletTemplateStyles__StyledTableContainer-sc-aynvxv-2.hsoRlz > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: "Mysql " + item.querySelector("tr td:nth-child(1)").innerText,
      ram: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
        .trim(),
      cpu: item
        .querySelector("tr td:nth-child(2)")
        .innerText.replace("vCPU", "")
        .replace("s", "")
        .trim(),
      pricePerMo: item
        .querySelector("tr td:nth-child(6)")
        .innerText.replace("$", "")
        .trim(),
    }))
  );

  //  scrap Mongo
  const digitalMongo = await page15.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#__next > section.SideNavStyles__StyledNavigableSection-sc-rkqag7-0.ifitKw > div:nth-child(2) > div:nth-child(2) > section > div > div > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: "MongoDB " + item.querySelector("tr td:nth-child(1)").innerText,
      ram: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
        .trim(),
      cpu: item
        .querySelector("tr td:nth-child(2)")
        .innerText.replace("vCPU", "")
        .replace("s", "")
        .trim(),
      pricePerMo: item
        .querySelector("tr td:nth-child(6)")
        .innerText.replace("$", "")
        .trim(),
    }))
  );

  digitalPostgres.push({
    type: "postgres",
    currency: "$",
    ram: "GB",
    cpu: "vCPUs",
  });
  digitalMysql.push({
    type: "mysql",
    currency: "$",
    ram: "GB",
    cpu: "vCPUs",
  });
  digitalMongo.push({
    type: "mongoDB",
    currency: "$",
    ram: "GB",
    cpu: "vCPUs",
  });

  // console.log(digitalPostgres, digitalMysql, digitalMongo);

  const data = {
    database: {
      postgres: digitalPostgres,
      mysql: digitalMysql,
      mongo: digitalMongo,
    },
  };

  digitalArr(data);
};

exports.digitalD = digitalD;
