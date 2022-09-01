const express = require("express");
const userLoginRoute = express.Router();
const User = require("../../models/UserRegister");
// validation
const Joi = require("@hapi/joi");
// dehashing pass
const bcrypt = require("bcrypt");

const schema = Joi.object({
  email: Joi.string().required().email().lowercase(),
  password: Joi.string().alphanum().max(1024).required(),
});

userLoginRoute.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    // joi validation sbody data
    const validation = await schema.validateAsync({ email, password });
  } catch (error) {
    res.status(400).json(error.details[0].message);
    return;
  }

  // validation
  if (!email || !password) {
    res.status(400).json({ message: "verify your inputs" });
    return;
  }

  // check for the email address in the db
  const checkUser = await User.findOne({ email });

  if (!checkUser) {
    res.status(400).json({ message: "email not found" });
    return;
  } else {
    // dehash pass and try to match them
    if (await bcrypt.compare(password, checkUser.password)) {
      res.status(200).json({
        message: "login successfully",
        id: checkUser.id,
        name: checkUser.name,
        email: checkUser.email,
      });
    } else {
      res.status(400).json({ message: "verify password" });
      return;
    }
  }
});

module.exports = userLoginRoute;
