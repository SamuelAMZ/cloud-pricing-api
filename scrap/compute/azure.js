const { azureArr } = require("../data.js");

const azure = async (page7) => {
  const computeData = [];

  const test = async () => {
    await page7.select(
      "#productList > div.field > div > div > div > span > select",
      "100"
    );

    await page7.waitForTimeout(3000);

    const azureAll = await page7.evaluate(() =>
      Array.from(
        Array.from(
          document.querySelectorAll(
            "#productList > div.b-table > div > table > tbody"
          )
        )[0].children
      ).map((item) => ({
        title: item.querySelector("td:nth-child(2)").innerText,
        pricePerHour: item
          .querySelector("td:nth-child(8)")
          .innerText.replace("$US", "")
          .trim(),
        ram: item
          .querySelector("td:nth-child(4)")
          .innerText.replace("GB", "")
          .trim(),
        cpu: item.querySelector("td:nth-child(3)").innerText,
        storage: "depend - optional",
      }))
    );

    computeData.push(azureAll);
  };

  const heading1 = await page7.$eval(
    ".pagination-list li:last-child",
    (el) => el.textContent
  );

  for (
    let i = 0;
    i < Math.floor(Number(heading1) - Number(heading1) / 2 - 1);
    i++
  ) {
    await test();

    console.log(Math.floor(Number(heading1) - Number(heading1) / 2 - 1));
    // console.log(computeData);

    await page7.click("#productList > nav > a.pagination-link.pagination-next");
    await page7.waitForTimeout(4000);
  }

  computeData.push({
    type: "virtual machines",
    currency: "$",
    sizes: {
      cpu: "vcpu",
      ram: "GB",
    },
  });

  console.log(computeData);

  const data = {
    compute: { computeData },
  };

  azureArr(data);
};

exports.azure = azure;
