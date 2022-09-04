const express = require("express");
const genTokenRouter = express.Router();
const generateToken = require("../../auth/apiToken/tokenGenerate");
const Token = require("../../models/ApiToken");

genTokenRouter.post("/", async (req, res) => {
  const uId = res.locals.user._id;

  const token = await generateToken(uId);

  if (token._message) {
    res
      .status(500)
      .json({ message: "cannot generate token", error: token._message });
  } else {
    // check if user do not already have a token
    const alreadyHaveToken = await Token.findById(token.tokenSaved._id);
    if (alreadyHaveToken === null || !alreadyHaveToken) {
      // generate token
      res
        .status(200)
        .json({ message: "token generated", token: token.hashedToken });
    } else {
      // if found any record so the user have aleady token
      res.status(400).json({ message: "already have token" });
    }
  }
});

module.exports = genTokenRouter;