const puppeteer = require("puppeteer-extra");
// extra
const autoScroll = require("./extra/autoScroll");
// compute engine
const computeLinode = require("./compute/linode");
const computeOvh = require("./compute/ovh");
const computeDigital = require("./compute/digitalOcean");
const computeVultr = require("./compute/vultr");
const computeGcp = require("./compute/gcp");
const computeAws = require("./compute/aws");
const computeAzure = require("./compute/azure");
// storage
const storageLinode = require("./storage/linode");
const storageOvh = require("./storage/ovh");
const storageDigital = require("./storage/digitalOcean");
const storageVultr = require("./storage/vultr");
const storageGcp = require("./storage/gcp");
const storageAws = require("./storage/aws");
const storageAzure = require("./storage/azure");
// database
const databaseLinode = require("./database/linode");
const databaseOvh = require("./database/ovh");
const databaseDigital = require("./database/digitalOcean");
const databaseVultr = require("./database/vultr");
const databaseGcp = require("./database/gcp");
const databaseAws = require("./database/aws");
const databaseAwsMongo = require("./database/_aws-mongo");
const databaseAzure = require("./database/azure");
const databaseAzureMysql = require("./database/_azure-mysql");
const databaseAzureMongo = require("./database/_azure-mongo");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  // //  LINODE SCRAPPING
  // const page1 = await browser.newPage();
  // await page1.goto("https://www.linode.com/pricing/");
  // await computeLinode.linode(page1);

  // // OVH SCRAPPING
  // const page2 = await browser.newPage();
  // await page2.goto("https://www.ovhcloud.com/fr/public-cloud/prices/");
  // await computeOvh.ovh(page2);

  // // DIGITAL SCRAPPING
  // const page3 = await browser.newPage();
  // await page3.goto("https://www.digitalocean.com/pricing/droplets");
  // await computeDigital.digital(page3);

  // // VULTR SCRAPPING
  // const page4 = await browser.newPage();
  // await page4.goto("https://www.vultr.com/pricing/");
  // await computeVultr.vultr(page4);

  // // GCP SCRAPPING
  // const page5 = await browser.newPage();
  // await page5.goto("https://app.holori.com/compare?company=2", {
  //   waitUntil: "networkidle2",
  // });
  // await computeGcp.gcp(page5);

  // // AWS SCRAPPING
  // const page6 = await browser.newPage();
  // await page6.goto("https://app.holori.com/compare?company=1", {
  //   waitUntil: "networkidle2",
  // });
  // await computeAws.aws(page6);

  // // AZURE SCRAPPING
  // const page7 = await browser.newPage();
  // await page7.goto("https://app.holori.com/compare?company=3", {
  //   waitUntil: "networkidle2",
  // });
  // await computeAzure.azure(page7);

  //:::::::: STORAGE START HERE  ::::::::::::

  // // LINODE STORAGE SCRAPPING
  // const page8 = await browser.newPage();
  // await page8.goto("https://www.linode.com/pricing/", {
  //   waitUntil: "networkidle2",
  // });
  // await storageLinode.linodeS(page8);

  // // OVH STORAGE SCRAPPING
  // const page9 = await browser.newPage();
  // await page9.goto("https://www.ovhcloud.com/fr/public-cloud/prices/", {
  //   waitUntil: "networkidle2",
  // });
  // await storageOvh.ovhS(page9);

  // // DIGITAL STORAGE SCRAPPING
  // const page10 = await browser.newPage();
  // await page10.goto("https://www.digitalocean.com/pricing/volumes", {
  //   waitUntil: "networkidle2",
  // });
  // await storageDigital.digitalS(page10);

  // // VULTR STORAGE SCRAPPING
  // const page11 = await browser.newPage();
  // await page11.goto("https://www.vultr.com/pricing", {
  //   waitUntil: "networkidle2",
  // });
  // await storageVultr.vultrS(page11);

  // // GCP STORAGE SCRAPPING
  // await storageGcp.gcpS();

  // AWS STORAGE SCRAPPING
  // await storageAws.awsS();

  // // AZURE STORAGE SCRAPPING
  // const page12 = await browser.newPage();
  // await page12.goto(
  //   "https://azure.microsoft.com/en-us/pricing/calculator/?service=storage",
  //   {
  //     waitUntil: "networkidle2",
  //   }
  // );
  // await storageAzure.azureS(page12);

  //:::::::: DATABASE START HERE  ::::::::::::

  // // LINODE DATABASE SCRAPPING
  // const page13 = await browser.newPage();
  // await page13.goto("https://www.linode.com/pricing/", {
  //   waitUntil: "networkidle2",
  // });
  // await databaseLinode.linodeD(page13);

  // // OVH DATABASE SCRAPPING
  // const page14 = await browser.newPage();
  // await page14.goto("https://www.ovhcloud.com/fr/public-cloud/prices/", {
  //   waitUntil: "networkidle2",
  // });
  // await databaseOvh.ovhD(page14);

  // // DIGITAL OCEAN DATABASE SCRAPPING
  // const page15 = await browser.newPage();
  // await page15.goto("https://www.digitalocean.com/pricing/managed-databases", {
  //   waitUntil: "networkidle2",
  // });
  // await databaseDigital.digitalD(page15);

  // // VULTR DATABASE SCRAPPING
  // const page16 = await browser.newPage();
  // await page16.goto("https://www.vultr.com/pricing/");
  // await databaseVultr.vultrD(page16);

  // // GCP DATABASE SCRAPPING
  // const page17 = await browser.newPage();
  // // https://cloud.google.com/sql/docs/postgres/pricing
  // await page17.goto("https://www.mongodb.com/pricing");
  // await databaseGcp.gcpD(page17);

  // // AWS DATABASE SCRAPPING
  // const page18 = await browser.newPage();
  // await page18.goto("https://instances.vantage.sh/rds/");
  // await databaseAws.awsD(page18);
  // // aws mongo subwork
  // const page19 = await browser.newPage();
  // await page19.goto("https://www.mongodb.com/pricing");
  // await databaseAwsMongo.awsMd(page19);

  // // AZURE DATABASE SCRAPPING
  // const page20 = await browser.newPage();
  // await page20.goto(
  //   "https://azure.microsoft.com/en-us/pricing/details/postgresql/server/"
  // );
  // await databaseAzure.azureD(page20);
  // // mysql azure
  // const page21 = await browser.newPage();
  // await page21.goto(
  //   "https://azure.microsoft.com/en-us/pricing/details/mysql/server/"
  // );
  // await databaseAzureMysql.azureDm(page21);
  // aws mongo subwork
  const page22 = await browser.newPage();
  await page22.goto("https://www.mongodb.com/pricing");
  await databaseAzureMongo.azureMd(page22);

  // close browser
  await browser.close();
})();
