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
const databaseAzure = require("./database/azure");
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

  // // -------- LINODE SCRAPPING ----------
  // // LINODE COMPUTE SCRAPPING
  // const page1 = await browser.newPage();
  // await page1.setViewport({
  //   width: 1440,
  //   height: 980,
  //   deviceScaleFactor: 1,
  // });
  // try {
  //   await page1.goto(process.env.LINK_LINODE, {
  //     waitUntil: "networkidle2",
  //   });
  //   await computeLinode.linode(page1);
  // } catch (error) {
  //   console.log(`linode compute error ${error.message}`);
  // }
  // // LINODE STORAGE SCRAPPING
  // try {
  //   await storageLinode.linodeS(page1);
  // } catch (error) {
  //   console.log(`linode storage error ${error.message}`);
  // }
  // // LINODE DATABASE SCRAPPING
  // try {
  //   await databaseLinode.linodeD(page1);
  // } catch (error) {
  //   console.log(`linode database error ${error.message}`);
  // }
  // // LINODE NETWORKING SCRAPPING
  // try {
  //   await networkingLinode.linodeN(page1);
  // } catch (error) {
  //   console.log(`linode networking error ${error.message}`);
  // }

  // // -------- OVH SCRAPPING ----------
  // // OVH COMPUTE SCRAPPING
  // const page2 = await browser.newPage();
  // await page2.setViewport({
  //   width: 1440,
  //   height: 980,
  //   deviceScaleFactor: 1,
  // });
  // try {
  //   await page2.goto(process.env.LINK_OVH, {
  //     waitUntil: "networkidle2",
  //   });
  //   await computeOvh.ovh(page2);
  // } catch (error) {
  //   console.log(`ovh compute error ${error.message}`);
  // }
  // // OVH STORAGE SCRAPPING
  // try {
  //   await storageOvh.ovhS(page2);
  // } catch (error) {
  //   console.log(`ovh storage error ${error.message}`);
  // }
  // // OVH DATABASE SCRAPPING
  // try {
  //   await databaseOvh.ovhD(page2);
  // } catch (error) {
  //   console.log(`ovh database error ${error.message}`);
  // }
  // // OVH NETWORKING SCRAPPING
  // try {
  //   await networkingOvh.ovhN(page2);
  // } catch (error) {
  //   console.log(`ovh networking error ${error.message}`);
  // }

  // // -------- VULTR SCRAPPING ----------
  // // VULTR COMPUTE SCRAPPING
  // const page3 = await browser.newPage();
  // await page3.setViewport({
  //   width: 1440,
  //   height: 980,
  //   deviceScaleFactor: 1,
  // });
  // try {
  //   await page3.goto(process.env.LINK_VULTR, {
  //     waitUntil: "networkidle2",
  //   });
  //   await computeVultr.vultr(page3);
  // } catch (error) {
  //   console.log(`vultr compute error ${error.message}`);
  // }
  // // VULTR STORAGE SCRAPPING
  // try {
  //   await storageVultr.vultrS(page3);
  // } catch (error) {
  //   console.log(`vultr storage error ${error.message}`);
  // }
  // // VULTR DATABASE SCRAPPING
  // try {
  //   await databaseVultr.vultrD(page3);
  // } catch (error) {
  //   console.log(`vultr database error ${error.message}`);
  // }
  // // VULTR NETWORKING SCRAPPING
  // try {
  //   await networkingVultr.vultrN(page3);
  // } catch (error) {
  //   console.log(`vultr networking error ${error.message}`);
  // }

  // // -------- DIGITAL SCRAPPING ----------
  // // // DIGITAL COMPUTE SCRAPPING
  // const page4 = await browser.newPage();
  // await page4.setViewport({
  //   width: 1440,
  //   height: 980,
  //   deviceScaleFactor: 1,
  // });
  // try {
  //   await page4.goto(process.env.LINK_DIGITAL_COMPUTE);
  //   await computeDigital.digital(page4);
  // } catch (error) {
  //   console.log(`digital compute error ${error.message}`);
  // }
  // // DIGITAL STORAGE SCRAPPING
  // const page5 = await browser.newPage();
  // await page5.setViewport({
  //   width: 1440,
  //   height: 980,
  //   deviceScaleFactor: 1,
  // });
  // try {
  //   await page5.goto(process.env.LINK_DIGITAL_STORAGE, {
  //     waitUntil: "networkidle2",
  //   });
  //   await storageDigital.digitalS(page5);
  // } catch (error) {
  //   console.log(`digital storage error ${error.message}`);
  // }
  // // DIGITAL OCEAN DATABASE SCRAPPING
  // const page6 = await browser.newPage();
  // try {
  //   await page6.goto(process.env.LINK_DIGITAL_DATABASE, {
  //     waitUntil: "networkidle2",
  //   });
  //   await databaseDigital.digitalD(page6);
  // } catch (error) {
  //   console.log(`digital database error ${error.message}`);
  // }
  // // DIGITAL NETWORKING SCRAPPING
  // const page7 = await browser.newPage();
  // try {
  //   await page7.goto(process.env.LINK_DIGITAL_NETWORKING);
  //   await networkingDigital.digitalN(page7);
  // } catch (error) {
  //   console.log(`digital networking error ${error.message}`);
  // }

  // -------- GCP SCRAPPING ----------
  // // GCP COMPUTE SCRAPPING
  // const page8 = await browser.newPage();
  // await page8.setViewport({
  //   width: 1440,
  //   height: 980,
  //   deviceScaleFactor: 1,
  // });
  // try {
  //   await page8.goto(process.env.LINK_HOLORI_GOOGLE, {
  //     waitUntil: "networkidle2",
  //   });
  //   await computeGcp.gcp(page8);
  // } catch (error) {
  //   console.log(`gcp compute error ${error.message}`);
  // }
  // // GCP STORAGE SCRAPPING
  // await storageGcp.gcpS();
  // // GCP DATABASE SCRAPPING
  // const page9 = await browser.newPage();
  // try {
  //   await page9.goto(process.env.LINK_MONGO);
  //   await databaseGcp.gcpD(page9);
  // } catch (error) {
  //   console.log(`gcp database error ${error.message}`);
  // }
  // // GCP NETWORKING SCRAPPING
  // await networkingGcp.gcpN();

  // // -------- AWS SCRAPPING ----------
  // // AWS COMPUTE SCRAPPING
  // const page10 = await browser.newPage();
  // await page10.setViewport({
  //   width: 1440,
  //   height: 980,
  //   deviceScaleFactor: 1,
  // });
  // try {
  //   await page10.goto(process.env.LINK_HOLORI_AWS, {
  //     waitUntil: "networkidle2",
  //   });
  //   await computeAws.aws(page10);
  // } catch (error) {
  //   console.log(`aws compute error ${error.message}`);
  // }
  // // AWS STORAGE SCRAPPING
  // await storageAws.awsS();
  // // AWS DATABASE SCRAPPING
  // const page11 = await browser.newPage();
  // try {
  //   await page11.goto(process.env.LINK_VANTAGE);
  //   await databaseAws.awsD(page11);
  // } catch (error) {
  //   console.log(`aws database error ${error.message}`);
  // }
  // // AWS NETWORKING SCRAPPING
  // await networkingAws.awsN();

  // // -------- AZURE SCRAPPING ----------
  // // AZURE COMPUTE SCRAPPING
  // const page12 = await browser.newPage();
  // await page12.setViewport({
  //   width: 1440,
  //   height: 980,
  //   deviceScaleFactor: 1,
  // });
  // try {
  //   await page12.goto(process.env.LINK_HOLORI_AZURE, {
  //     waitUntil: "networkidle2",
  //   });
  //   await computeAzure.azure(page12);
  // } catch (error) {
  //   console.log(`azure compute error ${error.message}`);
  // }
  // // AZURE STORAGE SCRAPPING
  // const page13 = await browser.newPage();
  // try {
  //   await page13.goto(process.env.LINK_AZURE_STORAGE, {
  //     waitUntil: "networkidle2",
  //   });
  //   await storageAzure.azureS(page13);
  // } catch (error) {
  //   console.log(`azure storage error ${error.message}`);
  // }
  // // AZURE DATABASE SCRAPPING
  // const page20 = await browser.newPage();
  // await page20.setViewport({
  //   width: 1440,
  //   height: 980,
  //   deviceScaleFactor: 1,
  // });
  // try {
  //   await page20.goto(process.env.LINK_AZURE_POSTGRES);
  //   await databaseAzure.azureD(page20);
  // } catch (error) {
  //   console.log(`azure database error ${error.message}`);
  // }

  // AZURE NETWORKING SCRAPPING
  await networkingAzure.azureN();

  // close browser
  await browser.close();
})();
