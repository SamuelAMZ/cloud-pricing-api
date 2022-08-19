const vultr = async (page4) => {
  //  scrap general purposes
  const vultrGP = await page4.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#general-purpose > div.pricing-hide-on-mobile > div > div.pt__body.js-body"
        )
      )[0].children
    ).map((item) => ({
      title: "vultr " + item.querySelector(".js-price:nth-child(1)").innerText,
      pricePerHour: item.querySelector(".js-price:nth-child(6)").innerText,
      pricePerMo: item.querySelector(".js-price:nth-child(5)").innerText,
      ram: item.querySelector(".js-price:nth-child(2)").innerText,
      cpu: item.querySelector(".js-price:nth-child(1)").innerText,
      storage: item.querySelector(".js-price:nth-child(4)").innerText,
      transfer: item.querySelector(".js-price:nth-child(3)").innerText,
    }))
  );

  //  scrap cpu optimized
  const vultrCP = await page4.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#cpu-optimized > div.pricing-hide-on-mobile > div > div.pt__body.js-body"
        )
      )[0].children
    ).map((item) => ({
      title: "vultr " + item.querySelector(".js-price:nth-child(1)").innerText,
      pricePerHour: item.querySelector(".js-price:nth-child(6)").innerText,
      pricePerMo: item.querySelector(".js-price:nth-child(5)").innerText,
      ram: item.querySelector(".js-price:nth-child(2)").innerText,
      cpu: item.querySelector(".js-price:nth-child(1)").innerText,
      storage: item.querySelector(".js-price:nth-child(4)").innerText,
      transfer: item.querySelector(".js-price:nth-child(3)").innerText,
    }))
  );

  //  scrap RAM optimized
  const vultrRM = await page4.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#memory-optimized > div.pricing-hide-on-mobile > div > div.pt__body.js-body"
        )
      )[0].children
    ).map((item) => ({
      title: "vultr " + item.querySelector(".js-price:nth-child(1)").innerText,
      pricePerHour: item.querySelector(".js-price:nth-child(6)").innerText,
      pricePerMo: item.querySelector(".js-price:nth-child(5)").innerText,
      ram: item.querySelector(".js-price:nth-child(2)").innerText,
      cpu: item.querySelector(".js-price:nth-child(1)").innerText,
      storage: item.querySelector(".js-price:nth-child(4)").innerText,
      transfer: item.querySelector(".js-price:nth-child(3)").innerText,
    }))
  );

  console.log(
    "--vultr COMPUTER--",
    vultrGP,
    "--vultr COMPUTER--",
    vultrCP,
    "--vultr COMPUTER--",
    vultrRM
  );
};

exports.vultr = vultr;
