const { vultrArr } = require("../data.js");

const vultrD = async (page16) => {
  //  scrap Mysql
  const vultrMysql = await page16.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#storage-optimized > div:nth-child(5) > div > div.pt__body.js-body > div"
      )
    ).map((item) => ({
      title:
        "vultr" +
        item
          .querySelector(".pt__cell:first-child")
          .innerText.replace("GB", "")
          .trim(),
      size: item
        .querySelector(".pt__cell:first-child")
        .innerText.replace("\n", "")
        .replace("GB", "")
        .trim(),
      pricePerHour: item
        .querySelector("div:nth-child(6)")
        .innerText.replace("/hr", "")
        .replace("$", "")
        .trim(),
    }))
  );

  vultrMysql.push({
    type: "mysql",
    currency: "$",
    size: "GB",
  });

  // console.log(vultrMysql);

  const data = {
    database: {
      generalPurpose: vultrMysql,
    },
  };

  vultrArr(data);
};

exports.vultrD = vultrD;
