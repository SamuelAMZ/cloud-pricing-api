const { vultrArr } = require("../data.js");

//   VULTR SCRAPPING

const vultrN = async (page25) => {
  //  scrap general purposes
  const vultr = await page25.evaluate(() => [
    {
      provider: "Vultr",
      price: document.querySelector(
        "#load-balancers > div > div > div > div > div > div"
      ).innerText,
    },
  ]);

  const data = {
    networking: {
      nodeBalancers: vultr,
    },
  };

  vultrArr(data);
};

exports.vultrN = vultrN;
