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
      pricePerHour: item
        .querySelector("tr td:nth-child(5)")
        .innerText.replace("$", "")
        .trim(),
      pricePerMo: item
        .querySelector("tr td:nth-child(6)")
        .innerText.replace("$", "")
        .trim(),
      ram: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
        .trim(),
      cpu: item
        .querySelector("tr td:nth-child(2)")
        .innerText.replace("vCPUs", "")
        .trim(),
      storage: item
        .querySelector("tr td:nth-child(4)")
        .innerText.replace("GB", "")
        .replace("TB", "")
        .trim(),
      transfer: item
        .querySelector("tr td:nth-child(3)")
        .innerText.replace("TB", "")
        .trim(),
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
      pricePerHour: item
        .querySelector("tr td:nth-child(6)")
        .innerText.replace("$", "")
        .trim(),
      pricePerMo: item
        .querySelector("tr td:nth-child(7)")
        .innerText.replace("$", "")
        .trim(),
      ram: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
        .trim(),
      cpu: item
        .querySelector("tr td:nth-child(2)")
        .innerText.replace("vCPUs", "")
        .trim(),
      storage: item
        .querySelector("tr td:nth-child(5)")
        .innerText.replace("GB", "")
        .replace("TB", "")
        .trim(),
      transfer: item
        .querySelector("tr td:nth-child(3)")
        .innerText.replace("TB", "")
        .trim(),
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
      pricePerHour: item
        .querySelector("tr td:nth-child(6)")
        .innerText.replace("$", "")
        .trim(),
      pricePerMo: item
        .querySelector("tr td:nth-child(7)")
        .innerText.replace("$", "")
        .trim(),
      ram: item
        .querySelector("tr td:nth-child(1)")
        .innerText.replace("GB", "")
        .trim(),
      cpu: item
        .querySelector("tr td:nth-child(2)")
        .innerText.replace("vCPUs", "")
        .trim(),
      storage: item
        .querySelector("tr td:nth-child(5)")
        .innerText.replace("GB", "")
        .replace("TB", "")
        .trim(),
      transfer: item
        .querySelector("tr td:nth-child(3)")
        .innerText.replace("TB", "")
        .trim(),
    }))
  );

  digitalGP.push({
    type: "general purpose",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "TB",
    },
  });
  digitalCP.push({
    type: "cpu optimized",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "TB",
    },
  });
  digitalRM.push({
    type: "ram optimized",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "TB",
    },
  });

  // console.log(digitalGP, digitalCP, digitalRM);

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
