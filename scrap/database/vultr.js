const vultrD = async (page16) => {
  //  scrap Mysql
  const vultrMysql = await page16.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#storage-optimized > div:nth-child(5) > div > div.pt__body.js-body"
        )
      )[0].children
    ).map((item) => ({
      title:
        "vultr " +
        item.querySelector(
          "#storage-optimized > div:nth-child(5) > div > div.pt__body.js-body > div:nth-child(1) > div > div:nth-child(1)"
        ).innerText,
    }))
  );

  console.log(vultrMysql);
};

exports.vultrD = vultrD;
