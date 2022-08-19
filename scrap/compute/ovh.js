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
      pricePerHour: item.querySelector("tr td:nth-child(7)").innerText,
      ram: item.querySelector("tr td:nth-child(2)").innerText,
      cpu: item.querySelector("tr td:nth-child(3)").innerText,
      storage: item.querySelector("tr td:nth-child(4)").innerText,
      transfer: item.querySelector("tr td:nth-child(5)").innerText,
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
      pricePerHour: item.querySelector("tr td:nth-child(7)").innerText,
      ram: item.querySelector("tr td:nth-child(2)").innerText,
      cpu: item.querySelector("tr td:nth-child(3)").innerText,
      storage: item.querySelector("tr td:nth-child(4)").innerText,
      transfer: item.querySelector("tr td:nth-child(5)").innerText,
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
      pricePerHour: item.querySelector("tr td:nth-child(7)").innerText,
      ram: item.querySelector("tr td:nth-child(2)").innerText,
      cpu: item.querySelector("tr td:nth-child(3)").innerText,
      storage: item.querySelector("tr td:nth-child(4)").innerText,
      transfer: item.querySelector("tr td:nth-child(5)").innerText,
    }))
  );

  console.log(
    "---OVH COMPUTE---",
    ovhGP,
    "---OVH COMPUTE---",
    ovhCP,
    "---OVH COMPUTE---",
    ovhRM
  );
};

exports.ovh = ovh;
