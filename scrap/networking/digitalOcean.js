const { digitalArr } = require("../data.js");

//   DIGITAL OCEAN SCRAPPING
const digitalN = async (page24) => {
  //  scrap general purposes
  const digital = await page24.evaluate(() => [
    {
      provider: "Digital Ocean",
      price: document
        .querySelector(".HeadingStyles__StyledH2-sc-kkk1io-1.h2")
        .innerText.replace("Starts at", "")
        .replace("per month", "")
        .trim(),
    },
  ]);

  // console.log(digital);

  const data = {
    networking: {
      nodeBalancers: digital,
    },
  };

  digitalArr(data);
};

exports.digitalN = digitalN;
