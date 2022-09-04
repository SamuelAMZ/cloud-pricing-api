const express = require("express");
const genTokenRouter = express.Router();
const generateToken = require("../../auth/apiToken/tokenGenerate");
const Token = require("../../models/ApiToken");
// validation
const Joi = require("@hapi/joi");

genTokenRouter.post("/", async (req, res) => {
  const uId = res.locals.user._id;
  const host = req.body.host;

  const schema = Joi.object({
    host: Joi.string().min(3).max(1024).required().lowercase(),
  });

  try {
    const validation = await schema.validateAsync(req.body);
  } catch (err) {
    res.status(400).json(err.details[0].message);
    return;
  }

  // check if user do not already have a token
  const alreadyHaveToken = await Token.findOne({ user: uId });
  if (alreadyHaveToken === null || !alreadyHaveToken) {
    // generate token
    const token = await generateToken(uId, host);

    if (token._message) {
      res
        .status(500)
        .json({ message: "cannot generate token", error: token._message });
    } else {
      res.status(200).json({ message: "token generated", token: token.apiKey });
    }
  } else {
    // if found any record so the user have aleady token
    res.status(400).json({ message: "already have token" });
  }
});

module.exports = genTokenRouter;
