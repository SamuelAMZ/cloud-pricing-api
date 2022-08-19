const digitalS = async (page10) => {
  //  scrap general purposes
  const digitalBS = await page10.evaluate(() =>
    Array.from(
      Array.from(
        document.querySelectorAll(
          "#__next > section.SideNavStyles__StyledNavigableSection-sc-rkqag7-0.ifitKw > div:nth-child(2) > div:nth-child(2) > section > div > div > table > tbody"
        )
      )[0].children
    ).map((item) => ({
      storage: item.querySelector("tr td:nth-child(1)").innerText,
      price: item.querySelector("tr td:nth-child(3)").innerText,
      pricePerHour: item.querySelector("tr td:nth-child(2)").innerText,
    }))
  );

  console.log(digitalBS);
};

exports.digitalS = digitalS;
