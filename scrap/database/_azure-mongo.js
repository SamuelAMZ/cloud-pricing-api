const azureMd = async (page22) => {
  // mongo database
  // click on the dedicate pricing plan "view pricing"
  await page22.click(
    "body > div.react-root > div > div > div:nth-child(4) > div > div.PricingCards__CardsContainer-sc-1ez6m5s-1.iCPZrv.w-full.w-max-1200.m-auto.fl.fl-wrap > div.pricing-card__Card-sc-1rrr1xw-1.hwtfpR > div > div.pricing-card__FeaturesContainer-sc-1rrr1xw-3.kCoSEj > a"
  );
  // wait 1sec
  await page22.waitForTimeout(1000);
  // click on gcp tab
  await page22.click(
    "#modal > div > div > div.GenericTabs__ButtonWrapper-sc-1fb0yzj-1.cXiEPr.p-h-20.w-full.fl.fl-center > button:nth-child(2)"
  );
  // wait 1sec
  await page22.waitForTimeout(500);

  const mongo = await page22.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#modal > div > div > div.p-v-50 > div > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      type: item.querySelector("tr td:nth-child(1)").innerText,
      size: item.querySelector("tr td:nth-child(3)").innerText,
      price: item.querySelector("tr td:nth-child(5)").innerText,
    }))
  );

  console.log(mongo);
};

exports.azureMd = azureMd;
