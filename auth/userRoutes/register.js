const express = require("express");
const userRegisterRoute = express.Router();
const User = require("../../models/UserRegister");
// validation
const Joi = require("@hapi/joi");
// hashing pass
const bcrypt = require("bcrypt");

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().required().email().lowercase(),
  password: Joi.string().alphanum().min(6).max(1024).required(),
});

userRegisterRoute.post("/", async (req, res) => {
  try {
    // joi validation sbody data
    const validation = await schema.validateAsync(req.body);
  } catch (error) {
    res.status(400).json(error.details[0].message);
    return;
  }

  // hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(req.body.password, salt);

  // getting actual data from body
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPass,
  });

  try {
    await user.save();
    res.status(201).json({
      message: "account created successfully",
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
    return;
  }
});

module.exports = userRegisterRoute;
