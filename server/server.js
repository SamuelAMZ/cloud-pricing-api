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

/*   
    @desc: get linode data {compute-database-storage-netwokring}
    @method: GET
    @endpoint: /api/v1/linode
*/
app.use("/api/v1/linode", linodeRoute);

/*   
    @desc: get ovh data {compute-database-storage-netwokring}
    @method: GET
    @endpoint: /api/v1/ovh
*/
app.use("/api/v1/ovh", ovhRoute);

/*   
    @desc: get vultr data {compute-database-storage-netwokring}
    @method: GET
    @endpoint: /api/v1/vultr
*/
app.use("/api/v1/vultr", vultrRoute);

/*   
    @desc: get digital ocean data {compute-database-storage-netwokring}
    @method: GET
    @endpoint: /api/v1/digitalOcean
*/
app.use("/api/v1/digitalOcean", digitalOceanRoute);

/*   
    @desc: get gcp data {compute-database-storage-netwokring}
    @method: GET
    @endpoint: /api/v1/gcp
*/
app.use("/api/v1/gcp", gcpRoute);

/*   
    @desc: get aws data {compute-database-storage-netwokring}
    @method: GET
    @endpoint: /api/v1/aws
*/
app.use("/api/v1/aws", awsRoute);

/*   
    @desc: get azure data {compute-database-storage-netwokring}
    @method: GET
    @endpoint: /api/v1/azure
*/
app.use("/api/v1/azure", azureRoute);

app.listen(process.env.PORT, () =>
  console.log(`app listen on port ${process.env.PORT}`)
);
