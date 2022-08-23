const { linodeArr } = require("../data.js");

//   LINODE SCRAPPING
const linode = async (page1) => {
  //  scrap general purposes
  const linodeGP = await page1.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#compute-shared > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-g8khfa4z19py.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      title: item.querySelector("th").innerText.trim(),
      pricePerMo: item.querySelector(".col--mo").innerText.trim(),
      pricePerHour: item.querySelector(".col--hr").innerText.trim(),
      ram: item.querySelector(".col--ram").innerText.trim(),
      cpu: item.querySelector(".col--cpus").innerText.trim(),
      storage: item.querySelector(".col--storage").innerText.trim(),
      transfer: item.querySelector(".col--transfer").innerText.trim(),
    }))
  );

  //   scrapp cpu optimized
  const linodeCP = await page1.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#compute-dedicated > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-5mcukenfb3zv.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      title: item.querySelector("th").innerText.trim(),
      pricePerMo: item.querySelector(".col--mo").innerText.trim(),
      pricePerHour: item.querySelector(".col--hr").innerText.trim(),
      ram: item.querySelector(".col--ram").innerText.trim(),
      cpu: item.querySelector(".col--cpus").innerText.trim(),
      storage: item.querySelector(".col--storage").innerText.trim(),
      transfer: item.querySelector(".col--transfer").innerText.trim(),
    }))
  );

  //   scrapp ram optimized
  const linodeRM = await page1.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#compute-high-memory > div > div > div > div > div > div.fl-module.fl-module-csv-to-table.fl-node-1kic760j549g.fl-module-csv-to-table--pricing.fl-module-csv-to-table--sign-up-buttons > div > div > table > tbody > tr"
      )
    ).map((item) => ({
      title: item.querySelector("th").innerText.trim(),
      pricePerMo: item.querySelector(".col--mo").innerText.trim(),
      pricePerHour: item.querySelector(".col--hr").innerText.trim(),
      ram: item.querySelector(".col--ram").innerText.trim(),
      cpu: item.querySelector(".col--cpus").innerText.trim(),
      storage: item.querySelector(".col--storage").innerText.trim(),
      transfer: item.querySelector(".col--transfer").innerText.trim(),
    }))
  );

  const data = {
    compute: {
      generalPurpose: linodeGP,
      cpuOptimized: linodeCP,
      ramOptimized: linodeRM,
    },
  };

  linodeArr(data);
};

exports.linode = linode;
