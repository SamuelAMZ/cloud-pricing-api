const { apiToken } = require("../userRoutes/jwt");
const bcrypt = require("bcrypt");
const Token = require("../../models/ApiToken");
require("dotenv").config();

const generateToken = async (uId, host) => {
  // generate token for user id
  let apiGeneratedToken = apiToken(uId);
  let apiKey = apiGeneratedToken
    .replace(".", "")
    .replace(".", "")
    .replace(".", "");
  // hash token
  const salt = await bcrypt.genSalt(10);
  const hashedToken = await bcrypt.hash(apiKey, salt);
  // attach hashed token to the user and put it in the token doc db
  const createToken = new Token({
    user: uId,
    token: hashedToken,
    host: host,
    remain: process.env.TOKEN_DEFAULT_REMAIN,
    used: 0,
  });

  try {
    const tokenSaved = await createToken.save();
    return { apiKey, tokenSaved };
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = generateToken;
