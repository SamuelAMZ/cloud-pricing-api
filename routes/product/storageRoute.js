const express = require("express");
const storageRoute = express.Router();
const { connectToDb, getDb } = require("../../db.js");

// connect to db
let db;
connectToDb((err) => {
  if (!err) {
    console.log("connect to db");
    db = getDb();
  }
});

storageRoute.get("/", async (req, res) => {
  let valAws = await db.collection("AWS").findOne({}, { sort: { _id: -1 } });
  let valGcp = await db.collection("GCP").findOne({}, { sort: { _id: -1 } });
  let valAzure = await db
    .collection("azure")
    .findOne({}, { sort: { _id: -1 } });
  let valDigital = await db
    .collection("digitalOcean")
    .findOne({}, { sort: { _id: -1 } });
  let valLinode = await db
    .collection("linode")
    .findOne({}, { sort: { _id: -1 } });
  let valVultr = await db
    .collection("vultr")
    .findOne({}, { sort: { _id: -1 } });
  let valOvh = await db
    .collection("ovhCloud")
    .findOne({}, { sort: { _id: -1 } });

  let val = {};
  val.product = "storage";
  val.aws = valAws.storage;
  val.gcp = valGcp.storage;
  val.azure = valAzure.storage;
  val.digital = valDigital.storage;
  val.linode = valLinode.storage;
  val.vultr = valVultr.storage;
  val.ovh = valOvh.storage;

  res.json(val);
});

module.exports = storageRoute;
