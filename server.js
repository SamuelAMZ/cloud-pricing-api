const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// routes providers
const linodeRoute = require("./routes/provider/linodeRoute.js");
const ovhRoute = require("./routes/provider/ovhRoute.js");
const vultrRoute = require("./routes/provider/vultrRoute.js");
const digitalOceanRoute = require("./routes/provider/digitalOceanRoute.js");
const gcpRoute = require("./routes/provider/gcpRoute.js");
const awsRoute = require("./routes/provider/awsRoute.js");
const azureRoute = require("./routes/provider/azureRoute.js");
// routes products
const computeRoute = require("./routes/product/computeRoute.js");
const databaseRoute = require("./routes/product/databaseRoute.js");
const storageRoute = require("./routes/product/storageRoute.js");
const networkingRoute = require("./routes/product/networkingRoute.js");
// User routes
const userRegisterRoute = require("./auth/userRoutes/register.js");
const userLoginRoute = require("./auth/userRoutes/login.js");
// api token routes
const tokenGenerateRoute = require("./routes/api/generateToken");

// middlewares
// check valid user token (login or not)
const { checkUToken } = require("./middleware/checkUToken");
const { actionAfterCheckingUToken } = require("./middleware/checkUToken");
// check valid api token
const { checkApiToken } = require("./middleware/checkApiToken");

// body parsing
app.use(express.json());
// cookies
app.use(cookieParser());
// cors
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);

// connect mongoose
mongoose.connect(process.env.DB_URI_USR);

app.get("/", (req, res) => {
  res.status(200).send("Server up");
});

/*   
    @desc: get linode data {compute-database-storage-netwokring}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/linode
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/linode", checkApiToken, linodeRoute);

/*   
    @desc: get ovh data {compute-database-storage-netwokring}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/ovh
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/ovh", checkApiToken, ovhRoute);

/*   
    @desc: get vultr data {compute-database-storage-netwokring}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/vultr
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/vultr", checkApiToken, vultrRoute);

/*   
    @desc: get digital ocean data {compute-database-storage-netwokring}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/digitalOcean
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/digitalOcean", checkApiToken, digitalOceanRoute);

/*   
    @desc: get gcp data {compute-database-storage-netwokring}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/gcp
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/gcp", checkApiToken, gcpRoute);

/*   
    @desc: get aws data {compute-database-storage-netwokring}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/aws
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/aws", checkApiToken, awsRoute);

/*   
    @desc: get azure data {compute-database-storage-netwokring}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/azure
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/azure", checkApiToken, azureRoute);

/*   
    @desc: get compute data {compute}
    @privacy: private
    @endpoint: /api/v1/compute
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/compute", checkApiToken, computeRoute);

/*   
    @desc: get database data {database}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/database
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/database", checkApiToken, databaseRoute);

/*   
    @desc: get storage data {storage}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/storage
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/storage", checkApiToken, storageRoute);

/*   
    @desc: get networking data {networking}
    @method: GET
    @privacy: private
    @endpoint: /api/v1/networking
    @headers: {domain: "example.com", token: "token"}
*/
app.use("/api/v1/networking", checkApiToken, networkingRoute);

/*   
    @desc: register user
    @method: POST
    @privacy: public
    @endpoint: /api/user/register
    @body: {name: "name", email: "email", password: "password"}
*/
app.use("/api/user/register", userRegisterRoute);

/*   
    @desc: login user
    @method: POST
    @privacy: public
    @endpoint: /api/user/login
    @body: {email: "email", password: "password"}
*/
app.use("/api/user/login", userLoginRoute);

/*   
    @desc: generate token
    @method: POST
    @privacy: private
    @endpoint: /api/token/gen
    @body: {domain: "example.com"}
*/
app.use(
  "/api/token/gen",
  checkUToken,
  actionAfterCheckingUToken,
  tokenGenerateRoute
);

app.listen(process.env.PORT, () =>
  console.log(`app listen on port ${process.env.PORT}`)
);
