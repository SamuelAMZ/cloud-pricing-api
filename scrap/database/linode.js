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
      type: item.querySelector("th").innerText.trim(),
      size: item.querySelector("th").innerText.replace("Dedicated", "").trim(),
      price: item.querySelector("td").innerText.trim(),
    }))
  );

  //  scrap mysql
  const linodeMysql = await page13.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#databases-mysql > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-osnjwbr1xvk3.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons.js-hidden.js-tab--mysql.js-tab--mysql--dedicated-cpu.active > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      type: item.querySelector("th").innerText.trim(),
      size: item.querySelector("th").innerText.replace("Dedicated", "").trim(),
      price: item.querySelector("td").innerText.trim(),
    }))
  );

  //  scrap mongoDB
  const linodeMongo = await page13.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#databases-mongodb > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-fc2as7d3y54m.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons.js-hidden.js-tab--mongodb.js-tab--mongodb--dedicated-cpu.active > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      type: item.querySelector("th").innerText.trim(),
      size: item.querySelector("th").innerText.replace("Dedicated", "").trim(),
      price: item.querySelector("td").innerText.trim(),
    }))
  );

  linodePostgres.push({ name: "postgres" });
  linodeMysql.push({ name: "mysql" });
  linodeMongo.push({ name: "mongoDB" });

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
