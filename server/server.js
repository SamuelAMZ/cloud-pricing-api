const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello express");
});

app.listen(5000);
