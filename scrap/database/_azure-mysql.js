const azureDm = async (page21) => {
  //  scrap mysql
  const mysql = await page21.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#main > section:nth-child(8) > div > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(4) > div > div.data-table-base.data-table--pricing > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      type:
        "Azure " +
        item
          .querySelector("tr > td:nth-child(2)")
          .innerText.replace("GiB", "")
          .trim(),
      size: "Azure " + item.querySelector("tr > td:nth-child(2)").innerText,
      price: "Azure " + item.querySelector("tr > td:nth-child(3)").innerText,
    }))
  );

  console.log(mysql);
};
exports.azureDm = azureDm;
