const { vultrArr } = require("../data.js");

const vultr = async (page4) => {
  //  scrap general purposes
  const vultrGP = await page4.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#general-purpose > div.pricing-hide-on-mobile > div > div.pt__body.js-body"
        )
      )[0].children
    ).map((item) => ({
      title:
        "vultr " +
        item
          .querySelector(".js-price:nth-child(1)")
          .innerText.replace("\n", "")
          .trim(),
      pricePerHour: item
        .querySelector(".js-price:nth-child(6)")
        .innerText.replace("\n", "")
        .replace("/hr", "")
        .replace("$", "")
        .trim(),
      pricePerMo: item
        .querySelector(".js-price:nth-child(5)")
        .innerText.replace("\n", "")
        .replace("/mo", "")
        .replace("$", "")
        .trim(),
      ram: item
        .querySelector(".js-price:nth-child(2)")
        .innerText.replace("\n", "")
        .replace("GB", "")
        .trim(),
      cpu: item
        .querySelector(".js-price:nth-child(1)")
        .innerText.replace("\n", "")
        .replace("vCPU", "")
        .trim(),
      storage: item
        .querySelector(".js-price:nth-child(4)")
        .innerText.replace("\n", "")
        .replace("GB", "")
        .trim(),
      transfer: item
        .querySelector(".js-price:nth-child(3)")
        .innerText.replace("\n", "")
        .replace(" ", "")
        .replace("TB", "000")
        .trim(),
    }))
  );

  //  scrap cpu optimized
  const vultrCP = await page4.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#cpu-optimized > div.pricing-hide-on-mobile > div > div.pt__body.js-body"
        )
      )[0].children
    ).map((item) => ({
      title:
        "vultr " +
        item
          .querySelector(".js-price:nth-child(1)")
          .innerText.replace("\n", "")
          .trim(),
      pricePerHour: item
        .querySelector(".js-price:nth-child(6)")
        .innerText.replace("\n", "")
        .replace("/hr", "")
        .replace("$", "")
        .trim(),
      pricePerMo: item
        .querySelector(".js-price:nth-child(5)")
        .innerText.replace("\n", "")
        .replace("/mo", "")
        .replace("$", "")
        .trim(),
      ram: item
        .querySelector(".js-price:nth-child(2)")
        .innerText.replace("\n", "")
        .replace("GB", "")
        .trim(),
      cpu: item
        .querySelector(".js-price:nth-child(1)")
        .innerText.replace("\n", "")
        .replace("vCPU", "")
        .trim(),
      storage: item
        .querySelector(".js-price:nth-child(4)")
        .innerText.replace("\n", "")
        .replace("GB", "")
        .trim(),
      transfer: item
        .querySelector(".js-price:nth-child(3)")
        .innerText.replace("\n", "")
        .replace(" ", "")
        .replace("TB", "000")
        .trim(),
    }))
  );

  //  scrap RAM optimized
  const vultrRM = await page4.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#memory-optimized > div.pricing-hide-on-mobile > div > div.pt__body.js-body"
        )
      )[0].children
    ).map((item) => ({
      title:
        "vultr " +
        item
          .querySelector(".js-price:nth-child(1)")
          .innerText.replace("\n", "")
          .trim(),
      pricePerHour: item
        .querySelector(".js-price:nth-child(6)")
        .innerText.replace("\n", "")
        .replace("/hr", "")
        .replace("$", "")
        .trim(),
      pricePerMo: item
        .querySelector(".js-price:nth-child(5)")
        .innerText.replace("\n", "")
        .replace("/mo", "")
        .replace("$", "")
        .trim(),
      ram: item
        .querySelector(".js-price:nth-child(2)")
        .innerText.replace("\n", "")
        .replace("GB", "")
        .trim(),
      cpu: item
        .querySelector(".js-price:nth-child(1)")
        .innerText.replace("\n", "")
        .replace("vCPU", "")
        .trim(),
      storage: item
        .querySelector(".js-price:nth-child(4)")
        .innerText.replace("\n", "")
        .replace("GB", "")
        .trim(),
      transfer: item
        .querySelector(".js-price:nth-child(3)")
        .innerText.replace("\n", "")
        .replace(" ", "")
        .replace("TB", "000")
        .trim(),
    }))
  );

  vultrGP.push({
    type: "general purpose",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "TB",
    },
  });
  vultrCP.push({
    type: "cpu optimized",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "TB",
    },
  });
  vultrRM.push({
    type: "ram optimized",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "TB",
    },
  });

  // console.log(vultrGP, vultrCP, vultrRM);

  const data = {
    compute: {
      generalPurpose: vultrGP,
      cpuOptimized: vultrCP,
      ramOptimized: vultrRM,
    },
  };

  vultrArr(data);
};

exports.vultr = vultr;
