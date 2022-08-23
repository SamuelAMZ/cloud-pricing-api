const { digitalArr } = require("../data.js");

const digital = async (page3) => {
  //  scrap general purposes
  const digitalGP = await page3.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#__next > section.SideNavStyles__StyledNavigableSection-sc-rkqag7-0.ifitKw > div:nth-child(2) > div:nth-child(3) > section > div > div > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: "Digital " + item.querySelector("tr td:nth-child(1)").innerText,
      pricePerHour: item.querySelector("tr td:nth-child(5)").innerText,
      pricePerMo: item.querySelector("tr td:nth-child(6)").innerText,
      ram: item.querySelector("tr td:nth-child(1)").innerText,
      cpu: item.querySelector("tr td:nth-child(2)").innerText,
      storage: item.querySelector("tr td:nth-child(4)").innerText,
      transfer: item.querySelector("tr td:nth-child(3)").innerText,
    }))
  );

  //  scrap cpu purposes
  const digitalCP = await page3.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#__next > section.SideNavStyles__StyledNavigableSection-sc-rkqag7-0.ifitKw > div:nth-child(2) > div:nth-child(4) > section > div > div > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: "Digital " + item.querySelector("tr td:nth-child(1)").innerText,
      pricePerHour: item.querySelector("tr td:nth-child(6)").innerText,
      pricePerMo: item.querySelector("tr td:nth-child(7)").innerText,
      ram: item.querySelector("tr td:nth-child(1)").innerText,
      cpu: item.querySelector("tr td:nth-child(2)").innerText,
      storage: item.querySelector("tr td:nth-child(5)").innerText,
      transfer: item.querySelector("tr td:nth-child(3)").innerText,
    }))
  );

  //  scrap ram purposes
  const digitalRM = await page3.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#__next > section.SideNavStyles__StyledNavigableSection-sc-rkqag7-0.ifitKw > div:nth-child(2) > div:nth-child(5) > section > div > div > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: "Digital " + item.querySelector("tr td:nth-child(1)").innerText,
      pricePerHour: item.querySelector("tr td:nth-child(6)").innerText,
      pricePerMo: item.querySelector("tr td:nth-child(7)").innerText,
      ram: item.querySelector("tr td:nth-child(1)").innerText,
      cpu: item.querySelector("tr td:nth-child(2)").innerText,
      storage: item.querySelector("tr td:nth-child(5)").innerText,
      transfer: item.querySelector("tr td:nth-child(3)").innerText,
    }))
  );

  const data = {
    compute: {
      generalPurpose: digitalGP,
      cpuOptimized: digitalCP,
      ramOptimized: digitalRM,
    },
  };

  digitalArr(data);
};

exports.digital = digital;
