const { vultrArr } = require("../data.js");

//   VULTR SCRAPPING

const vultrN = async (page25) => {
  //  scrap general purposes
  const vultr = await page25.evaluate(() => [
    {
      title: "1 node",
      pricePerHour: document
        .querySelector("#load-balancers > div > div > div > div > div > div")
        .innerText.replace("$", "")
        .replace("/hr", "")
        .trim(),
    },
  ]);

  vultr.push({
    type: "node balancers",
    currency: "$",
  });

  // console.log(vultr);

  const data = {
    networking: {
      nodeBalancers: vultr,
    },
  };

  vultrArr(data);
};

exports.vultrN = vultrN;
