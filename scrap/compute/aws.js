const { awsArr } = require("../data.js");

const aws = async (page6) => {
  const computeData = [];

  const test = async () => {
    await page6.select(
      "#productList > div.field > div > div > div > span > select",
      "100"
    );

    await page6.waitForTimeout(3000);

    const awsAll = await page6.evaluate(() =>
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

    computeData.push(awsAll);
  };

  const heading1 = await page6.$eval(
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

    await page6.click("#productList > nav > a.pagination-link.pagination-next");
    await page6.waitForTimeout(4000);
  }

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

  awsArr(data);
};

exports.aws = aws;
