const { vultrArr } = require("../data.js");

const vultrD = async (page16) => {
  //  scrap Mysql
  const vultrMysql = await page16.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#mysql > div.pricing-hide-on-mobile > div > div.pt__body.js-body"
        )
      )[0].children
    ).map((item) => ({
      title:
        "mySql " +
        item
          .querySelector(".pt__cell:nth-child(1)")
          .innerText.replace("\n", "")
          .trim(),
      ram: item
        .querySelector(".pt__cell:nth-child(1)")
        .innerText.replace("\n", "")
        .replace("GB", "")
        .trim(),
      cpu: item
        .querySelector(".pt__cell:nth-child(2)")
        .innerText.replace("\n", "")
        .replace("vCPU", "")
        .replace("s", "")
        .trim(),
      pricePerHour: item
        .querySelector(".pt__cell:nth-child(6)")
        .innerText.replace("$", "")
        .replace("/hr", "")
        .replace("\n", "")
        .trim(),
      pricePerMo: item
        .querySelector(".pt__cell:nth-child(5)")
        .innerText.replace("$", "")
        .replace("/mo", "")
        .replace("\n", "")
        .trim(),
    }))
  );

  //  scrap Mysql
  const vultrPostgres = await page16.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#postgresql > div.pricing-hide-on-mobile > div > div.pt__body.js-body"
        )
      )[0].children
    ).map((item) => ({
      title:
        "postgres " +
        item
          .querySelector(".pt__cell:nth-child(1)")
          .innerText.replace("\n", "")
          .trim(),
      ram: item
        .querySelector(".pt__cell:nth-child(1)")
        .innerText.replace("\n", "")
        .replace("GB", "")
        .trim(),
      cpu: item
        .querySelector(".pt__cell:nth-child(2)")
        .innerText.replace("\n", "")
        .replace("vCPU", "")
        .replace("s", "")
        .trim(),
      pricePerHour: item
        .querySelector(".pt__cell:nth-child(6)")
        .innerText.replace("$", "")
        .replace("/hr", "")
        .replace("\n", "")
        .trim(),
      pricePerMo: item
        .querySelector(".pt__cell:nth-child(5)")
        .innerText.replace("$", "")
        .replace("/mo", "")
        .replace("\n", "")
        .trim(),
    }))
  );

  vultrMysql.push({
    type: "mysql",
    currency: "$",
    ram: "GB",
    cpu: "vCPUs",
  });
  vultrPostgres.push({
    type: "postgres",
    currency: "$",
    ram: "GB",
    cpu: "vCPUs",
  });

  // console.log(vultrMysql, vultrPostgres);

  const data = {
    database: {
      mysql: vultrMysql,
      postgres: vultrPostgres,
    },
  };

  vultrArr(data);
};

exports.vultrD = vultrD;
