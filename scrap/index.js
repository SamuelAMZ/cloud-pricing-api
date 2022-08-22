require("dotenv").config();
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
// networking
const networkingLinode = require("./networking/linode");
const networkingDigital = require("./networking/digitalOcean");
const networkingVultr = require("./networking/vultr");
const networkingOvh = require("./networking/ovh");
const networkingGcp = require("./networking/gcp");
const networkingAws = require("./networking/aws");
const networkingAzure = require("./networking/azure");

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  //  LINODE SCRAPPING
  const page1 = await browser.newPage();
  try {
    await page1.goto(process.env.LINK_LINODE);
    await computeLinode.linode(page1);
  } catch (error) {
    console.log(error.message);
  }

  // OVH SCRAPPING
  const page2 = await browser.newPage();
  try {
    await page2.goto(process.env.LINK_OVH);
    await computeOvh.ovh(page2);
  } catch (error) {
    console.log(error.message);
  }

  // DIGITAL SCRAPPING
  const page3 = await browser.newPage();
  try {
    await page3.goto(process.env.LINK_DIGITAL_COMPUTE);
    await computeDigital.digital(page3);
  } catch (error) {
    console.log(error.message);
  }

  // VULTR SCRAPPING
  const page4 = await browser.newPage();
  try {
    await page4.goto(process.env.LINK_VULTR);
    await computeVultr.vultr(page4);
  } catch (error) {
    console.log(error.message);
  }

  // GCP SCRAPPING
  const page5 = await browser.newPage();
  try {
    await page5.goto(process.env.LINK_HOLORI_GOOGLE, {
      waitUntil: "networkidle2",
    });
    await computeGcp.gcp(page5);
  } catch (error) {
    console.log(error.message);
  }

  // AWS SCRAPPING
  const page6 = await browser.newPage();
  try {
    await page6.goto(process.env.LINK_HOLORI_AWS, {
      waitUntil: "networkidle2",
    });
    await computeAws.aws(page6);
  } catch (error) {
    console.log(error.message);
  }

  // AZURE SCRAPPING
  const page7 = await browser.newPage();
  try {
    await page7.goto(process.env.LINK_HOLORI_AZURE, {
      waitUntil: "networkidle2",
    });
    await computeAzure.azure(page7);
  } catch (error) {
    console.log(error.message);
  }

  // :::::::: STORAGE START HERE  ::::::::::::

  // LINODE STORAGE SCRAPPING
  const page8 = await browser.newPage();
  try {
    await page8.goto(process.env.LINK_LINODE, {
      waitUntil: "networkidle2",
    });
    await storageLinode.linodeS(page8);
  } catch (error) {
    console.log(error.message);
  }

  // OVH STORAGE SCRAPPING
  const page9 = await browser.newPage();
  try {
    await page9.goto(process.env.LINK_OVH, {
      waitUntil: "networkidle2",
    });
    await storageOvh.ovhS(page9);
  } catch (error) {
    console.log(error.message);
  }

  // DIGITAL STORAGE SCRAPPING
  const page10 = await browser.newPage();
  try {
    await page10.goto(process.env.LINK_DIGITAL_STORAGE, {
      waitUntil: "networkidle2",
    });
    await storageDigital.digitalS(page10);
  } catch (error) {
    console.log(error.message);
  }

  // VULTR STORAGE SCRAPPING
  const page11 = await browser.newPage();
  try {
    await page11.goto(process.env.LINK_VULTR, {
      waitUntil: "networkidle2",
    });
    await storageVultr.vultrS(page11);
  } catch (error) {
    console.log(error.message);
  }

  // GCP STORAGE SCRAPPING
  await storageGcp.gcpS();

  // AWS STORAGE SCRAPPING
  await storageAws.awsS();

  // AZURE STORAGE SCRAPPING
  const page12 = await browser.newPage();
  try {
    await page12.goto(process.env.LINK_AZURE_STORAGE, {
      waitUntil: "networkidle2",
    });
    await storageAzure.azureS(page12);
  } catch (error) {
    console.log(error.message);
  }

  // :::::::: DATABASE START HERE  ::::::::::::

  // LINODE DATABASE SCRAPPING
  const page13 = await browser.newPage();
  try {
    await page13.goto(process.env.LINK_LINODE, {
      waitUntil: "networkidle2",
    });
    await databaseLinode.linodeD(page13);
  } catch (error) {
    console.log(error.message);
  }

  // OVH DATABASE SCRAPPING
  const page14 = await browser.newPage();
  try {
    await page14.goto(process.env.LINK_OVH, {
      waitUntil: "networkidle2",
    });
    await databaseOvh.ovhD(page14);
  } catch (error) {
    console.log(error.message);
  }

  // DIGITAL OCEAN DATABASE SCRAPPING
  const page15 = await browser.newPage();
  try {
    await page15.goto(process.env.LINK_DIGITAL_DATABASE, {
      waitUntil: "networkidle2",
    });
    await databaseDigital.digitalD(page15);
  } catch (error) {
    console.log(error.message);
  }

  // VULTR DATABASE SCRAPPING
  const page16 = await browser.newPage();
  try {
    await page16.goto(process.env.LINK_VULTR);
    await databaseVultr.vultrD(page16);
  } catch (error) {
    console.log(error.message);
  }

  // GCP DATABASE SCRAPPING
  const page17 = await browser.newPage();
  try {
    // https://cloud.google.com/sql/docs/postgres/pricing
    await page17.goto(process.env.LINK_MONGO);
    await databaseGcp.gcpD(page17);
  } catch (error) {
    console.log(error.message);
  }

  // AWS DATABASE SCRAPPING
  const page18 = await browser.newPage();
  try {
    await page18.goto(process.env.LINK_VANTAGE);
    await databaseAws.awsD(page18);
  } catch (error) {
    console.log(error.message);
  }
  // aws mongo subwork
  const page19 = await browser.newPage();
  try {
    await page19.goto(process.env.LINK_MONGO);
    await databaseAwsMongo.awsMd(page19);
  } catch (error) {
    console.log(error.message);
  }
  // AZURE DATABASE SCRAPPING
  const page20 = await browser.newPage();
  try {
    await page20.goto(process.env.LINK_AZURE_POSTGRES);
    await databaseAzure.azureD(page20);
  } catch (error) {
    console.log(error.message);
  }
  // mysql azure
  const page21 = await browser.newPage();
  try {
    await page21.goto(process.env.LINK_AZURE_MYSQL);
    await databaseAzureMysql.azureDm(page21);
  } catch (error) {
    console.log(error.message);
  }
  // azure mongo subwork
  const page22 = await browser.newPage();
  try {
    await page22.goto(process.env.LINK_MONGO);
    await databaseAzureMongo.azureMd(page22);
  } catch (error) {
    console.log(error.message);
  }

  // LINODE NETWORKING SCRAPPING
  const page23 = await browser.newPage();
  try {
    await page23.goto(process.env.LINK_LINODE);
    await networkingLinode.linodeN(page23);
  } catch (error) {
    console.log(error.message);
  }

  // DIGITAL NETWORKING SCRAPPING
  const page24 = await browser.newPage();
  try {
    await page24.goto(process.env.LINK_DIGITAL_NETWORKING);
    await networkingDigital.digitalN(page24);
  } catch (error) {
    console.log(error.message);
  }

  // VULTR NETWORKING SCRAPPING
  const page25 = await browser.newPage();
  try {
    await page25.goto(process.env.LINK_VULTR);
    await networkingVultr.vultrN(page25);
  } catch (error) {
    console.log(error.message);
  }

  // OVH NETWORKING SCRAPPING
  const page26 = await browser.newPage();
  try {
    await page26.goto(process.env.LINK_OVH);
    await networkingOvh.ovhN(page26);
  } catch (error) {
    console.log(error.message);
  }

  // GCP NETWORKING SCRAPPING
  await networkingGcp.gcpN();

  // AWS NETWORKING SCRAPPING
  await networkingAws.awsN();

  // AZURE NETWORKING SCRAPPING
  await networkingAzure.azureN();

  // close browser
  await browser.close();
})();
