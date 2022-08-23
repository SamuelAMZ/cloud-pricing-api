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
      type: "Postgres " + item.querySelector("tr td:nth-child(1)").innerText,
      size: item.querySelector("tr td:nth-child(1)").innerText,
      price: item.querySelector("tr td:nth-child(6)").innerText,
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
      type: "Mysql " + item.querySelector("tr td:nth-child(1)").innerText,
      size: item.querySelector("tr td:nth-child(1)").innerText,
      price: item.querySelector("tr td:nth-child(6)").innerText,
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
      type: "MongoDB " + item.querySelector("tr td:nth-child(1)").innerText,
      size: item.querySelector("tr td:nth-child(1)").innerText,
      price: item.querySelector("tr td:nth-child(6)").innerText,
    }))
  );

  // console.log(digitalPostgres, digitalMysql, digitalMongo);

  const data = {
    compute: {
      postgres: digitalPostgres,
      mysql: digitalMysql,
      mongo: digitalMongo,
    },
  };

  digitalArr(data);
};

exports.digitalD = digitalD;
