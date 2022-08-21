const vultrD = async (page16) => {
  //  scrap Mysql
  const vultrMysql = await page16.evaluate(() =>
    Array.from(
      document.querySelectorAll(
        "#storage-optimized > div:nth-child(5) > div > div.pt__body.js-body > div"
      )
    ).map((item) => ({
      type:
        "vultr" +
        item
          .querySelector(".pt__cell:first-child")
          .innerText.replace("GB", "")
          .trim(),
      size: item.querySelector(".pt__cell:first-child").innerText,
      price: item.querySelector("div:nth-child(6)").innerText,
    }))
  );
  console.log(vultrMysql);
};

exports.vultrD = vultrD;
