const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// routes providers
const linodeRoute = require("../routes/provider/linodeRoute.js");
const ovhRoute = require("../routes/provider/ovhRoute.js");
const vultrRoute = require("../routes/provider/vultrRoute.js");
const digitalOceanRoute = require("../routes/provider/digitalOceanRoute.js");
const gcpRoute = require("../routes/provider/gcpRoute.js");
const awsRoute = require("../routes/provider/awsRoute.js");
const azureRoute = require("../routes/provider/azureRoute.js");
// routes products
const computeRoute = require("../routes/product/computeRoute.js");
const databaseRoute = require("../routes/product/databaseRoute.js");
const storageRoute = require("../routes/product/storageRoute.js");
const networkingRoute = require("../routes/product/networkingRoute.js");
// User routes
const userRegisterRoute = require("../auth/userRoutes/register.js");
const userLoginRoute = require("../auth/userRoutes/login.js");

// body parsing
app.use(express.json());

// connect mongoose
mongoose.connect(process.env.DB_URI_USR);

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

/*   
    @desc: get compute data {compute}
    @method: GET
    @endpoint: /api/v1/compute
*/
app.use("/api/v1/compute", computeRoute);

/*   
    @desc: get database data {database}
    @method: GET
    @endpoint: /api/v1/database
*/
app.use("/api/v1/database", databaseRoute);

/*   
    @desc: get storage data {storage}
    @method: GET
    @endpoint: /api/v1/storage
*/
app.use("/api/v1/storage", storageRoute);

/*   
    @desc: get networking data {networking}
    @method: GET
    @endpoint: /api/v1/networking
*/
app.use("/api/v1/networking", networkingRoute);

/*   
    @desc: register user
    @method: POST
    @endpoint: /api/user/register
*/
app.use("/api/user/register", userRegisterRoute);

/*   
    @desc: login user
    @method: POST
    @endpoint: /api/user/login
*/
app.use("/api/user/login", userLoginRoute);

app.listen(process.env.PORT, () =>
  console.log(`app listen on port ${process.env.PORT}`)
);
