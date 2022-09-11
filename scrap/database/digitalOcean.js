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
      Title: "Postgres " + item.querySelector("tr td:nth-child(1)").innerText,
      size: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
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
      size: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
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
      size: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
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
    size: "GB",
  });
  digitalMysql.push({
    type: "mysql",
    currency: "$",
    size: "GB",
  });
  digitalMongo.push({
    type: "mongoDB",
    currency: "$",
    size: "GB",
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
