const vultrS = async (page11) => {
  //  scrap block storage
  const vultrBS = await page11.evaluate(() => [
    {
      baseStorage: document.querySelector(
        "#block-storage > div > div > div > div > div > div.bs-calculator__content > div > div:nth-child(2) > div.value > span.storage-calculator__input"
      ).innerText,
      basePrice: document.querySelector(
        "#block-storage > di > div > div > div > div > div.bs-calculator__content > div > div:nth-child(1) > div.value.value-price > span:nth-child(1)"
      ).innerText,
      base: "10 GB at 1.00",
    },
  ]);

  //  scrap object storage
  const vultrOS = await page11.evaluate(() => [
    {
      baseStorage: document.querySelector(
        "#object-storage > div > div.box__right > div > div > div.package__body > ul > li:nth-child(1) > b > span"
      ).innerText,
      basePrice: document.querySelector(
        "#object-storage > div > div.box__right > div > div > div.package__header.has-divider > div > span > b > span"
      ).innerText,
      base: "250 GB at 5.00",
    },
  ]);

  console.log(vultrBS, vultrOS);
};

exports.vultrS = vultrS;
