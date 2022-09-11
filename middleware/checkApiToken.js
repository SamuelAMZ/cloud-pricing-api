const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const Token = require("../models/ApiToken");
// validation
const Joi = require("@hapi/joi");

const checkApiToken = async (req, res, next) => {
  // verify if token is include in the request
  const theDomain = req.get("domain");
  const theToken = req.get("token");

  if (!theToken || !theDomain) {
    res.status(401).json({ message: "token or domain not present" });
    return;
  }

  // joi checks
  const schema = Joi.object({
    domain: Joi.string().min(3).max(1024).required().lowercase(),
    token: Joi.string().min(3).max(1024).required().lowercase(),
  });

  try {
    const validation = await schema.validateAsync({
      domain: theDomain,
      token: theToken,
    });
  } catch (err) {
    res.status(400).json(err.details[0].message);
    return;
  }

  // verify if domain is in the db
  const checkToken = await Token.findOne({ domain: theDomain });

  if (checkToken === null || !checkToken) {
    res.status(401).json({ message: "domain not found" });
    return;
  } else {
    // dehash the token from the request
    // check for the token is valid
    const tokenDehash = await bcrypt.compare(theToken, checkToken.token);
    if (!tokenDehash) {
      res.status(401).json({ message: "token not valid" });
      return;
    } else {
      // check if remain is < 1
      if (checkToken.remain <= 0) {
        res.status(401).json({ message: "no credit left" });
        return;
      } else {
        // decrement remain by 1
        try {
          await Token.findOneAndUpdate(
            { _id: checkToken._id },
            { remain: checkToken.remain - 1 },
            { upsert: true }
          );
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: "server error" });
          return;
        }
        //  increment used
        try {
          await Token.findOneAndUpdate(
            { _id: checkToken._id },
            { used: checkToken.used + 1 },
            { upsert: true }
          );
        } catch (err) {
          console.log(err);
          res.status(500).json({ message: "server error" });
          return;
        }

        // serve data (next)
        next();
      }
    }
  }
};

module.exports = { checkApiToken };
