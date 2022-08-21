const awsD = async (page18) => {
  //  scrap postgres
  const postgres = await page18.evaluate(() =>
    Array.from(
      Array.from(document.querySelectorAll("#data > tbody"))[0].children
    ).map((item) => ({
      type: item.querySelector("td.apiname").innerText,
      size: item.querySelector("td.memory").innerText,
      price: item.querySelector("td.cost-ondemand-14").innerText,
    }))
  );

  //  scrap mysql
  const mysql = await page18.evaluate(() =>
    Array.from(
      Array.from(document.querySelectorAll("#data > tbody"))[0].children
    ).map((item) => ({
      type: item.querySelector("td.apiname").innerText,
      size: item.querySelector("td.memory").innerText,
      price: item.querySelector("td.cost-ondemand-2").innerText,
    }))
  );

  console.log(postgres, mysql);
};

exports.awsD = awsD;
