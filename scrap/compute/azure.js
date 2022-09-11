const { azureArr } = require("../data.js");

// Array.from(document.querySelectorAll("tbody")).forEach(elm => elm)

const azure = async (page7) => {
  await page7.waitForTimeout(1000);
  // Array.from(document.querySelectorAll("tbody")).forEach(elm => elm)

  const computeData = await page7.evaluate(() =>
    Array.from(
      document.querySelectorAll("#pricing-table-container tbody tr")
    ).map((item) => ({
      title: item.querySelector("td:nth-child(1)").innerText,
      pricePerMo: item
        .querySelector("td:nth-child(5)")
        .innerText.replace("$", "")
        .replace("/month", "")
        .trim(),
      ram: item
        .querySelector("td:nth-child(3)")
        .innerText.replace("GiB", "")
        .trim(),
      cpu: item.querySelector("td:nth-child(2)").innerText,
      storage: item
        .querySelector("td:nth-child(4)")
        .innerText.replace("GiB", "")
        .trim(),
    }))
  );

  computeData.push({
    type: "virtual machines",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      ram: "GB",
    },
  });

  const data = {
    compute: { computeData },
  };

  // console.log(data);

  azureArr(data);
};

exports.azure = azure;
