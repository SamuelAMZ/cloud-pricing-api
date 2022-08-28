const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.status(200).send("Server up");
});

app.listen(process.env.PORT, () =>
  console.log(`app listen on port ${process.env.PORT}`)
);
