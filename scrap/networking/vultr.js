//   VULTR SCRAPPING

const vultrN = async (page25) => {
  //  scrap general purposes
  const vultr = await page25.evaluate(() => [
    {
      provider: "Vultr",
      price: document.querySelector(
        "#load-balancers > div > div > div > div > div > div"
      ).innerText,
    },
  ]);

  console.log(vultr);
};

exports.vultrN = vultrN;
