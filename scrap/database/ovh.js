const { ovhArr } = require("../data.js");

const ovhD = async (page14) => {
  //  scrap postgres
  const ovhPostgres = await page14.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#block-ovh-theme-patternlab-content > div > div > div.col-12.col-md-8.col-lg-9 > section:nth-child(2) > div > div.field.field--name-field-view.field--type-viewfield.field--label-hidden > div.field__item.field__item-label-hidden > div > div > div:nth-child(22) > div.oui-table.my-5.oui-table--responsive.oui-table--responsive-fluid > table:nth-child(4) > tbody"
        )
      )[0].children
    ).map((item) => ({
      type: item.querySelector("tr > td:nth-child(1)").innerText,
      size: item
        .querySelector("tr > td:nth-child(2)")
        .innerText.replace("Go", "")
        .trim(),
      pricePerHour: item
        .querySelector("tr > td:nth-child(7)")
        .innerText.replace("€", "")
        .replace("HT/heure/node", "")
        .trim(),
    }))
  );

  //  scrap Mysql
  const ovhMysql = await page14.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#block-ovh-theme-patternlab-content > div > div > div.col-12.col-md-8.col-lg-9 > section:nth-child(2) > div > div.field.field--name-field-view.field--type-viewfield.field--label-hidden > div.field__item.field__item-label-hidden > div > div > div:nth-child(21) > div.oui-table.my-5.oui-table--responsive.oui-table--responsive-fluid > table:nth-child(4) > tbody"
        )
      )[0].children
    ).map((item) => ({
      type: item.querySelector("tr > td:nth-child(1)").innerText,
      size: item
        .querySelector("tr > td:nth-child(2)")
        .innerText.replace("Go", "")
        .trim(),
      pricePerHour: item
        .querySelector("tr > td:nth-child(7)")
        .innerText.replace("€", "")
        .replace("HT/heure/node", "")
        .trim(),
    }))
  );

  //  scrap Mongo
  const ovhMongo = await page14.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#block-ovh-theme-patternlab-content > div > div > div.col-12.col-md-8.col-lg-9 > section:nth-child(2) > div > div.field.field--name-field-view.field--type-viewfield.field--label-hidden > div.field__item.field__item-label-hidden > div > div > div:nth-child(20) > div.oui-table.my-5.oui-table--responsive.oui-table--responsive-fluid > table:nth-child(4) > tbody"
        )
      )[0].children
    ).map((item) => ({
      type: item.querySelector("tr > td:nth-child(1)").innerText,
      size: item
        .querySelector("tr > td:nth-child(2)")
        .innerText.replace("Go", "")
        .trim(),
      pricePerHour: item
        .querySelector("tr > td:nth-child(7)")
        .innerText.replace("€", "")
        .replace("HT/heure/node", "")
        .trim(),
    }))
  );

  ovhPostgres.push({
    type: "postgres",
    currency: "€",
    size: "GB",
  });
  ovhMysql.push({
    type: "mysql",
    currency: "€",
    size: "GB",
  });
  ovhMongo.push({
    type: "mongoDB",
    currency: "€",
    size: "GB",
  });

  // console.log(ovhPostgres, ovhMysql, ovhMongo);

  const data = {
    database: {
      postgres: ovhPostgres,
      mysql: ovhMysql,
      mongo: ovhMongo,
    },
  };

  ovhArr(data);
};

exports.ovhD = ovhD;
