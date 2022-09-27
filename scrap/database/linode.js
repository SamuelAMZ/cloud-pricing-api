const { linodeArr } = require("../data.js");

//   LINODE SCRAPPING
const linodeD = async (page13) => {
  //  scrap postgres
  const linodePostgres = await page13.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#databases-postgresql > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-zjmrvf9hckbg.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons.js-hidden.js-tab--postgresql.js-tab--postgresql--dedicated-cpu.active > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      title: item.querySelector("th").innerText.trim(),
      ram: item
        .querySelector("th")
        .innerText.replace("Dedicated", "")
        .replace("GB", "")
        .trim(),
      cpu: "N/A",
      pricePerMo: item.querySelector("td").innerText.replace("$", "").trim(),
    }))
  );

  //  scrap mysql
  const linodeMysql = await page13.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#databases-mysql > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-osnjwbr1xvk3.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons.js-hidden.js-tab--mysql.js-tab--mysql--dedicated-cpu.active > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      title: item.querySelector("th").innerText.trim(),
      ram: item
        .querySelector("th")
        .innerText.replace("Dedicated", "")
        .replace("GB", "")
        .trim(),
      cpu: "N/A",
      pricePerMo: item.querySelector("td").innerText.replace("$", "").trim(),
    }))
  );

  //  scrap mongoDB
  const linodeMongo = await page13.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#databases-mongodb > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-fc2as7d3y54m.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons.js-hidden.js-tab--mongodb.js-tab--mongodb--dedicated-cpu.active > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      title: item.querySelector("th").innerText.trim(),
      ram: item
        .querySelector("th")
        .innerText.replace("Dedicated", "")
        .replace("GB", "")
        .trim(),
      cpu: "N/A",
      pricePerMo: item.querySelector("td").innerText.replace("$", "").trim(),
    }))
  );

  linodePostgres.push({
    type: "postgres",
    currency: "$",
    ram: "GB",
    cpu: "",
  });
  linodeMysql.push({
    type: "mysql",
    currency: "$",
    ram: "GB",
    cpu: "",
  });
  linodeMongo.push({
    type: "mongoDB",
    currency: "$",
    ram: "GB",
    cpu: "",
  });

  // console.log(linodePostgres, linodeMysql, linodeMongo);

  const data = {
    database: {
      postgres: linodePostgres,
      mysql: linodeMysql,
      mongo: linodeMongo,
    },
  };

  linodeArr(data);
};

exports.linodeD = linodeD;
