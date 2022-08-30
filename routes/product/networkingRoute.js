const express = require("express");
const networkingRoute = express.Router();
const { connectToDb, getDb } = require("../../db.js");

// connect to db
let db;
connectToDb((err) => {
  if (!err) {
    console.log("connect to db");
    db = getDb();
  }
});

networkingRoute.get("/", async (req, res) => {
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
  val.product = "networking";
  val.aws = valAws.networking;
  val.gcp = valGcp.networking;
  val.azure = valAzure.networking;
  val.digital = valDigital.networking;
  val.linode = valLinode.networking;
  val.vultr = valVultr.networking;
  val.ovh = valOvh.networking;

  res.json(val);
});

module.exports = networkingRoute;
