const azureD = async (page20) => {
  //  scrap postgres
  const postgres = await page20.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#general-purpose > div > div:nth-child(1) > div:nth-child(4) > div > div.data-table-base.data-table--pricing > table > tbody"
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

  console.log(postgres);
};
exports.azureD = azureD;
