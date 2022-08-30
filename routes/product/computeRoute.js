const express = require("express");
const computeRoute = express.Router();
const { connectToDb, getDb } = require("../../db.js");

// connect to db
let db;
connectToDb((err) => {
  if (!err) {
    console.log("connect to db");
    db = getDb();
  }
});

computeRoute.get("/", async (req, res) => {
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
  val.product = "Compute";
  val.aws = valAws.computer;
  val.gcp = valGcp.computer;
  val.azure = valAzure.computer;
  val.digital = valDigital.computer;
  val.linode = valLinode.computer;
  val.vultr = valVultr.computer;
  val.ovh = valOvh.computer;

  res.json(val);
});

module.exports = computeRoute;
