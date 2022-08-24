const { ovhArr } = require("../data.js");

const ovh = async (page2) => {
  //  scrap general purposes
  const ovhGP = await page2.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#block-ovh-theme-patternlab-content > div > div > div.col-12.col-md-8.col-lg-9 > section:nth-child(2) > div > div.field.field--name-field-view.field--type-viewfield.field--label-hidden > div.field__item.field__item-label-hidden > div > div > div:nth-child(2) > div.oui-table.my-5.oui-table--responsive.oui-table--responsive-fluid > table:nth-child(4) > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: item.querySelector("tr td:nth-child(1)").innerText,
      pricePerHour: item
        .querySelector("tr td:nth-child(7)")
        .innerText.replace("€", "")
        .replace("HT/heure", "")
        .trim(),
      ram: item
        .querySelector("tr td:nth-child(2)")
        .innerText.replace("Go", "")
        .trim(),
      cpu: item.querySelector("tr td:nth-child(3)").innerText,
      storage: item
        .querySelector("tr td:nth-child(4)")
        .innerText.replace("Go", "")
        .replace("SSD", "")
        .trim(),
      transfer: item
        .querySelector("tr td:nth-child(5)")
        .innerText.replace("Gbit/s", "")
        .replace("garantis", "")
        .replace("Mbit/s", "")
        .trim(),
    }))
  );

  //   scrapp cpu optimized
  const ovhCP = await page2.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#block-ovh-theme-patternlab-content > div > div > div.col-12.col-md-8.col-lg-9 > section:nth-child(2) > div > div.field.field--name-field-view.field--type-viewfield.field--label-hidden > div.field__item.field__item-label-hidden > div > div > div:nth-child(2) > div.oui-table.my-5.oui-table--responsive.oui-table--responsive-fluid > table:nth-child(9) > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: item.querySelector("tr td:nth-child(1)").innerText,
      pricePerHour: item
        .querySelector("tr td:nth-child(7)")
        .innerText.replace("€", "")
        .replace("HT/heure", "")
        .trim(),
      ram: item
        .querySelector("tr td:nth-child(2)")
        .innerText.replace("Go", "")
        .trim(),
      cpu: item.querySelector("tr td:nth-child(3)").innerText,
      storage: item
        .querySelector("tr td:nth-child(4)")
        .innerText.replace("Go", "")
        .replace("SSD", "")
        .trim(),
      transfer: item
        .querySelector("tr td:nth-child(5)")
        .innerText.replace("Gbit/s", "")
        .replace("garantis", "")
        .replace("Mbit/s", "")
        .trim(),
    }))
  );

  //   scrapp cpu optimized
  const ovhRM = await page2.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#block-ovh-theme-patternlab-content > div > div > div.col-12.col-md-8.col-lg-9 > section:nth-child(2) > div > div.field.field--name-field-view.field--type-viewfield.field--label-hidden > div.field__item.field__item-label-hidden > div > div > div:nth-child(2) > div.oui-table.my-5.oui-table--responsive.oui-table--responsive-fluid > table:nth-child(14) > tbody"
        )
      )[0].children
    ).map((item) => ({
      title: item.querySelector("tr td:nth-child(1)").innerText,
      pricePerHour: item
        .querySelector("tr td:nth-child(7)")
        .innerText.replace("€", "")
        .replace("HT/heure", "")
        .trim(),
      ram: item
        .querySelector("tr td:nth-child(2)")
        .innerText.replace("Go", "")
        .trim(),
      cpu: item.querySelector("tr td:nth-child(3)").innerText,
      storage: item
        .querySelector("tr td:nth-child(4)")
        .innerText.replace("Go", "")
        .replace("SSD", "")
        .trim(),
      transfer: item
        .querySelector("tr td:nth-child(5)")
        .innerText.replace("Gbit/s", "")
        .replace("garantis", "")
        .replace("Mbit/s", "")
        .trim(),
    }))
  );

  ovhGP.push({
    type: "general purpose",
    currency: "€",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "GB/s",
    },
  });
  ovhCP.push({
    type: "cpu optimized",
    currency: "€",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "GB/s",
    },
  });
  ovhRM.push({
    type: "ram optimized",
    currency: "€",
    sizes: {
      cpu: "vcpu",
      storage: "GB",
      ram: "GB",
      transfer: "GB/sec",
    },
  });

  // console.log(ovhGP, ovhCP, ovhRM);

  const data = {
    compute: {
      generalPurpose: ovhGP,
      cpuOptimized: ovhCP,
      ramOptimized: ovhRM,
    },
  };

  ovhArr(data);
};

exports.ovh = ovh;
