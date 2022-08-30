const express = require("express");
const databaseRoute = express.Router();
const { connectToDb, getDb } = require("../../db.js");

// connect to db
let db;
connectToDb((err) => {
  if (!err) {
    console.log("connect to db");
    db = getDb();
  }
});

databaseRoute.get("/", async (req, res) => {
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
  val.product = "database";
  val.aws = valAws.database;
  val.gcp = valGcp.database;
  val.azure = valAzure.database;
  val.digital = valDigital.database;
  val.linode = valLinode.database;
  val.vultr = valVultr.database;
  val.ovh = valOvh.database;

  res.json(val);
});

module.exports = databaseRoute;
