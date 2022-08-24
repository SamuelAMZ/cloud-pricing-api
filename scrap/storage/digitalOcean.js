const { digitalArr } = require("../data.js");

const digitalS = async (page10) => {
  //  scrap general purposes
  const digitalBS = await page10.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#__next > section.SideNavStyles__StyledNavigableSection-sc-rkqag7-0.ifitKw > div:nth-child(2) > div:nth-child(2) > section > div > div > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      storage: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
        .trim(),
      pricePerMo: item
        .querySelector("tr td:nth-child(3)")
        .innerText.replace("$", "")
        .trim(),
    }))
  );

  digitalBS.push({
    type: "block storage",
    currency: "$",
    size: "GB",
  });

  // console.log(digitalBS);

  const data = {
    storage: {
      blockStorage: digitalBS,
    },
  };

  digitalArr(data);
};

exports.digitalS = digitalS;
