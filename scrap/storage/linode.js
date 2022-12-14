const { linodeArr } = require("../data.js");
//   LINODE SCRAPPING
const linodeS = async (page8) => {
  //  scrap block storage
  const linodeBS = await page8.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#block-storage > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-c5upv1oxk4da.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      storage: item
        .querySelector("th")
        .innerText.replace("GB", "")
        .replace(" ", "")
        .replace("TB", "000")
        .trim(),
      pricePerMo: item.querySelector("td").innerText.replace("$", "").trim(),
    }))
  );

  //  scrap object storage
  const linodeOS = await page8.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#object-storage > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-u8ytlzjbsn1r.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      storage: item
        .querySelector("th")
        .innerText.replace("GB", "")
        .replace(" ", "")
        .replace("TB", "000")
        .trim(),
      pricePerMo: item.querySelector("td").innerText.replace("$", "").trim(),
    }))
  );

  linodeBS.push({
    type: "block storage",
    currency: "$",
    size: "GB",
  });
  linodeOS.push({
    type: "object storage",
    currency: "$",
    size: "GB",
  });

  // console.log(linodeBS, linodeOS);

  const data = {
    storage: {
      blockStorage: linodeBS,
      objectStorage: linodeOS,
    },
  };

  linodeArr(data);
};

exports.linodeS = linodeS;
