const express = require("express");
const app = express();
require("dotenv").config();

// routes
const linodeRoute = require("../routes/linodeRoute.js");
const ovhRoute = require("../routes/ovhRoute.js");
const vultrRoute = require("../routes/vultrRoute.js");
const digitalOceanRoute = require("../routes/digitalOceanRoute.js");
const gcpRoute = require("../routes/gcpRoute.js");
const awsRoute = require("../routes/awsRoute.js");
const azureRoute = require("../routes/azureRoute.js");

app.get("/", (req, res) => {
  res.status(200).send("Server up");
});

app.use("/api/v1/linode", linodeRoute);
app.use("/api/v1/ovh", ovhRoute);
app.use("/api/v1/vultr", vultrRoute);
app.use("/api/v1/digitalOcean", digitalOceanRoute);
app.use("/api/v1/gcp", gcpRoute);
app.use("/api/v1/aws", awsRoute);
app.use("/api/v1/azure", azureRoute);

app.listen(process.env.PORT, () =>
  console.log(`app listen on port ${process.env.PORT}`)
);
