const express = require("express");
const azureRoute = express.Router();
const { connectToDb, getDb } = require("../db.js");

// connect to db
let db;

connectToDb((err) => {
  if (!err) {
    console.log("connect to db");
    db = getDb();
  }
});

azureRoute.get("/", async (req, res) => {
  const val = await db.collection("azure").findOne(
    {},
    {
      sort: { _id: -1 },
    }
  );

  res.json(val);
});

module.exports = azureRoute;
