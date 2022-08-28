const { awsArr } = require("../data.js");

// Array.from(document.querySelectorAll("td.storage > span")).forEach((item) => {console.log(item.getAttribute('sort') )})

const awsC = async (page6) => {
  //  scrap aws
  const computeData = await page6.evaluate(() =>
    Array.from(
      Array.from(document.querySelectorAll("#data > tbody"))[0].children
    ).map((item) => ({
      title: item.querySelector("td.apiname").innerText,
      pricePerMo: item
        .querySelector("td.cost-ondemand.cost-ondemand-linux")
        .innerText.replace("$", "")
        .replace("monthly", "")
        .trim(),
      ram: item.querySelector("td.memory").innerText.replace("GiB", "").trim(),
      cpu: item.querySelector("td.vcpus").innerText.replace("vCPUs", "").trim(),

      storage: item.querySelector("td.storage > span").getAttribute("sort"),
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

  awsArr(data);
};

exports.aws = awsC;
