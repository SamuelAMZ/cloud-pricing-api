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

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
puppeteer.use(StealthPlugin());

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });

  //  LINODE SCRAPPING
  const page1 = await browser.newPage();
  await page1.goto("https://www.linode.com/pricing/");
  await computeLinode.linode(page1);

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

  // close browser
  await browser.close();
})();
