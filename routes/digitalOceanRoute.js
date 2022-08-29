const express = require("express");
const digitalOceanRoute = express.Router();
const { connectToDb, getDb } = require("../db.js");

// connect to db
let db;
connectToDb((err) => {
  if (!err) {
    console.log("connect to db");
    db = getDb();
  }
});

digitalOceanRoute.get("/", async (req, res) => {
  const val = await db.collection("digitalOcean").findOne(
    {},
    {
      sort: { _id: -1 },
    }
  );

  res.json(val);
});

module.exports = digitalOceanRoute;
