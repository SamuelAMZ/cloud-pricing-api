const { linodeArr } = require("../data.js");
//   LINODE SCRAPPING
const linodeN = async (page23) => {
  //  scrap general purposes
  const linode = await page23.evaluate(() => [
    {
      title: "1 node",
      pricePerHour: document
        .querySelector(
          "#nodebalancers > div > div > div > div > div > div.fl-module.fl-module-html.fl-node-7zpxsw92gvao.js-hidden.js-tab--slidertab.js-tab--nanodes.active > div > div > div > div > div.c-price-slider__detail"
        )
        .innerText.replace("$", "0")
        .replace("/hr", "")
        .trim(),
    },
  ]);

  linode.push({
    type: "node balancers",
    currency: "$",
  });

  // console.log(linode);

  const data = {
    networking: {
      nodeBalancers: linode,
    },
  };

  linodeArr(data);
};

exports.linodeN = linodeN;
