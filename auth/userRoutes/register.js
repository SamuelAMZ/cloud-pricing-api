const express = require("express");
const userRegisterRoute = express.Router();
const registerModel = require("../../models/UserRegister");

// validation
const Joi = require("@hapi/joi");

const schema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().required().email().lowercase(),
  password: Joi.string().min(6).required(),
});

userRegisterRoute.post("/", async (req, res, next) => {
  // joi validation sbody data
  const validation = await schema.validateAsync(req.body);
  console.log(validation);

  if (validation.details[0].message) {
    res.status(400).send(validation.details[0].message);
    return;
  } else {
    const user = new registerModel({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    try {
      await user.save();
      res.status(201).json({ message: "success", data: user });
    } catch (err) {
      if (err.Joi === true) {
        res.status(422).json({ message: "joi error" });
      }
      console.log(err.message);
      // res.status(400).json({ message: "something wrong" });

      next(err);
    }
  }
});

module.exports = userRegisterRoute;
