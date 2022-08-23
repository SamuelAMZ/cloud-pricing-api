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
        pricePerHour: item.querySelector("td:nth-child(8)").innerText,
        ram: item.querySelector("td:nth-child(4)").innerText,
        cpu: item.querySelector("td:nth-child(3)").innerText,
        storage: item.querySelector("td:nth-child(5)").innerText,
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

    await page7.click("#productList > nav > a.pagination-link.pagination-next");
    await page7.waitForTimeout(4000);
  }

  const data = {
    compute: { computeData },
  };

  azureArr(data);
};

exports.azure = azure;
