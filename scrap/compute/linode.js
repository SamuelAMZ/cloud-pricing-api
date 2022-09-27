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
      pricePerMo: item
        .querySelector(".col--mo")
        .innerText.replace("$", "")
        .trim(),
      pricePerHour: item
        .querySelector(".col--hr")
        .innerText.replace("$", "")
        .trim(),
      ram: item.querySelector(".col--ram").innerText.replace("GB", "").trim(),
      cpu: item.querySelector(".col--cpus").innerText.trim(),
      storage: item
        .querySelector(".col--storage")
        .innerText.replace("GB", "")
        .trim(),
      transfer: item
        .querySelector(".col--transfer")
        .innerText.replace("TB", "")
        .trim(),
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
      pricePerMo: item
        .querySelector(".col--mo")
        .innerText.replace("$", "")
        .trim(),
      pricePerHour: item
        .querySelector(".col--hr")
        .innerText.replace("$", "")
        .trim(),
      ram: item.querySelector(".col--ram").innerText.replace("GB", "").trim(),
      cpu: item.querySelector(".col--cpus").innerText.trim(),
      storage: item
        .querySelector(".col--storage")
        .innerText.replace("GB", "")
        .trim(),
      transfer: item
        .querySelector(".col--transfer")
        .innerText.replace("TB", "")
        .trim(),
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
      pricePerMo: item
        .querySelector(".col--mo")
        .innerText.replace("$", "")
        .trim(),
      pricePerHour: item
        .querySelector(".col--hr")
        .innerText.replace("$", "")
        .trim(),
      ram: item.querySelector(".col--ram").innerText.replace("GB", "").trim(),
      cpu: item.querySelector(".col--cpus").innerText.trim(),
      storage: item
        .querySelector(".col--storage")
        .innerText.replace("GB", "")
        .trim(),
      transfer: item
        .querySelector(".col--transfer")
        .innerText.replace("TB", "")
        .trim(),
    }))
  );

  linodeGP.push({
    type: "general purpose",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "TB",
    },
  });
  linodeCP.push({
    type: "cpu optimized",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "TB",
    },
  });
  linodeRM.push({
    type: "ram optimized",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "TB",
    },
  });

  // console.log(linodeGP, linodeCP, linodeRM);

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
