//   OVH SCRAPPING

const ovhN = async (page26) => {
  //  scrap general purposes
  const ovh = await page26.evaluate(() => [
    {
      provider: "Ovh Cloud",
      price: document.querySelector(
        "#block-ovh-theme-patternlab-content > div > div > div.col-12.col-md-8.col-lg-9 > section:nth-child(2) > div > div.field.field--name-field-view.field--type-viewfield.field--label-hidden > div.field__item.field__item-label-hidden > div > div > div:nth-child(13) > div.oui-table.my-5 > table > tbody > tr > td.price"
      ).innerText,
    },
  ]);

  console.log(ovh);
};

exports.ovhN = ovhN;
