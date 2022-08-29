const express = require("express");
const vultrRoute = express.Router();
const { connectToDb, getDb } = require("../db.js");

// connect to db
let db;
connectToDb((err) => {
  if (!err) {
    console.log("connect to db");
    db = getDb();
  }
});

vultrRoute.get("/", async (req, res) => {
  const val = await db.collection("vultr").findOne(
    {},
    {
      sort: { _id: -1 },
    }
  );

  res.json(val);
});

module.exports = vultrRoute;
