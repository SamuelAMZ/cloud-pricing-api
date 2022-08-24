const { vultrArr } = require("../data.js");

const vultrS = async (page11) => {
  //  scrap block storage
  const vultrBS = await page11.evaluate(() => {
    const baseStorage = document
      .querySelector(
        "#block-storage > div > div > div > div > div > div.bs-calculator__content > div > div:nth-child(2) > div.value"
      )
      .innerText.replace("\n", "")
      .replace("GB", "")
      .trim();
    const basePrice = document.querySelector(
      "#block-storage > div > div > div > div > div > div.bs-calculator__content > div > div:nth-child(1) > div.value.value-price > span:nth-child(1)"
    ).innerText;

    const perOne = (Number(basePrice) / Number(baseStorage)).toFixed(5);

    return [
      {
        storage: "100",
        pricePerMo: (100 * perOne).toFixed(2),
      },
      {
        storage: "500",
        pricePerMo: (500 * perOne).toFixed(2),
      },
      {
        storage: "1000",
        pricePerMo: (1000 * perOne).toFixed(2),
      },
    ];
  });

  //  scrap object storage
  const vultrOS = await page11.evaluate(() => {
    const baseStorage = document.querySelector(
      "#object-storage > div > div.box__right > div > div > div.package__body > ul > li:nth-child(1) > b > span"
    ).innerText;
    const basePrice = document.querySelector(
      "#object-storage > div > div.box__right > div > div > div.package__header.has-divider > div > span > b > span"
    ).innerText;

    const perOne = (Number(basePrice) / Number(baseStorage)).toFixed(5);

    return [
      {
        storage: "100",
        pricePerMo: (100 * perOne).toFixed(2),
      },
      {
        storage: "500",
        pricePerMo: (500 * perOne).toFixed(2),
      },
      {
        storage: "1000",
        pricePerMo: (1000 * perOne).toFixed(2),
      },
    ];
  });

  vultrBS.push({
    type: "block storage",
    currency: "$",
    size: "GB",
  });
  vultrOS.push({
    type: "object storage",
    currency: "$",
    size: "GB",
  });

  console.log(vultrBS, vultrOS);

  const data = {
    storage: {
      blockStorage: vultrBS,
      objectStorage: vultrOS,
    },
  };

  vultrArr(data);
};

exports.vultrS = vultrS;
