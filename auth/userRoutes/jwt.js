const jwt = require("jsonwebtoken");
require("dotenv").config();

// user tokens
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_U_SECRET, { expiresIn: "1day" });
};

// api tokens
const apiToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_API_SECRET, { expiresIn: "365day" });
};

module.exports = { createToken, apiToken };
