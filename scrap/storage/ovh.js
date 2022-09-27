const { ovhArr } = require("../data.js");

const ovhS = async (page9) => {
  //  scrap block  storage
  const ovhBS = await page9.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#block-ovh-theme-patternlab-content > div > div > div.col-12.col-md-8.col-lg-9 > section:nth-child(2) > div > div.field.field--name-field-view.field--type-viewfield.field--label-hidden > div.field__item.field__item-label-hidden > div > div > div:nth-child(7) > div.oui-table.my-5.oui-table--responsive.oui-table--responsive-fluid > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      storage: item
        .querySelector("tr > td:nth-child(2)")
        .innerText.replace("garantis", "")
        .replace("jusqu'à", "to")
        .replace("Jusqu'à", "upto")
        .replace("par", "per")
        .trim(),
      pricePerMo: item
        .querySelector("tr > td.price")
        .innerText.replace("HT/mois/Go", "")
        .replace("€", "")
        .trim(),
    }))
  );

  //  scrap object  storage
  const ovhOS = await page9.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#block-ovh-theme-patternlab-content > div > div > div.col-12.col-md-8.col-lg-9 > section:nth-child(2) > div > div.field.field--name-field-view.field--type-viewfield.field--label-hidden > div.field__item.field__item-label-hidden > div > div > div:nth-child(8) > div.oui-table.my-5 > table:nth-child(4) > tbody"
        )
      )[0].children
    ).map((item) => ({
      storage: item
        .querySelector("tr > td:nth-child(1)")
        .innerText.replace("garantis", "")
        .replace("Stokage", "Replica")
        .replace("réplica", "Storage")
        .replace("Trafic", "traffic")
        .replace("entrant", "incoming")
        .replace("sortant", "outgoing")
        .trim(),
      pricePerMo: item
        .querySelector("tr > td:nth-child(2)")
        .innerText.replace("HT/mois/Go", "")
        .replace("€", "")
        .replace("Inclus", "included")
        .trim(),
    }))
  );

  ovhBS.push({
    type: "block storage",
    currency: "€/GB",
    size: "GB",
  });
  ovhOS.push({
    type: "object storage",
    currency: "€/GB",
    size: "GB",
  });

  // console.log(ovhBS, ovhOS);

  const data = {
    storage: {
      blockStorage: ovhBS,
      objectStorage: ovhOS,
    },
  };

  ovhArr(data);
};

exports.ovhS = ovhS;
