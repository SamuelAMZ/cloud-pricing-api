require("dotenv").config();
const { connectToDb, getDb } = require("../db.js");

const linodeData = [];
const ovhData = [];
const vultrData = [];
const digitalData = [];
const gcpData = [];
const awsData = [];
const azureData = [];

// connect to db
let db;
connectToDb((err) => {
  if (!err) {
    console.log("connect to db");
    db = getDb();
  }
});

function bluePrint(providerData, data, name) {
  providerData.push(data);

  if (providerData.length === 4 && name === "linode") {
    let obj = {};
    obj["company"] = name;
    obj["computer"] = providerData[0].compute;
    obj["storage"] = providerData[1].storage;
    obj["database"] = providerData[2].database;
    obj["networking"] = providerData[3].networking;

    console.log(obj);

    db.collection("linode")
      .insertOne(obj)
      .then((res) => {
        console.log(res);
        console.log("added");
      });
  }
}

function linodeArr(data) {
  bluePrint(linodeData, data, "linode");
}
function ovhArr(data) {
  bluePrint(ovhData, data, "ovhCloud");
}
function vultrArr(data) {
  bluePrint(vultrData, data, "vultr");
}
function digitalArr(data) {
  bluePrint(digitalData, data, "digitalOcean");
}
function gcpArr(data) {
  bluePrint(gcpData, data, "GCP");
}
function awsArr(data) {
  bluePrint(awsData, data, "AWS");
}
function azureArr(data) {
  bluePrint(azureData, data, "azure");
}

module.exports = {
  linodeArr,
  ovhArr,
  vultrArr,
  digitalArr,
  gcpArr,
  awsArr,
  azureArr,
};