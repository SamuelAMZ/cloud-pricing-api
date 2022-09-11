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
    addingData(providerData, name);
  }
  if (providerData.length === 4 && name === "ovhCloud") {
    addingData(providerData, name);
  }
  if (providerData.length === 4 && name === "vultr") {
    addingData(providerData, name);
  }
  if (providerData.length === 4 && name === "digitalOcean") {
    addingData(providerData, name);
  }
  if (providerData.length === 4 && name === "GCP") {
    addingData(providerData, name);
  }
  if (providerData.length === 4 && name === "AWS") {
    addingData(providerData, name);
  }
  if (providerData.length === 4 && name === "azure") {
    addingData(providerData, name);
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

// adding data to db func
function addingData(providerData, name) {
  // date
  let today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  let dateTime = date + " " + time;

  let obj = {};
  obj["company"] = name;
  obj["computer"] = providerData[0].compute;
  obj["storage"] = providerData[1].storage;
  obj["database"] = providerData[2].database;
  obj["networking"] = providerData[3].networking;
  obj["lastUpdate"] = dateTime;

  if (
    obj.company &&
    obj.computer &&
    obj.database &&
    obj.networking &&
    obj.storage
  ) {
    try {
      db.collection(name)
        .insertOne(obj)
        .then((res) => {
          console.log(`successfull added ${obj.company} data`);
        });
    } catch (err) {
      console.log(err);
    }
  } else {
    console.log(`issue with ${obj.company}`);
  }
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
